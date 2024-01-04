import { b as PeriodType, S as SellerType, P as PurposeType } from './mortgage-e00d7466.js';

const REALTOR_FLAT_RATE_LIMIT = 15e4;
const REALTOR_FLAT_RATE = 6e3;
const REALTOR_RATE = 0.03;
const HOUSE_YIELD_CONSTANT = 115.5;
const REGISTRY_TAX_COMPANY = 200;
const MORTGAGE_TAX_PRIVATE = 50;
const MORTGAGE_TAX_COMPANY = 200;
const LAND_REGISTRY_TAX_PRIVATE = 50;
const LAND_REGISTRY_TAX_COMPANY = 200;
const HOUSE_SALE_NOTARY_COST = 1800;
const OPENING_MORTGAGE_COST = 250;
const HOUSE_EXAMINATION_COST = 250;
const ALTERNATE_TAX_FIRST_HOUSE = 25e-4;
const ALTERNATE_TAX_SECOND_HOUSE = 0.02;
const MORTGAGE_NOTARY_COST = 2400;
const pmt_ = (periodicInterestRate, totalNOfInterestPeriods, presentValue) => {
  return presentValue * periodicInterestRate / (1 - Math.pow(1 + periodicInterestRate, -totalNOfInterestPeriods));
};
const ipmt_ = (pmt, presentValue, annualPercenRate, interestPeriod) => {
  return pmt + Math.pow(1 + annualPercenRate, interestPeriod - 1) * (presentValue * annualPercenRate - pmt);
};
const calculateMortgage = (mortgageData) => {
  const numberOfPeriods = mortgageData.period === PeriodType.MONTHS ? 1 : 12;
  return pmt_(
    mortgageData.taeg / 100 / numberOfPeriods,
    mortgageData.time * numberOfPeriods,
    mortgageData.total
  );
};
const calculateMortgageTotal = (mortgageData) => {
  const numberOfPeriods = mortgageData.period === PeriodType.MONTHS ? 1 : 12;
  return calculateMortgage(mortgageData) * mortgageData.time * numberOfPeriods;
};
const calculate_principal_paid_amount = (mortgageData, interestPeriod) => {
  const pmt = calculateMortgage(mortgageData);
  return pmt - ipmt_(pmt, mortgageData.total, mortgageData.taeg / 100 / 12, interestPeriod);
};
const calculate_interest_paid_amount = (mortgagedata, interestPeriod) => {
  const pmt = calculateMortgage(mortgagedata);
  return ipmt_(pmt, mortgagedata.total, mortgagedata.taeg / 100 / 12, interestPeriod);
};
const calculateMortgagePlan = (mortgageData) => {
  const numberOfPeriods = mortgageData.period === PeriodType.MONTHS ? 1 : 12;
  const mortgage = calculateMortgage(mortgageData);
  let remainingPrincipal = mortgageData.total;
  return Array.from(Array(mortgageData.time * numberOfPeriods)).map((_, i) => {
    const principalPaid = calculate_principal_paid_amount(mortgageData, i + 1);
    return {
      principalPaid,
      interestPaid: calculate_interest_paid_amount(mortgageData, i + 1),
      mortgagePaid: mortgage,
      remainingPrincipal: remainingPrincipal -= principalPaid
    };
  });
};
const calculate_realtor_cost = (useRealtor, houseValue) => {
  if (!useRealtor)
    return 0;
  if (houseValue <= REALTOR_FLAT_RATE_LIMIT) {
    return REALTOR_FLAT_RATE;
  }
  return REALTOR_RATE * houseValue;
};
const calculate_registry_cost = (activeLaws, houseValue, houseYield, purpose, seller) => {
  if (activeLaws.dl_73_2021) {
    return 0;
  }
  const landRegistryValue = calculate_house_land_registry_value(houseYield);
  if (seller === SellerType.COMPANY) {
    return REGISTRY_TAX_COMPANY;
  }
  if (purpose == PurposeType.FIRST_HOUSE) {
    return landRegistryValue * 0.02;
  }
  return houseValue * 0.09;
};
const calculate_house_land_registry_value = (houseYield) => {
  return houseYield * HOUSE_YIELD_CONSTANT;
};
const calculate_mortgage_tax = (activeLaws, seller) => {
  if (activeLaws.dl_73_2021) {
    return 0;
  }
  return seller === SellerType.PRIVATE ? MORTGAGE_TAX_PRIVATE : MORTGAGE_TAX_COMPANY;
};
const calculate_land_registry_tax = (activeLaws, seller) => {
  if (activeLaws.dl_73_2021) {
    return 0;
  }
  return seller === SellerType.PRIVATE ? LAND_REGISTRY_TAX_PRIVATE : LAND_REGISTRY_TAX_COMPANY;
};
const calculate_house_sale_vat = (houseValue, purpose, seller) => {
  if (seller === SellerType.PRIVATE) {
    return 0;
  }
  if (purpose === PurposeType.FIRST_HOUSE) {
    return houseValue * 0.04;
  }
  return houseValue * 0.1;
};
const calculate_mortgage_alternate_tax = (activeLaws, houseValue, purpose) => {
  if (activeLaws.dl_73_2021) {
    return 0;
  }
  return purpose === PurposeType.FIRST_HOUSE ? houseValue * ALTERNATE_TAX_FIRST_HOUSE : houseValue * ALTERNATE_TAX_SECOND_HOUSE;
};
const calculateHouseSaleCosts = (activeLaws, house) => {
  const houseSaleCosts = {
    realtor: calculate_realtor_cost(house.useRealtor, house.totalPrice),
    registry: calculate_registry_cost(
      activeLaws,
      house.totalPrice,
      house.yield,
      house.purpose,
      house.seller
    ),
    mortgageTax: calculate_mortgage_tax(activeLaws, house.seller),
    landRegistryTax: calculate_land_registry_tax(activeLaws, house.seller),
    vat: calculate_house_sale_vat(house.totalPrice, house.purpose, house.seller),
    notary: HOUSE_SALE_NOTARY_COST,
    total: 0
  };
  houseSaleCosts.total = houseSaleCosts.realtor + houseSaleCosts.registry + houseSaleCosts.mortgageTax + houseSaleCosts.vat + houseSaleCosts.notary + houseSaleCosts.landRegistryTax;
  return houseSaleCosts;
};
const calculateMortgageCosts = (activeLaws, houseValue, purpose) => {
  const mortgageCosts = {
    openingMortgage: OPENING_MORTGAGE_COST,
    houseExamination: HOUSE_EXAMINATION_COST,
    alternateTax: calculate_mortgage_alternate_tax(activeLaws, houseValue, purpose),
    notary: MORTGAGE_NOTARY_COST,
    total: 0
  };
  mortgageCosts.total = mortgageCosts.openingMortgage + mortgageCosts.houseExamination + mortgageCosts.alternateTax + mortgageCosts.notary;
  return mortgageCosts;
};

export { calculateMortgageCosts as a, calculateMortgagePlan as b, calculateHouseSaleCosts as c, calculateMortgage as d, calculateMortgageTotal as e };
//# sourceMappingURL=finance-f08a3ec3.js.map
