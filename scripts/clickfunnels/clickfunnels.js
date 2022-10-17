"use strict";

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
  payParamValues = [payProcessorValue, payFromSpainValue];
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
  addThrivecartQueryParams(thrivecartObj);
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
  var checkoutTax = payFromSpainValue == "yes" ? true : false;
  if (checkoutTax) checkoutTax = payTaxExemptionValue != "yes" ? true : false;
  checkoutTax = checkoutTax ? "t" : "n";
  var thrivCartCheckout = thrivecartObj.checkouts[payProcessorValue][checkoutTax];
  var thrivecartDiv = $("div[data-thrivecart-account=\"".concat(thrivecartObj.account, "\"]"));
  console.log("Montando Checkout...");
  console.log(thrivecartObj.checkouts[payProcessorValue][checkoutTax]);
  thrivecartDiv.attr("data-thrivecart-product", thrivCartCheckout.id);
  thrivecartDiv.attr("data-thrivecart-embeddable", thrivCartCheckout.slug);
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