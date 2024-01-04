import { c as create_ssr_component, f as subscribe, v as validate_component, i as add_attribute, g as escape, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, j as each, k as compute_slots } from './index2-613b03a1.js';
import { c as classnames, i as isObject, g as getColumnSizeClass } from './Offcanvas.svelte_svelte_type_style_lang-c11e389a.js';
import { R as Row, C as Col } from './Row-aa0fc97c.js';
import { g as generateCurrentConfigurationURLParams, t as toPrettyEuro, m as mortgage, S as SellerType, P as PurposeType, b as PeriodType } from './mortgage-e00d7466.js';
import { S as SellerTypeHelper, P as PurposeTypeHelper, a as PeriodTypeHelper } from './EnumHelper-0bd797fb.js';
import { c as activeLaws, h as house, u as user } from './active-laws-5baaf082.js';
import { d as calculateMortgage, e as calculateMortgageTotal, c as calculateHouseSaleCosts, a as calculateMortgageCosts } from './finance-f08a3ec3.js';
import { T as Table } from './Table-f97d7155.js';
import './index-d5733251.js';

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let classes;
  let defaultAriaLabel;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "block",
    "children",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "style",
    "value",
    "white"
  ]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { children = void 0 } = $$props;
  let { close = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { inner = void 0 } = $$props;
  let { outline = false } = $$props;
  let { size = null } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { white = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  ariaLabel = $$props["aria-label"];
  classes = classnames(className, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, {
    active,
    "btn-close-white": close && white
  });
  defaultAriaLabel = close ? "Close" : null;
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { disabled: disabled || null },
      { href: escape_attribute_value(href) },
      {
        "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
      },
      { style: escape_attribute_value(style) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</a>` : `<button${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { disabled: disabled || null },
      { value: escape_attribute_value(value) },
      {
        "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
      },
      { style: escape_attribute_value(style) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      ${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}
    `}</button>`}`;
});
const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "size", "vertical"]);
  let { class: className = "" } = $$props;
  let { size = "" } = $$props;
  let { vertical = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  classes = classnames(className, size ? `btn-group-${size}` : false, vertical ? "btn-group-vertical" : "btn-group");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ButtonToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "btn-toolbar");
  return `<div${spread(
    [
      escape_object($$restProps),
      { role: "toolbar" },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const FormCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let inputClasses;
  let idFor;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "checked",
    "disabled",
    "group",
    "id",
    "inline",
    "inner",
    "invalid",
    "label",
    "name",
    "reverse",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { group = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { inline = false } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = "" } = $$props;
  let { name = "" } = $$props;
  let { reverse = false } = $$props;
  let { size = "" } = $$props;
  let { type = "checkbox" } = $$props;
  let { valid = false } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  classes = classnames(className, "form-check", {
    "form-check-reverse": reverse,
    "form-switch": type === "switch",
    "form-check-inline": inline,
    [`form-control-${size}`]: size
  });
  inputClasses = classnames("form-check-input", { "is-invalid": invalid, "is-valid": valid });
  idFor = id || label;
  return `<div${add_attribute("class", classes, 0)}>${type === "radio" ? `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "radio" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${value === group ? add_attribute("checked", true, 1) : ""}${add_attribute("this", inner, 0)}>` : `${type === "switch" ? `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "checkbox" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}${add_attribute("this", inner, 0)}>` : `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "checkbox" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}${add_attribute("this", inner, 0)}>`}`}
  ${label ? `<label class="form-check-label"${add_attribute("for", idFor, 0)}>${slots.label ? slots.label({}) : `${escape(label)}`}</label>` : ``}</div>`;
});
const FormFeedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "valid", "tooltip"]);
  let { class: className = "" } = $$props;
  let { valid = void 0 } = $$props;
  let { tooltip = false } = $$props;
  let classes;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  {
    {
      const validMode = tooltip ? "tooltip" : "feedback";
      classes = classnames(className, valid ? `valid-${validMode}` : `invalid-${validMode}`);
    }
  }
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const FormGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "check", "disabled", "floating", "inline", "label", "row", "tag"]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { check = false } = $$props;
  let { disabled = false } = $$props;
  let { floating = false } = $$props;
  let { inline = false } = $$props;
  let { label = "" } = $$props;
  let { row = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.floating === void 0 && $$bindings.floating && floating !== void 0)
    $$bindings.floating(floating);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "mb-3", {
    row,
    "form-check": check,
    "form-check-inline": check && inline,
    "form-floating": floating,
    disabled: check && disabled
  });
  return `${tag === "fieldset" ? `<fieldset${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}
    ${label || $$slots.label ? `
      <label>${escape(label)}
        ${slots.label ? slots.label({}) : ``}</label>` : ``}</fieldset>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}
    ${label || $$slots.label ? `
      <label>${escape(label)}
        ${slots.label ? slots.label({}) : ``}</label>` : ``}</div>`}`;
});
const FormText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "inline", "color"]);
  let { class: className = "" } = $$props;
  let { inline = false } = $$props;
  let { color = "muted" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  classes = classnames(className, !inline ? "form-text" : false, color ? `text-${color}` : false);
  return `<small${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</small>`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "bsSize",
    "checked",
    "color",
    "disabled",
    "feedback",
    "files",
    "group",
    "inner",
    "invalid",
    "label",
    "multiple",
    "name",
    "placeholder",
    "plaintext",
    "readonly",
    "reverse",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { bsSize = void 0 } = $$props;
  let { checked = false } = $$props;
  let { color = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { feedback = void 0 } = $$props;
  let { files = void 0 } = $$props;
  let { group = void 0 } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = void 0 } = $$props;
  let { multiple = void 0 } = $$props;
  let { name = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { plaintext = false } = $$props;
  let { readonly = void 0 } = $$props;
  let { reverse = false } = $$props;
  let { size = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { valid = false } = $$props;
  let { value = "" } = $$props;
  let classes;
  let tag;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.bsSize === void 0 && $$bindings.bsSize && bsSize !== void 0)
    $$bindings.bsSize(bsSize);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.plaintext === void 0 && $$bindings.plaintext && plaintext !== void 0)
    $$bindings.plaintext(plaintext);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const isNotaNumber = new RegExp("\\D", "g");
        let isBtn = false;
        let formControlClass = "form-control";
        tag = "input";
        switch (type) {
          case "color":
            formControlClass = `form-control form-control-color`;
            break;
          case "range":
            formControlClass = "form-range";
            break;
          case "select":
            formControlClass = `form-select`;
            tag = "select";
            break;
          case "textarea":
            tag = "textarea";
            break;
          case "button":
          case "reset":
          case "submit":
            formControlClass = `btn btn-${color || "secondary"}`;
            isBtn = true;
            break;
          case "hidden":
          case "image":
            formControlClass = void 0;
            break;
          default:
            formControlClass = "form-control";
            tag = "input";
        }
        if (plaintext) {
          formControlClass = `${formControlClass}-plaintext`;
          tag = "input";
        }
        if (size && isNotaNumber.test(size)) {
          console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
          bsSize = size;
          size = void 0;
        }
        classes = classnames(className, formControlClass, {
          "is-invalid": invalid,
          "is-valid": valid,
          [`form-control-${bsSize}`]: bsSize && !isBtn,
          [`btn-${bsSize}`]: bsSize && isBtn
        });
      }
    }
    $$rendered = `${tag === "input" ? `${type === "text" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "text" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "password" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "password" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "color" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "color" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "email" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "email" },
        { disabled: disabled || null },
        { multiple: multiple || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "file" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "file" },
        { disabled: disabled || null },
        { invalid: escape_attribute_value(invalid) },
        { multiple: multiple || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { valid: escape_attribute_value(valid) }
      ],
      {}
    )}>` : `${type === "checkbox" || type === "radio" || type === "switch" ? `${validate_component(FormCheck, "FormCheck").$$render(
      $$result,
      Object.assign({}, $$restProps, { class: className }, { size: bsSize }, { type }, { disabled }, { invalid }, { label }, { name }, { placeholder }, { reverse }, { readonly }, { valid }, { checked }, { inner }, { group }, { value }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        inner: ($$value) => {
          inner = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type === "url" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "url" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "number" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "number" },
        { readonly: readonly || null },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "date" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "date" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "time" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "time" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "datetime" ? `<input${spread(
      [
        escape_object($$restProps),
        { type: "datetime" },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "datetime-local" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "datetime-local" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "month" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "month" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "color" ? `<input${spread(
      [
        escape_object($$restProps),
        { type: "color" },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "range" ? `<input${spread(
      [
        escape_object($$restProps),
        { type: "range" },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "search" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "search" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "tel" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "tel" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "week" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "week" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `<input${spread(
      [
        escape_object($$restProps),
        { type: escape_attribute_value(type) },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { value: escape_attribute_value(value) }
      ],
      {}
    )}>`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}` : `${tag === "textarea" ? `<textarea${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("this", inner, 0)}>${value || ""}</textarea>` : `${tag === "select" && !multiple ? `<select${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</select>

  ` : ``}`}`}
${feedback ? `${Array.isArray(feedback) ? `${each(feedback, (msg) => {
      return `${validate_component(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
        default: () => {
          return `${escape(msg)}`;
        }
      })}`;
    })}` : `${validate_component(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
      default: () => {
        return `${escape(feedback)}`;
      }
    })}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const InputGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "size"]);
  let { class: className = "" } = $$props;
  let { size = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  classes = classnames(className, "input-group", size ? `input-group-${size}` : null);
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const InputGroupText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "input-group-text");
  return `<span${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</span>`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "hidden", "check", "size", "for", "xs", "sm", "md", "lg", "xl", "xxl", "widths"]);
  let { class: className = "" } = $$props;
  let { hidden = false } = $$props;
  let { check = false } = $$props;
  let { size = "" } = $$props;
  let { for: fore = null } = $$props;
  let { xs = "" } = $$props;
  let { sm = "" } = $$props;
  let { md = "" } = $$props;
  let { lg = "" } = $$props;
  let { xl = "" } = $$props;
  let { xxl = "" } = $$props;
  const colWidths = { xs, sm, md, lg, xl, xxl };
  let { widths = Object.keys(colWidths) } = $$props;
  const colClasses = [];
  widths.forEach((colWidth) => {
    let columnProp = $$props[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    let colClass;
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(classnames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      }));
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.for === void 0 && $$bindings.for && fore !== void 0)
    $$bindings.for(fore);
  if ($$props.xs === void 0 && $$bindings.xs && xs !== void 0)
    $$bindings.xs(xs);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  classes = classnames(className, hidden ? "visually-hidden" : false, check ? "form-check-label" : false, size ? `col-form-label-${size}` : false, colClasses, colClasses.length ? "col-form-label" : "form-label");
  return `<label${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { for: escape_attribute_value(fore) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</label>`;
});
const House_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let houseTotalPriceIsValid;
  let houseTotalSizeIsValid;
  let $house, $$unsubscribe_house;
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    houseTotalPriceIsValid = $house.totalPrice >= 2;
    houseTotalSizeIsValid = $house.totalSize >= 1;
    $$rendered = `${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "house-totalprice", sm: "2" }, {}, {
          default: () => {
            return `Prezzo di vendita`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                  default: () => {
                    return `€`;
                  }
                })}
			${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "house-totalprice",
                    type: "number",
                    valid: houseTotalPriceIsValid,
                    invalid: !houseTotalPriceIsValid,
                    step: 1e3,
                    placeholder: "Inserisci il prezzo totale della casa",
                    value: $house.totalPrice
                  },
                  {
                    value: ($$value) => {
                      $house.totalPrice = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}
${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "house-totalsize", sm: "2" }, {}, {
          default: () => {
            return `Dimensione`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "house-totalsize",
                    type: "number",
                    valid: houseTotalSizeIsValid,
                    invalid: !houseTotalSizeIsValid,
                    placeholder: "Dimensione in metri quadri della casa",
                    value: $house.totalSize
                  },
                  {
                    value: ($$value) => {
                      $house.totalSize = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}
			${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                  default: () => {
                    return `m<sup>2</sup>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}
${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "house-seller", sm: "2" }, {}, {
          default: () => {
            return `Venditore`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(Input, "Input").$$render(
              $$result,
              {
                name: "house-seller",
                type: "select",
                valid: true,
                feedback: "Stai acquistando la tua casa da un privato o da un'azienda, come il costruttore?",
                value: $house.seller
              },
              {
                value: ($$value) => {
                  $house.seller = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<option${add_attribute("value", SellerType.PRIVATE, 0)}>${escape(SellerTypeHelper.toString(SellerType.PRIVATE))}</option>
			<option${add_attribute("value", SellerType.COMPANY, 0)}>${escape(SellerTypeHelper.toString(SellerType.COMPANY))}</option>`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}
${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "house-seller", sm: "2" }, {}, {
          default: () => {
            return `Agenzia Immobiliare`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(Input, "Input").$$render(
              $$result,
              {
                name: "use-realtor",
                type: "checkbox",
                valid: true,
                feedback: "Stai acquistando la casa attraverso un'agenzia immobiliare?",
                checked: $house.useRealtor
              },
              {
                checked: ($$value) => {
                  $house.useRealtor = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}`;
      }
    })}
${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "house-purpose", sm: "2" }, {}, {
          default: () => {
            return `Destinazione dell&#39;immobile`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(Input, "Input").$$render(
              $$result,
              {
                name: "house-purpose",
                type: "select",
                valid: true,
                feedback: "È la tua prima casa?",
                value: $house.purpose
              },
              {
                value: ($$value) => {
                  $house.purpose = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<option${add_attribute("value", PurposeType.FIRST_HOUSE, 0)}>${escape(PurposeTypeHelper.toString(PurposeType.FIRST_HOUSE))}</option>
			<option${add_attribute("value", PurposeType.SECOND_HOUSE, 0)}>${escape(PurposeTypeHelper.toString(PurposeType.SECOND_HOUSE))}</option>`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}
${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "house-yield", sm: "2" }, {}, {
          default: () => {
            return `Rendita Catastale`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                  default: () => {
                    return `€`;
                  }
                })}
			${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "house-yield",
                    type: "number",
                    valid: $house.yield > 0,
                    min: 0,
                    value: $house.yield
                  },
                  {
                    value: ($$value) => {
                      $house.yield = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}
			${validate_component(FormText, "FormText").$$render($$result, { color: "muted" }, {}, {
                  default: () => {
                    return `Il valore attribuito a tutti gli immobili in grado di produrre o generare reddito. Puoi
				trovare la rendita catastale dell&#39;immobile presso <a href="https://sister.agenziaentrate.gov.it/CitizenVisure/">l&#39;Agenzia delle Entrate</a>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_house();
  return $$rendered;
});
function calculateMortgagePercent(mortgageTotal, houseTotalPrice) {
  return parseFloat((mortgageTotal / houseTotalPrice * 100).toFixed(2));
}
const Mortgage_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mortgageTotalIsValid;
  let mortgagePercent;
  let mortgageDownPayment;
  let $house, $$unsubscribe_house;
  let $mortgage, $$unsubscribe_mortgage;
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  $$unsubscribe_mortgage = subscribe(mortgage, (value) => $mortgage = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    mortgageTotalIsValid = $mortgage.total >= 2 && $house.totalPrice >= $mortgage.total;
    mortgagePercent = calculateMortgagePercent($mortgage.total, $house.totalPrice);
    mortgageDownPayment = $house.totalPrice - $mortgage.total;
    $$rendered = `${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
              default: () => {
                return `${validate_component(Label, "Label").$$render($$result, { for: "mortgage-total", sm: "2" }, {}, {
                  default: () => {
                    return `Valore`;
                  }
                })}
			${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
                  default: () => {
                    return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                          default: () => {
                            return `€`;
                          }
                        })}
					${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            name: "mortgage-total",
                            type: "number",
                            valid: mortgageTotalIsValid,
                            invalid: !mortgageTotalIsValid,
                            value: $mortgage.total,
                            step: 1e3,
                            max: $house.totalPrice,
                            placeholder: "Inserisci il valore del mutuo da richiedere"
                          },
                          {},
                          {}
                        )}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
              default: () => {
                return `${validate_component(Label, "Label").$$render($$result, { for: "mortgage-percent", sm: "4" }, {}, {
                  default: () => {
                    return `percentuale`;
                  }
                })}
			${validate_component(Col, "Col").$$render($$result, { sm: "8" }, {}, {
                  default: () => {
                    return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                          default: () => {
                            return `%`;
                          }
                        })}
					${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            name: "mortgage-percent",
                            type: "number",
                            value: mortgagePercent,
                            step: 1,
                            min: 0,
                            max: 100,
                            placeholder: "Percentuale del mutuo"
                          },
                          {},
                          {}
                        )}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}
		${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
              default: () => {
                return `${validate_component(Label, "Label").$$render($$result, { for: "mortgage-percent", sm: "4" }, {}, {
                  default: () => {
                    return `anticipo`;
                  }
                })}
			${validate_component(Col, "Col").$$render($$result, { sm: "8" }, {}, {
                  default: () => {
                    return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                          default: () => {
                            return `€`;
                          }
                        })}
					${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            name: "mortgage-downpayment",
                            type: "number",
                            value: mortgageDownPayment,
                            step: 1e3,
                            min: 0,
                            placeholder: "Percentuale del mutuo"
                          },
                          {},
                          {}
                        )}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}
${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "mortgage-period", sm: "2" }, {}, {
          default: () => {
            return `Tempo`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "5" }, {}, {
          default: () => {
            return `${validate_component(Input, "Input").$$render(
              $$result,
              {
                name: "mortgage-period",
                type: "select",
                value: $mortgage.period
              },
              {
                value: ($$value) => {
                  $mortgage.period = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<option${add_attribute("value", PeriodType.MONTHS, 0)}>${escape(PeriodTypeHelper.toString(PeriodType.MONTHS))}</option>
			<option${add_attribute("value", PeriodType.YEARS, 0)}>${escape(PeriodTypeHelper.toString(PeriodType.YEARS))}</option>`;
                }
              }
            )}`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "5" }, {}, {
          default: () => {
            return `${validate_component(Input, "Input").$$render(
              $$result,
              {
                name: "mortgage-time",
                type: "number",
                min: 1,
                placeholder: "Durata del mutuo",
                value: $mortgage.time
              },
              {
                value: ($$value) => {
                  $mortgage.time = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}`;
      }
    })}

${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "mortgage-taeg", sm: "2" }, {}, {
          default: () => {
            return `TAEG`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(InputGroupText, "InputGroupText").$$render($$result, {}, {}, {
                  default: () => {
                    return `%`;
                  }
                })}
			${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "mortgage-taeg",
                    type: "number",
                    step: 0.01,
                    placeholder: "Inserisci il TAEG",
                    value: $mortgage.taeg
                  },
                  {
                    value: ($$value) => {
                      $mortgage.taeg = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_house();
  $$unsubscribe_mortgage();
  return $$rendered;
});
const User_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ageIsValid;
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ageIsValid = $user.age >= 18;
    $$rendered = `${validate_component(FormGroup, "FormGroup").$$render($$result, { row: true }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "user-age", sm: "2" }, {}, {
          default: () => {
            return `Età acquirente`;
          }
        })}
	${validate_component(Col, "Col").$$render($$result, { sm: "10" }, {}, {
          default: () => {
            return `${validate_component(Input, "Input").$$render(
              $$result,
              {
                name: "user-age",
                type: "number",
                valid: ageIsValid,
                invalid: !ageIsValid,
                placeholder: "Inserisci la tua età",
                feedback: !ageIsValid ? ["Devi essere almeno maggiorenne per poter acquistare una casa"] : null,
                value: $user.age
              },
              {
                value: ($$value) => {
                  $user.age = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_user();
  return $$rendered;
});
const css$2 = {
  code: "tr.svelte-mdhpeh td.svelte-mdhpeh:nth-child(2){text-align:right}",
  map: null
};
const Sale_costs_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let saleCosts;
  let $house, $$unsubscribe_house;
  let $activeLaws, $$unsubscribe_activeLaws;
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  $$unsubscribe_activeLaws = subscribe(activeLaws, (value) => $activeLaws = value);
  $$result.css.add(css$2);
  saleCosts = calculateHouseSaleCosts($activeLaws, $house);
  $$unsubscribe_house();
  $$unsubscribe_activeLaws();
  return `${validate_component(Table, "Table").$$render($$result, { responsive: true }, {}, {
    default: () => {
      return `<tbody><tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Onorario Agenzia Immobiliare (<abbr title="Stima">*</abbr>)
				<p class="text-muted">Ammontare dovuto all&#39;agenzia immobiliare che intermedia l&#39;acquisto dell&#39;immobile. Può
					variare dal 3% al 6%, ma può anche avere un valore fisso.
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.realtor))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Imposta di Registro
				<p class="text-muted">Tassa indiretta richiesta per la registrazione dell&#39;atto di trasferimento di ricchezza,
					come l&#39;acquisto di un immobile.
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.registry))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Imposta Ipotecaria
				<p class="text-muted">Tassa pagata in occasione di operazioni sui registri immobiliari pubblici, come l&#39;atto
					compravendita di un immobile.
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.mortgageTax))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Imposta Catastale
				<p class="text-muted">Tassa dovuta ogni volta che si esegue una voltura catastale.</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.landRegistryTax))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">IVA
				<p class="text-muted">Tassa dovuta nel caso di acquisto da azienda, che ammonta al 4% per gli immobili.
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.vat))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Onorario Notarile (<abbr title="Stima">*</abbr>)
				<p class="text-muted">Costo dovuto al notaio che effettua l&#39;atto notarile di compravendita dell&#39;immobile
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.notary))}</td></tr></tbody>
	<tfoot><tr class="fw-bold svelte-mdhpeh"><td class="svelte-mdhpeh">Totale</td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.total))}</td></tr></tfoot>`;
    }
  })}`;
});
const css$1 = {
  code: "tr.svelte-mdhpeh td.svelte-mdhpeh:nth-child(2){text-align:right}",
  map: null
};
const Mortgage_costs_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mortgageCosts;
  let $house, $$unsubscribe_house;
  let $activeLaws, $$unsubscribe_activeLaws;
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  $$unsubscribe_activeLaws = subscribe(activeLaws, (value) => $activeLaws = value);
  $$result.css.add(css$1);
  mortgageCosts = calculateMortgageCosts($activeLaws, $house.totalPrice, $house.purpose);
  $$unsubscribe_house();
  $$unsubscribe_activeLaws();
  return `${validate_component(Table, "Table").$$render($$result, { responsive: true }, {}, {
    default: () => {
      return `<tbody><tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Istruttoria Pratica di Mutuo
				<p class="text-muted">Costo dovuto all&#39;apertura di una pratica che scatta nel momento in cui un privato presenta
					una richiesta di mutuo in banca.
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(mortgageCosts.openingMortgage))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Perizia dell&#39;Immobile
				<p class="text-muted">Costo dovuto alla banca per la visione dell&#39;immobile di interesse.</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(mortgageCosts.houseExamination))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Imposta Sostitutiva
				<p class="text-muted">Tassa del che ammonta al 0.25% nel caso in cui l&#39;intestatario del mutuo goda
					dell&#39;agevolazione &quot;prima casa&quot;, altrimenti del 2%.
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(mortgageCosts.alternateTax))}</td></tr>
		<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Onorari Notarili per Atto di Mutuo (<abbr title="Stima">*</abbr>)
				<p class="text-muted">Costo dovuto al notaio che effettua l&#39;atto notarile del mutuo
				</p></td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(mortgageCosts.notary))}</td></tr></tbody>
	<tfoot class="fw-bold"><tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Totale</td>
			<td class="svelte-mdhpeh">${escape(toPrettyEuro(mortgageCosts.total))}</td></tr></tfoot>`;
    }
  })}`;
});
const Active_laws_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeLaws, $$unsubscribe_activeLaws;
  $$unsubscribe_activeLaws = subscribe(activeLaws, (value) => $activeLaws = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          {
            name: "mortgage-total",
            type: "checkbox",
            label: "DL 73/2021, art. 64",
            checked: $activeLaws.dl_73_2021
          },
          {
            checked: ($$value) => {
              $activeLaws.dl_73_2021 = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_activeLaws();
  return $$rendered;
});
const css = {
  code: "tr.svelte-mdhpeh td.svelte-mdhpeh:nth-child(2){text-align:right}",
  map: null
};
const Total_costs_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let saleCosts;
  let mortgageCosts;
  let advance;
  let total;
  let $mortgage, $$unsubscribe_mortgage;
  let $house, $$unsubscribe_house;
  let $activeLaws, $$unsubscribe_activeLaws;
  $$unsubscribe_mortgage = subscribe(mortgage, (value) => $mortgage = value);
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  $$unsubscribe_activeLaws = subscribe(activeLaws, (value) => $activeLaws = value);
  $$result.css.add(css);
  saleCosts = calculateHouseSaleCosts($activeLaws, $house);
  mortgageCosts = calculateMortgageCosts($activeLaws, $house.totalPrice, $house.purpose);
  advance = $house.totalPrice - $mortgage.total;
  total = saleCosts.total + advance + mortgageCosts.total;
  $$unsubscribe_mortgage();
  $$unsubscribe_house();
  $$unsubscribe_activeLaws();
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
        default: () => {
          return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
            default: () => {
              return `<tbody><tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Costi legati alla compravendita</td>
					<td class="svelte-mdhpeh">${escape(toPrettyEuro(saleCosts.total))}</td></tr>
				<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Costi legati al mutuo</td>
					<td class="svelte-mdhpeh">${escape(toPrettyEuro(mortgageCosts.total))}</td></tr>
				<tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Anticipo per la casa</td>
					<td class="svelte-mdhpeh">${escape(toPrettyEuro(advance))}</td></tr></tbody>
			<tfoot class="fw-bold"><tr class="svelte-mdhpeh"><td class="svelte-mdhpeh">Totale</td>
					<td class="svelte-mdhpeh">${escape(toPrettyEuro(total))}</td></tr></tfoot>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentConfiguration;
  let $activeLaws, $$unsubscribe_activeLaws;
  let $mortgage, $$unsubscribe_mortgage;
  let $house, $$unsubscribe_house;
  let $user, $$unsubscribe_user;
  $$unsubscribe_activeLaws = subscribe(activeLaws, (value) => $activeLaws = value);
  $$unsubscribe_mortgage = subscribe(mortgage, (value) => $mortgage = value);
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  currentConfiguration = "?" + generateCurrentConfigurationURLParams($user, $house, $mortgage, $activeLaws);
  $$unsubscribe_activeLaws();
  $$unsubscribe_mortgage();
  $$unsubscribe_house();
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-s7fzdh_START -->${$$result.title = `<title>Calcolo Rata Mutuo</title>`, ""}<!-- HEAD_svelte-s7fzdh_END -->`, ""}

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"><h1>Calcolo Mutuo</h1>
	${validate_component(ButtonToolbar, "ButtonToolbar").$$render($$result, { class: "mb-2 mb-md-0" }, {}, {
    default: () => {
      return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "me-2" }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              outline: true,
              color: "secondary",
              href: "/" + currentConfiguration
            },
            {},
            {
              default: () => {
                return `Condividi
			`;
              }
            }
          )}
			${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              outline: true,
              color: "secondary",
              rel: "external",
              href: "/generate" + currentConfiguration
            },
            {},
            {
              default: () => {
                return `Salva come PDF
			`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</div>

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { sm: "12", lg: "6" }, {}, {
        default: () => {
          return `<h3>Casa</h3>
		${validate_component(User_form, "UserForm").$$render($$result, {}, {}, {})}
		${validate_component(House_form, "HouseForm").$$render($$result, {}, {}, {})}`;
        }
      })}
	${validate_component(Col, "Col").$$render($$result, { sm: "12", lg: "6" }, {}, {
        default: () => {
          return `<h3>Mutuo - <a${add_attribute("href", "/piano-di-ammortamento" + currentConfiguration, 0)}><small>(vedi piano di ammortamento)</small></a></h3>
		<p class="text-muted">Stima: ${escape(toPrettyEuro(calculateMortgage($mortgage)))}/mese, interessi totali: ${escape(toPrettyEuro(calculateMortgageTotal($mortgage) - $mortgage.total))}</p>

		${validate_component(Mortgage_form, "MortgageForm").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}

<h2>Decreti attivi</h2>

${validate_component(Active_laws_form, "ActiveLawsForm").$$render($$result, {}, {}, {})}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `<h2>Costi legati alla compravendita</h2>

		${validate_component(Sale_costs_table, "SaleCostsTable").$$render($$result, {}, {}, {})}`;
        }
      })}
	${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `<h2>Costi legati al mutuo</h2>

		${validate_component(Mortgage_costs_table, "MortgageCostsTable").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}

<h2>Costi totali</h2>

${validate_component(Total_costs_table, "TotalCostsTable").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-14ffdeaa.js.map
