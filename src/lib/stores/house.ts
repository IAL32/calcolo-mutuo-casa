import { PurposeType, SellerType } from '$lib/enums';
import type { House } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: House = {
    totalPrice: 170_000,
    totalSize: 50,
    seller: SellerType.PRIVATE,
    purpose: PurposeType.FIRST_HOUSE,
    yield: 350,
    useRealtor: true,
    realtorFee: 3,
    useBroker: false,
    brokerFee: 1,
};

let initialValue: House = defaultValue;

export const house = writable<House>(initialValue);
