import { PERIOD_TYPE } from './enums';
import type { Mortgage } from './types';

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
 * @param mortgage_data Mortgage data
 * @returns number Amount of mortgage by period
 */
export const calculate_mortgage = (mortgage_data: Mortgage): number => {
	const numberOfPeriods: number = mortgage_data.period === PERIOD_TYPE.MONTHS ? 1 : 12;
	return pmt_(
		mortgage_data.taeg / 100 / numberOfPeriods,
		mortgage_data.time * numberOfPeriods,
		mortgage_data.total
	);
};

export const calculate_principal_paid_amount = (
	mortgage_data: Mortgage,
	interestPeriod: number
): number => {
	const pmt = calculate_mortgage(mortgage_data);

	return pmt - ipmt_(pmt, mortgage_data.total, mortgage_data.taeg / 100 / 12, interestPeriod);
};

export const calculate_interest_paid_amount = (
	mortgage_data: Mortgage,
	interestPeriod: number
): number => {
	const pmt = calculate_mortgage(mortgage_data);

	return ipmt_(pmt, mortgage_data.total, mortgage_data.taeg / 100 / 12, interestPeriod);
};
