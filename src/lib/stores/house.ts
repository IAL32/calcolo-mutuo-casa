import { PurposeType, SellerType } from '$lib/enums';
import type { House } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: House = {
    totalPrice: 1e5,
    totalSize: 50,
    seller: SellerType.PRIVATE,
    purpose: PurposeType.FIRST_HOUSE,
    yield: 350,
    useRealtor: true,
    realtorFee: 3,
};

let initialValue: House = defaultValue;

export const house = writable<House>(initialValue);
