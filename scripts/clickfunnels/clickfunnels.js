"use strict";

// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2022. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

var removeQueryParams = function removeQueryParams() {
  // Get URL & URL Path
  var url = new URL(window.location.href);
  var urlPath = url.origin + url.pathname;

  // Change URL (Remove Query Params)
  history.pushState({}, null, urlPath);
};
var validateRefCode = function validateRefCode(refCodeMappingTable, refCodeValue) {
  return Object.keys(refCodeMappingTable).includes(refCodeValue);
};
var storeRefCode = function storeRefCode(refCodeValid, refCodeKey, refCodeValue) {
  refCodeValid ? localStorage.setItem(refCodeKey, refCodeValue) : localStorage.removeItem(refCodeKey);
};
var loadImageFromRefCode = function loadImageFromRefCode(refCodeValid, refCodeMappingTable, refCodeValue) {
  var imgRefCodeSelector = document.querySelector("[data-title=\"img__ref-code\"] > img");
  var imgUrl = refCodeValid ? refCodeMappingTable[refCodeValue]["image"] : refCodeMappingTable["default"]["image"];
  imgRefCodeSelector.src = imgUrl;
};
var loadVideoFromRefCode = function loadVideoFromRefCode(refCodeValid, refCodeMappingTable, refCodeValue) {
  var videoRefCodeSelector = document.querySelector("[data-title=\"video__ref-code\"] > .elVideo > div > iframe");
  var videoUrl = refCodeValid ? refCodeMappingTable[refCodeValue]["video"] : refCodeMappingTable["default"]["video"];
  videoRefCodeSelector.src = videoUrl;
};
var validatePayParams = function validatePayParams(payProcessorValue, payFromSpainValue, payTaxExemptionValue) {
  var payParamValues = [payProcessorValue, payFromSpainValue];
  if (payFromSpainValue == "yes") payParamValues.push(payTaxExemptionValue);
  return payParamValues.every(function (item) {
    return typeof item === "string";
  });
};
var togglePayTaxExemptionRow = function togglePayTaxExemptionRow(payTaxExemptionParam, payTaxExemptionToggler) {
  var payTaxExemptionRowSelector = document.querySelector("[data-title=\"row__".concat(payTaxExemptionParam, "\"]"));
  var toggleValue = payTaxExemptionToggler === true ? "block" : "none";
  payTaxExemptionRowSelector.style.setProperty("display", toggleValue, "important");
};
var toggleThrivecartCheckout = function toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam) {
  var payProcessorValue = localStorage.getItem(payProcessorParam);
  var payFromSpainValue = localStorage.getItem(payFromSpainParam);
  if (payFromSpainValue == "yes") {
    thrivecartObj.queryParams["passthrough[customer_address_country]"] = "ES";
    togglePayTaxExemptionRow(payTaxExemptionParam, true);
  } else {
    localStorage.removeItem(payTaxExemptionParam);
    delete thrivecartObj.queryParams["passthrough[customer_address_country]"];
    togglePayTaxExemptionRow(payTaxExemptionParam, false);
  }
  var payTaxExemptionValue = localStorage.getItem(payTaxExemptionParam);
  unmountThrivecartCheckout(thrivecartObj);
  if (validatePayParams(payProcessorValue, payFromSpainValue, payTaxExemptionValue)) {
    mountThrivecartCheckout(thrivecartObj, payProcessorValue, payFromSpainValue, payTaxExemptionValue);
  }
};
var addThrivecartQueryParams = function addThrivecartQueryParams(thrivecartObj) {
  var thrivecartDiv = $("div[data-thrivecart-account=\"".concat(thrivecartObj.account, "\"]"));
  var thriveCartQueryParamsObj = new URLSearchParams(thrivecartObj.queryParams).toString();
  thrivecartDiv.attr("data-thrivecart-querystring", thriveCartQueryParamsObj);
};
var mountThrivecartCheckout = function mountThrivecartCheckout(thrivecartObj, payProcessorValue, payFromSpainValue, payTaxExemptionValue) {
  var checkoutTax = true;
  switch (payTaxExemptionValue) {
    case "canary_islands":
      checkoutTax = false;
      thrivecartObj.queryParams["passthrough[customer_address_state]"] = "Islas Canarias";
      break;
    case "ceuta":
      checkoutTax = false;
      thrivecartObj.queryParams["passthrough[customer_address_state]"] = "Ceuta";
      break;
    case "melilla":
      checkoutTax = false;
      thrivecartObj.queryParams["passthrough[customer_address_state]"] = "Melilla";
      break;
    default:
      delete thrivecartObj.queryParams["passthrough[customer_address_state]"];
      break;
  }
  checkoutTax = checkoutTax ? "t" : "n";
  var thrivecartCheckout = thrivecartObj.checkouts[payProcessorValue][checkoutTax];
  var thrivecartDiv = $("div[data-thrivecart-account=\"".concat(thrivecartObj.account, "\"]"));
  console.log("Montando Checkout...");
  console.log(thrivecartObj.checkouts[payProcessorValue][checkoutTax]);
  thrivecartDiv.attr("data-thrivecart-product", thrivecartCheckout.id);
  thrivecartDiv.attr("data-thrivecart-embeddable", thrivecartCheckout.slug);
  addThrivecartQueryParams(thrivecartObj);
  loadScript("//tinder.thrivecart.com/embed/v1/thrivecart.js");
};
var unmountThrivecartCheckout = function unmountThrivecartCheckout(thrivecartObj) {
  console.log("Desmontando Checkout...");
  var thrivecartDiv = $("div[data-thrivecart-account=\"".concat(thrivecartObj.account, "\"]"));
  thrivecartDiv.children().remove();
};

// Exports
window.removeQueryParams = removeQueryParams;
window.validateRefCode = validateRefCode;
window.storeRefCode = storeRefCode;
window.loadImageFromRefCode = loadImageFromRefCode;
window.loadVideoFromRefCode = loadVideoFromRefCode;
window.validatePayParams = validatePayParams;
window.togglePayTaxExemptionRow = togglePayTaxExemptionRow;
window.toggleThrivecartCheckout = toggleThrivecartCheckout;
window.addThrivecartQueryParams = addThrivecartQueryParams;
window.mountThrivecartCheckout = mountThrivecartCheckout;
window.unmountThrivecartCheckout = unmountThrivecartCheckout;