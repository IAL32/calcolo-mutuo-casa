import { browser } from '$app/environment';
import { PeriodType } from '$lib/enums';
import { fromURLSearchParamsToConfiguration, populateFromConfiguration } from '$lib/helpers';
import type { Mortgage } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: Mortgage = {
	total: 8e4,
	period: PeriodType.YEARS,
	time: 30,
	taeg: 1.15
};

const urlSearchParams = browser ? fromURLSearchParamsToConfiguration(window.location.search) : {};

let initialValue: Mortgage = defaultValue;

if (Object.keys(urlSearchParams).length > 0) {
	populateFromConfiguration(initialValue, 'mortgage', urlSearchParams);
} else {
	if (browser) {
		try {
			initialValue = JSON.parse(window.localStorage.getItem('mortgage')) ?? defaultValue;
		} catch (e) {
			//
		}
	}
}

export const mortgage = writable<Mortgage>(initialValue);

mortgage.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('mortgage', JSON.stringify(value));
	}
});
