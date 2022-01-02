import { browser } from '$app/env';
import type { ActiveLaws } from '$lib/types';
import { writable } from 'svelte/store';

const defaultValue: ActiveLaws = {
  dl_73_2021: true
};

const initialValue: ActiveLaws = browser
	? JSON.parse(window.localStorage.getItem('activeLaws')) ?? defaultValue
	: defaultValue;

export const activeLaws = writable<ActiveLaws>(initialValue);

activeLaws.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('activeLaws', JSON.stringify(value));
	}
});
