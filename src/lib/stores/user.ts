import { browser } from '$app/environment';
import type { User } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: User = {
    age: 25
};

let initialValue: User = defaultValue;

export const user = writable<User>(initialValue);

user.subscribe((value) => {
    if (browser) {
        localStorage.setItem('user', JSON.stringify(value));
    }
});
