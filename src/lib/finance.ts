import { PERIOD_TYPE, PURPOSE_TYPE, SELLER_TYPE } from './enums';
import type { House, HouseSaleCosts, Mortgage, MortgageCosts, MortgagePlan } from './types';

const REALTOR_FLAT_RATE_LIMIT = 1e6;
const REALTOR_FLAT_RATE = 6000;
const REALTOR_RATE = 0.03; // 3%

const HOUSE_YIELD_CONSTANT = 115.5;
const REGISTRY_TAX_COMPANY = 200;

const MORTGAGE_TAX_PRIVATE = 50;
const MORTGAGE_TAX_COMPANY = 200;

const LAND_REGISTRY_TAX_PRIVATE = 50;
const LAND_REGISTRY_TAX_COMPANY = 200;

const HOUSE_SALE_NOTARY_COST = 1800;

const OPENING_MORTGAGE_COST = 250;
const HOUSE_EXAMINATION_COST = 250;

const ALTERNATE_TAX_FIRST_HOUSE = 0.0025;
const ALTERNATE_TAX_SECOND_HOUSE = 0.02;

const MORTGAGE_NOTARY_COST = 2400;

/**
 * From: https://superuser.com/a/871411/1473069
 * PMT = (Pv*R) / [1 - (1 + R)^(-n)]
 *  where
 * Pv = Present Value (starting value of the loan)
 * APR = Annual Percentage Rate
 * R = Periodic Interest Rate = APR/number of interest periods per year
 * n = Total number of interest periods (interest periods per year * number of years)
 */
const pmt_ = (
	periodicInterestRate: number, // R
	totalNOfInterestPeriods: number, // n
	presentValue: number // Pv
): number => {
	return (
		(presentValue * periodicInterestRate) /
		(1 - Math.pow(1 + periodicInterestRate, -totalNOfInterestPeriods))
	);
};

/**
 *
 * IPMT = PMT + (1+APR)^(n-1) * (Pv * APR - PMT)
 *  where
 * Pv = Present Value (starting value of the loan)
 * APR = Annual Percentage Rate
 * n = Interest period in question
 */
const ipmt_ = (
	pmt: number,
	presentValue: number,
	annualPercenRate: number,
	interestPeriod: number
) => {
	return (
		pmt +
		Math.pow(1 + annualPercenRate, interestPeriod - 1) * (presentValue * annualPercenRate - pmt)
	);
};

/**
 * Calculates the mortgage amount according to the input mortgage information.
 * @param mortgageData Mortgage data
 * @returns number Amount of mortgage by period
 */
export const calculate_mortgage = (mortgageData: Mortgage): number => {
	const numberOfPeriods: number = mortgageData.period === PERIOD_TYPE.MONTHS ? 1 : 12;
	return pmt_(
		mortgageData.taeg / 100 / numberOfPeriods,
		mortgageData.time * numberOfPeriods,
		mortgageData.total
	);
};

export const calculate_principal_paid_amount = (
	mortgageData: Mortgage,
	interestPeriod: number
): number => {
	const pmt = calculate_mortgage(mortgageData);

	return pmt - ipmt_(pmt, mortgageData.total, mortgageData.taeg / 100 / 12, interestPeriod);
};

export const calculate_interest_paid_amount = (
	mortgagedata: Mortgage,
	interestPeriod: number
): number => {
	const pmt = calculate_mortgage(mortgagedata);

	return ipmt_(pmt, mortgagedata.total, mortgagedata.taeg / 100 / 12, interestPeriod);
};

export const get_mortgage_plan = (mortgageData: Mortgage): MortgagePlan[] => {
	const numberOfPeriods: number = mortgageData.period === PERIOD_TYPE.MONTHS ? 1 : 12;

	const mortgage: number = calculate_mortgage(mortgageData);
	let remainingPrincipal = mortgageData.total;

	return Array.from(Array(mortgageData.time * numberOfPeriods)).map((_, i) => {
		const principalPaid = calculate_principal_paid_amount(mortgageData, i + 1);
		return {
			principalPaid,
			interestPaid: calculate_interest_paid_amount(mortgageData, i + 1),
			mortgagePaid: mortgage,
			remainingPrincipal: (remainingPrincipal -= principalPaid)
		};
	});
};

