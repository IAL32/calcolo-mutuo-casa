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
            configurationObject[capitalizedKey] = obj[key] !== null ? obj[key].toString() : null;
        });
    }

    return configurationObject;
};
