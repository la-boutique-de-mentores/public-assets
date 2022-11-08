// Settings
const couponCodeParam         = "off";
const queryParams             = new URLSearchParams(window.location.search);
const couponCodeValue         = queryParams.get(couponCodeParam);
const payProcessorParam       = "pay_processor";
const payFromSpainParam       = "pay_from_spain";
const payTaxExemptionParam    = "pay_spain_region";
const payProcessorSelector    = document.querySelector(`[data-custom-type="${payProcessorParam}"]`);
const payFromSpainSelector    = document.querySelector(`[data-custom-type="${payFromSpainParam}"]`);
const payTaxExemptionSelector = document.querySelector(`[data-custom-type="${payTaxExemptionParam}"]`);
const thrivecartObj           = {
  account: "laboutiquedementores",
  queryParams: { "coupon_cache": false },
  checkouts: {
    stripe: {
      t: {id: 27, slug: "tc-laboutiquedementores-27-ANC8GQ"},
      n: {id: 28, slug: "tc-laboutiquedementores-28-8U1V2K"}
    },
    paypal: {
      t: {id: 29, slug: "tc-laboutiquedementores-29-31DPLM"},
      n: {id: 30, slug: "tc-laboutiquedementores-30-ZZU7L0"}
    }
  }
}

// Add Thrivecart Params
if (couponCodeValue !== null) thrivecartObj.queryParams["coupon"] = couponCodeValue;

// Remove Query Params
window.removeQueryParams();

// Add Event Listeners
payProcessorSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payTaxExemptionSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payFromSpainSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
window.addEventListener("load", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));