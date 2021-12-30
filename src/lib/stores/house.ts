import { browser } from '$app/env';
import { PURPOSE_TYPE, SELLER_TYPE } from '$lib/enums';
import type { House } from '$lib/types';
import { writable } from 'svelte/store';

const defaultValue: House = {
	totalPrice: 1e5,
	totalSize: 50,
	seller: SELLER_TYPE.PRIVATE,
	purpose: PURPOSE_TYPE.FIRST_HOUSE
};

const initialValue: House = browser
	? JSON.parse(window.localStorage.getItem('house')) ?? defaultValue
	: defaultValue;

export const house = writable<House>(initialValue);

house.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('house', JSON.stringify(value));
	}
});
