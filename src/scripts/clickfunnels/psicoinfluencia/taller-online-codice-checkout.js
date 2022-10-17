// Settings
const couponCodeParam         = "off";
const queryParams             = new URLSearchParams(window.location.search);
const couponCodeValue         = queryParams.get(couponCodeParam);
const payProcessorParam       = "pay_processor";
const payFromSpainParam       = "pay_from_spain";
const payTaxExemptionParam    = "pay_tax_exemption";
const payProcessorSelector    = document.querySelector(`[data-custom-type="${payProcessorParam}"]`);
const payFromSpainSelector    = document.querySelector(`[data-custom-type="${payFromSpainParam}"]`);
const payTaxExemptionSelector = document.querySelector(`[data-custom-type="${payTaxExemptionParam}"]`);
const thrivecartObj           = {
  account: "laboutiquedementores",
  queryParams: { "coupon_cache": false },
  checkouts: {
    stripe: {
      t: {id: 6, slug: "tc-laboutiquedementores-6-1V533N"},
      n: {id: 7, slug: "tc-laboutiquedementores-7-ORM8IE"}
    },
    paypal: {
      t: {id: 16, slug: "tc-laboutiquedementores-16-KBPEVW"},
      n: {id: 17, slug: "tc-laboutiquedementores-17-2KO8LS"}
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