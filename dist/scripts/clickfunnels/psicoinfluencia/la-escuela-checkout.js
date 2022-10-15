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
      t: {id: 2, slug: "tc-laboutiquedementores-2-7Q76DK"},
      n: {id: 4, slug: "tc-laboutiquedementores-4-0O3AX7"}
    },
    paypal: {
      t: {id: 14, slug: "tc-laboutiquedementores-14-7IJ2DQ"},
      n: {id: 15, slug: "tc-laboutiquedementores-15-Z82ZYQ"}
    }
  }
}

// Add Thrivecart Params
if (couponCodeValue !== null) thrivecartObj.queryParams["coupon"] = couponCodeValue;

// Remove Query Params
removeQueryParams();

// Add Event Listeners
payProcessorSelector.addEventListener("change", () => toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payTaxExemptionSelector.addEventListener("change", () => toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payFromSpainSelector.addEventListener("change", () => toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
window.addEventListener("load", () => toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));