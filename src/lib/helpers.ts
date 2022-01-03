import type { ActiveLaws, House, Mortgage, User } from './types';

export const toPrettyEuro = (value: number): string => {
	return value.toLocaleString('it-IT', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 2
	});
};

export const toPrettyNumber = (value: number): string => {
	return value.toLocaleString('it-IT', {
		maximumFractionDigits: 2
	});
};

export const toConfigurationObject = <T>(prefix: string, obj: T): Record<string, string> => {
	const configurationObject = {};
	if (obj) {
		Object.keys(obj).forEach((key) => {
			const capitalizedKey: string = prefix + '_' + key;
			configurationObject[capitalizedKey] = obj[key].toString();
		});
	}

	return configurationObject;
};

export const generateCurrentConfigurationURLParams = (
	user: User,
	house: House,
	mortgage: Mortgage,
	activeLaws: ActiveLaws
): string => {
	return configurationToParamsString(
		generateCurrentConfiguration(user, house, mortgage, activeLaws)
	);
};

export const generateCurrentConfiguration = (
	user: User,
	house: House,
	mortgage: Mortgage,
	activeLaws: ActiveLaws
): Record<string, string> => {
	return {
		...toConfigurationObject('user', user),
		...toConfigurationObject('house', house),
		...toConfigurationObject('mortgage', mortgage),
		...toConfigurationObject('activeLaws', activeLaws)
	};
};

export const configurationToParamsString = (configuration: Record<string, string>): string => {
	return new URLSearchParams(configuration).toString();
};

export const fromURLSearchParamsToConfiguration = (
	urlSearchParams: string | URLSearchParams
): Record<string, string> => {
	const result = {};
	new URLSearchParams(urlSearchParams).forEach((value, key) => {
		let parsedValue = null;

		if (value === 'true') {
			parsedValue = true;
		} else if (value === 'false') {
			parsedValue = false;
		} else if (!isNaN(parseFloat(value))) {
			parsedValue = parseFloat(value);
		}

		result[key] = parsedValue;
	});

	return result;
};

export const populateAllFromConfiguration = (
	objects: { obj: unknown, prefix: string }[],
	configuration: Record<string, unknown>
): void => {
	objects.forEach((item) => {
		populateFromConfiguration(item.obj, item.prefix, configuration);
	});
}

export const populateFromConfiguration = <T>(
	obj: T,
	objectPrefix: string,
	configuration: Record<string, unknown>
): void => {
	Object.entries(configuration).forEach(([key, value]) => {
		const [paramOwner, ...paramKey] = key.split('_');
		if (paramOwner === objectPrefix) {
			obj[paramKey.join('_')] = value;
		}
	});
};
