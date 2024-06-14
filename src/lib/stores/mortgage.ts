import { browser } from '$app/environment';
import { PeriodType } from '$lib/enums';
import type { Mortgage } from '$lib/types';
import { writable } from 'svelte/store';

export const defaultValue: Mortgage = {
    total: 136_000,
    period: PeriodType.YEARS,
    time: 30,
    taeg: 3.38
};

let initialValue: Mortgage = defaultValue;

export const mortgage = writable<Mortgage>(initialValue);

mortgage.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('mortgage', JSON.stringify(value));
    }
});
