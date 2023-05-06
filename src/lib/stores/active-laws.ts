import { browser } from '$app/environment';
import { fromURLSearchParamsToConfiguration, populateFromConfiguration } from '$lib/helpers';
import type { ActiveLaws } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: ActiveLaws = {
	dl_73_2021: true
};

const urlSearchParams = browser ? fromURLSearchParamsToConfiguration(window.location.search) : {};

let initialValue: ActiveLaws = defaultValue;

if (Object.keys(urlSearchParams).length > 0) {
	populateFromConfiguration(initialValue, 'activeLaws', urlSearchParams);
} else {
	if (browser) {
		try {
			initialValue = JSON.parse(window.localStorage.getItem('activeLaws')) ?? defaultValue;
		} catch (e) {
			//
		}
	}
}

export const activeLaws = writable<ActiveLaws>(initialValue);

activeLaws.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('activeLaws', JSON.stringify(value));
	}
});
