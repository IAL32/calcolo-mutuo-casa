import { browser } from '$app/environment';
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
};

let initialValue: House = defaultValue;

export const house = writable<House>(initialValue);

house.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('house', JSON.stringify(value));
    }
});
