import type { PurposeType, SellerType } from './enums';

/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface User {
	age: number;
}

export interface House {
	totalPrice: number;

	totalSize: number;
	seller: SellerType;
	purpose: PurposeType;
	yield: number; // rendita catastale
}

export interface Mortgage {
	total: number;
	period: PERIOD_TYPE;
	time: number;
	taeg: number;
}

export interface MortgagePlan {
	principalPaid: number;
	interestPaid: number;
	mortgagePaid: number;
	remainingPrincipal: number;
}

export interface HouseSaleCosts {
	realtor: number;
	registry: number;
	mortgageTax: number; // imposta ipotecaria
	landRegistryTax: number; // imposta catastale
	vat: number;
	notary: number;

	total: number;
}

export interface MortgageCosts {
	openingMortgage: number; // istruttoria pratica di mutuo
	houseExamination: number; // perizia dell'immobile
	alternateTax: number; // imposta sostitutiva
	notary: number; // onorari notarili per atto di mutuo

	total: number;
}

export interface ActiveLaws {
	// https://www.agenziaentrateriscossione.gov.it/it/Per-saperne-di-piu/covid-19/il-decreto-sostegni-bis/
	dl_73_2021: boolean;
}
