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
        id: 10,
        slug: "tc-laboutiquedementores-10-9YWX4E"
      },
      n: {
        id: 11,
        slug: "tc-laboutiquedementores-11-8FXZQE"
      }
    },
    paypal: {
      t: {
        id: 20,
        slug: "tc-laboutiquedementores-20-4FIYNH"
      },
      n: {
        id: 21,
        slug: "tc-laboutiquedementores-21-W1KQ83"
      }
    }
  }
};

// Add Thrivecart Params
if (couponCodeValue !== null) thrivecartObj.queryParams["coupon"] = couponCodeValue;

// Remove Query Params
removeQueryParams();

// Add Event Listeners
payProcessorSelector.addEventListener("change", function () {
  return toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});
payTaxExemptionSelector.addEventListener("change", function () {
  return toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});
payFromSpainSelector.addEventListener("change", function () {
  return toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});
window.addEventListener("load", function () {
  return toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam);
});