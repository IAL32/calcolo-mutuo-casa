import { w as writable } from './index-d5733251.js';

const toPrettyEuro = (value) => {
  return value.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2
  });
};
const toPrettyNumber = (value) => {
  return value.toLocaleString("it-IT", {
    maximumFractionDigits: 2
  });
};
const toConfigurationObject = (prefix, obj) => {
  const configurationObject = {};
  if (obj) {
    Object.keys(obj).forEach((key) => {
      const capitalizedKey = prefix + "_" + key;
      configurationObject[capitalizedKey] = obj[key] !== null ? obj[key].toString() : null;
    });
  }
  return configurationObject;
};
const generateCurrentConfigurationURLParams = (user, house, mortgage2, activeLaws) => {
  return configurationToParamsString(
    generateCurrentConfiguration(user, house, mortgage2, activeLaws)
  );
};
const generateCurrentConfiguration = (user, house, mortgage2, activeLaws) => {
  return {
    ...toConfigurationObject("user", user),
    ...toConfigurationObject("house", house),
    ...toConfigurationObject("mortgage", mortgage2),
    ...toConfigurationObject("activeLaws", activeLaws)
  };
};
const configurationToParamsString = (configuration) => {
  return new URLSearchParams(configuration).toString();
};
const fromURLSearchParamsToConfiguration = (urlSearchParams2) => {
  const result = {};
  new URLSearchParams(urlSearchParams2).forEach((value, key) => {
    let parsedValue = null;
    if (value === "true") {
      parsedValue = true;
    } else if (value === "false") {
      parsedValue = false;
    } else if (!isNaN(parseFloat(value))) {
      parsedValue = parseFloat(value);
    }
    result[key] = parsedValue;
  });
  return result;
};
const populateAllFromConfiguration = (objects, configuration) => {
  objects.forEach((item) => {
    populateFromConfiguration(item.obj, item.prefix, configuration);
  });
};
const populateFromConfiguration = (obj, objectPrefix, configuration) => {
  Object.entries(configuration).forEach(([key, value]) => {
    const [paramOwner, ...paramKey] = key.split("_");
    if (paramOwner === objectPrefix) {
      obj[paramKey.join("_")] = value;
    }
  });
};
var SellerType = /* @__PURE__ */ ((SellerType2) => {
  SellerType2[SellerType2["PRIVATE"] = 0] = "PRIVATE";
  SellerType2[SellerType2["COMPANY"] = 1] = "COMPANY";
  return SellerType2;
})(SellerType || {});
var PurposeType = /* @__PURE__ */ ((PurposeType2) => {
  PurposeType2[PurposeType2["FIRST_HOUSE"] = 0] = "FIRST_HOUSE";
  PurposeType2[PurposeType2["SECOND_HOUSE"] = 1] = "SECOND_HOUSE";
  return PurposeType2;
})(PurposeType || {});
var PeriodType = /* @__PURE__ */ ((PeriodType2) => {
  PeriodType2[PeriodType2["MONTHS"] = 0] = "MONTHS";
  PeriodType2[PeriodType2["YEARS"] = 1] = "YEARS";
  return PeriodType2;
})(PeriodType || {});
const defaultValue = {
  total: 8e4,
  period: PeriodType.YEARS,
  time: 30,
  taeg: 1.15
};
const urlSearchParams = {};
let initialValue = defaultValue;
if (Object.keys(urlSearchParams).length > 0) {
  populateFromConfiguration(initialValue, "mortgage", urlSearchParams);
}
const mortgage = writable(initialValue);
mortgage.subscribe((value) => {
});

export { PurposeType as P, SellerType as S, toPrettyNumber as a, PeriodType as b, populateFromConfiguration as c, defaultValue as d, fromURLSearchParamsToConfiguration as f, generateCurrentConfigurationURLParams as g, mortgage as m, populateAllFromConfiguration as p, toPrettyEuro as t };
//# sourceMappingURL=mortgage-e00d7466.js.map