export const calculate_realtor_cost = (houseValue: number): number => {
	if (houseValue <= REALTOR_FLAT_RATE_LIMIT) {
		return REALTOR_FLAT_RATE;
	}

	return REALTOR_RATE * houseValue;
};

export const calculate_registry_cost = (
	houseValue: number,
	houseYield: number,
	purpose: PURPOSE_TYPE,
	seller: SELLER_TYPE
): number => {
	const landRegistryValue: number = calculate_house_land_registry_value(houseYield);

	if (seller === SELLER_TYPE.COMPANY) {
		return REGISTRY_TAX_COMPANY;
	}

	if (purpose == PURPOSE_TYPE.FIRST_HOUSE) {
		return landRegistryValue * 0.02;
	}

	return houseValue * 0.09;
};

export const calculate_house_land_registry_value = (houseYield: number): number => {
	return houseYield * HOUSE_YIELD_CONSTANT;
};

export const calculate_mortgage_tax = (seller: SELLER_TYPE): number => {
	return seller === SELLER_TYPE.PRIVATE ? MORTGAGE_TAX_PRIVATE : MORTGAGE_TAX_COMPANY;
};

export const calculate_land_registry_tax = (seller: SELLER_TYPE): number => {
	return seller === SELLER_TYPE.PRIVATE ? LAND_REGISTRY_TAX_PRIVATE : LAND_REGISTRY_TAX_COMPANY;
};

export const calculate_house_sale_vat = (
	houseValue: number,
	purpose: PURPOSE_TYPE,
	seller: SELLER_TYPE
): number => {
	if (seller === SELLER_TYPE.PRIVATE) {
		return 0;
	}

	if (purpose === PURPOSE_TYPE.FIRST_HOUSE) {
		return houseValue * 0.04;
	}

	return houseValue * 0.1;
};

export const calculate_house_sale_costs = (house: House): HouseSaleCosts => {
	const houseSaleCosts: HouseSaleCosts = {
		realtor: calculate_realtor_cost(house.totalPrice),
		registry: calculate_registry_cost(house.totalPrice, house.yield, house.purpose, house.seller),
		mortgageTax: calculate_mortgage_tax(house.seller),
		landRegistryTax: calculate_land_registry_tax(house.seller),
		vat: calculate_house_sale_vat(house.totalPrice, house.purpose, house.seller),
		notary: HOUSE_SALE_NOTARY_COST,

		total: 0
	};

	houseSaleCosts.total =
		houseSaleCosts.realtor +
		houseSaleCosts.registry +
		houseSaleCosts.mortgageTax +
		houseSaleCosts.vat +
		houseSaleCosts.notary +
		houseSaleCosts.landRegistryTax;

	return houseSaleCosts;
};

export const calculate_mortgage_alternate_tax = (
	houseValue: number,
	purpose: PURPOSE_TYPE
): number => {
	return purpose === PURPOSE_TYPE.FIRST_HOUSE
		? houseValue * ALTERNATE_TAX_FIRST_HOUSE
		: houseValue * ALTERNATE_TAX_SECOND_HOUSE;
};

export const calculate_mortgage_costs = (
	houseValue: number,
	purpose: PURPOSE_TYPE
): MortgageCosts => {
	const mortgageCosts: MortgageCosts = {
		openingMortgage: OPENING_MORTGAGE_COST,
		houseExamination: HOUSE_EXAMINATION_COST,
		alternateTax: calculate_mortgage_alternate_tax(houseValue, purpose),
		notary: MORTGAGE_NOTARY_COST,

		total: 0
	};

	mortgageCosts.total =
		mortgageCosts.openingMortgage +
		mortgageCosts.houseExamination +
		mortgageCosts.alternateTax +
		mortgageCosts.notary;

	return mortgageCosts;
};
