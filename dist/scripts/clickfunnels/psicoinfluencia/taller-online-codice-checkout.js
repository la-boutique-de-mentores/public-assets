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
        id: 6,
        slug: "tc-laboutiquedementores-6-1V533N"
      },
      n: {
        id: 7,
        slug: "tc-laboutiquedementores-7-ORM8IE"
      }
    },
    paypal: {
      t: {
        id: 16,
        slug: "tc-laboutiquedementores-16-KBPEVW"
      },
      n: {
        id: 17,
        slug: "tc-laboutiquedementores-17-2KO8LS"
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