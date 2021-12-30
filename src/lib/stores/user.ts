import { browser } from '$app/env';
import type { User } from '$lib/types';
import { writable } from 'svelte/store';

const defaultValue: User = {
	age: 25
};

const initialValue: User = browser
	? JSON.parse(localStorage.getItem('user')) ?? defaultValue
	: defaultValue;

export const user = writable<User>(initialValue);

user.subscribe((value) => {
	if (browser) {
		localStorage.setItem('user', JSON.stringify(value));
	}
});
