import { browser } from '$app/env';
import { PurposeType, SellerType } from '$lib/enums';
import { fromURLSearchParamsToConfiguration, populateFromConfiguration } from '$lib/helpers';
import type { House } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: House = {
	totalPrice: 1e5,
	totalSize: 50,
	seller: SellerType.PRIVATE,
	purpose: PurposeType.FIRST_HOUSE,
	yield: 350
};

const urlSearchParams = browser ? fromURLSearchParamsToConfiguration(window.location.search) : {};

let initialValue: House = defaultValue;

if (Object.keys(urlSearchParams).length > 0) {
	populateFromConfiguration(initialValue, 'house', urlSearchParams);
} else {
	if (browser) {
		try {
			initialValue = JSON.parse(window.localStorage.getItem('house')) ?? defaultValue;
		} catch (e) {
			//
		}
	}
}

export const house = writable<House>(initialValue);

house.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('house', JSON.stringify(value));
	}
});
