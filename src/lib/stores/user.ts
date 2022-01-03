import { browser } from '$app/env';
import { fromURLSearchParamsToConfiguration, populateFromConfiguration } from '$lib/helpers';
import type { User } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: User = {
	age: 25
};

const urlSearchParams = browser ? fromURLSearchParamsToConfiguration(window.location.search) : {};

let initialValue: User = defaultValue;

if (Object.keys(urlSearchParams).length > 0) {
	populateFromConfiguration(initialValue, 'user', urlSearchParams);
} else {
	if (browser) {
		try {
			initialValue = JSON.parse(window.localStorage.getItem('user')) ?? defaultValue;
		} catch (e) {
			//
		}
	}
}

export const user = writable<User>(initialValue);

user.subscribe((value) => {
	if (browser) {
		localStorage.setItem('user', JSON.stringify(value));
	}
});
