"use strict";

// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2022. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

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
        id: 34,
        slug: "tc-laboutiquedementores-34-9K29MG"
      },
      n: {
        id: 35,
        slug: "tc-laboutiquedementores-35-YYV9G1"
      }
    },
    paypal: {
      t: {
        id: 36,
        slug: "tc-laboutiquedementores-36-HKKQUA"
      },
      n: {
        id: 37,
        slug: "tc-laboutiquedementores-37-UPL0ST"
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