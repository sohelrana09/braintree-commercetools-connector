import classNames from "classnames";

export const HOSTED_FIELDS_LABEL =
  "block mb-1 text-sm font-semibold text-gray-900";

// White, bordered, 44 px high: the storefront's own inputs. Braintree adds braintree-hosted-fields-focused / -invalid
// to the container (index.css colours them).
export const HOSTED_FIELDS =
  "h-11 box-border w-full block shadow-none text-base rounded border border-gray-300 bg-white mb-4";

export const renderMaskButtonClasses = (
  fullWidth: boolean,
  addEnabledClasses: boolean,
  addDisabledClasses: Boolean,
): string => {
  return classNames({
    "justify-center align-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none text-white shadow-sm": true,
    "w-full": fullWidth,
    "focus:ring-2 focus:ring-blue-500 bg-blue-500 hover:bg-blue-600 ":
      addEnabledClasses,
    "bg-gray-500": addDisabledClasses,
  });
};
