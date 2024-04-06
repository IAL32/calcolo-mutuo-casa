import { browser } from '$app/environment';
import type { ActiveLaws } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: ActiveLaws = {
	dl_73_2021: false // the DL is not active anymore
};

let initialValue: ActiveLaws = defaultValue;

export const activeLaws = writable<ActiveLaws>(initialValue);

activeLaws.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('activeLaws', JSON.stringify(value));
	}
});
