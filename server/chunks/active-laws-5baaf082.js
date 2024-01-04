import { c as populateFromConfiguration, S as SellerType, P as PurposeType } from './mortgage-e00d7466.js';
import { w as writable } from './index-d5733251.js';

const defaultValue$2 = {
  age: 25
};
const urlSearchParams$2 = {};
let initialValue$2 = defaultValue$2;
if (Object.keys(urlSearchParams$2).length > 0) {
  populateFromConfiguration(initialValue$2, "user", urlSearchParams$2);
}
const user = writable(initialValue$2);
user.subscribe((value) => {
});
const defaultValue$1 = {
  totalPrice: 1e5,
  totalSize: 50,
  seller: SellerType.PRIVATE,
  purpose: PurposeType.FIRST_HOUSE,
  yield: 350
};
const urlSearchParams$1 = {};
let initialValue$1 = defaultValue$1;
if (Object.keys(urlSearchParams$1).length > 0) {
  populateFromConfiguration(initialValue$1, "house", urlSearchParams$1);
}
const house = writable(initialValue$1);
house.subscribe((value) => {
});
const defaultValue = {
  dl_73_2021: true
};
const urlSearchParams = {};
let initialValue = defaultValue;
if (Object.keys(urlSearchParams).length > 0) {
  populateFromConfiguration(initialValue, "activeLaws", urlSearchParams);
}
const activeLaws = writable(initialValue);
activeLaws.subscribe((value) => {
});

export { defaultValue$1 as a, defaultValue as b, activeLaws as c, defaultValue$2 as d, house as h, user as u };
//# sourceMappingURL=active-laws-5baaf082.js.map
