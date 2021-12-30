import type { PURPOSE_TYPE, SELLER_TYPE } from './enums';

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
	seller: SELLER_TYPE;
	purpose: PURPOSE_TYPE;
}

export interface Mortgage {
	total: number;
	period: PERIOD_TYPE;
	time: number;
	taeg: number;
}
