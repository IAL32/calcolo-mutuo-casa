import { browser } from '$app/env';
import { PERIOD_TYPE } from '$lib/enums';
import type { Mortgage } from '$lib/types';
import { writable } from 'svelte/store';

const defaultValue: Mortgage = {
	total: 8e4,
	period: PERIOD_TYPE.YEARS,
	time: 30,
	taeg: 1.15
};

const initialValue: Mortgage = browser
	? JSON.parse(window.localStorage.getItem('mortgage')) ?? defaultValue
	: defaultValue;

export const mortgage = writable<Mortgage>(initialValue);

mortgage.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('mortgage', JSON.stringify(value));
	}
});
