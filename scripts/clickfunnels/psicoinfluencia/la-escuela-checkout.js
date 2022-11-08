"use strict";

// Settings
var couponCodeParam = "off";
var queryParams = new URLSearchParams(window.location.search);
var couponCodeValue = queryParams.get(couponCodeParam);
var payProcessorParam = "pay_processor";
var payFromSpainParam = "pay_from_spain";
var payTaxExemptionParam = "pay_spain_region";
var payProcessorSelector = document.querySelector("[data-custom-type=\"".concat(payProcessorParam, "\"]"));
var payFromSpainSelector = document.querySelector("[data-custom-type=\"".concat(payFromSpainParam, "\"]"));
var payTaxExemptionSelector = document.querySelector("[data-custom-type=\"".concat(payTaxExemptionParam, "\"]"));
var thrivecartObj = {
  account: "laboutiquedementores",
  queryParams: {
    "coupon_cache": false
  },
  checkouts: {
    stripe: {
      t: {
        id: 2,
        slug: "tc-laboutiquedementores-2-7Q76DK"
      },
      n: {
        id: 4,
        slug: "tc-laboutiquedementores-4-0O3AX7"
      }
    },
    paypal: {
      t: {
        id: 14,
        slug: "tc-laboutiquedementores-14-7IJ2DQ"
      },
      n: {
        id: 15,
        slug: "tc-laboutiquedementores-15-Z82ZYQ"
      }
    }
  }
};

// Add Thrivecart Params
if (couponCodeValue !== null) thrivecartObj.queryParams["coupon"] = couponCodeValue;

// Remove Query Params
window.removeQueryParams();

// Add Event Listeners
payProcessorSelector.addEventListener("change", function () {
  return window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});
payTaxExemptionSelector.addEventListener("change", function () {
  return window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});
payFromSpainSelector.addEventListener("change", function () {
  return window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});
window.addEventListener("load", function () {
  return window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});