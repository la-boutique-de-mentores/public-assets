"use strict";

var _queryParams$get;
// Settings
var refCodeMappingTable = {
  "helder-torres": {},
  "vikrampal-singh": {},
  "prem-sukhdev": {},
  "cathaysa-melian": {},
  "adrian-sobrino": {},
  "pedro-sobrino": {},
  "noelia-martin": {},
  "marisol-lopez": {},
  "alejandra-esteban": {},
  "carlos-avila": {},
  "rocio-gimenez": {},
  "carlos-martin": {},
  "sheila-diaz": {},
  "harrison-del-castillo": {},
  "ade-ramirez": {},
  "radha-chand": {},
  "diana-de-maria": {},
  "inma-martin": {},
  "pilar-navarro": {},
  "laura-morales": {},
  "jorge-juan": {},
  "carmen-caballero": {},
  "yuri-arguinzones": {},
  "ruben-fornell": {},
  "idoia-izaguirre": {},
  "manuel-mba": {},
  "bo-rademakers": {},
  "sara-verissimo": {},
  "javier-rodriguez": {},
  "elena-vazquez": {},
  "sheila-de-leon": {},
  "juan-gasca": {},
  "fernando-hernandez": {},
  "samuel-guerrero": {},
  "flory-ramirez": {},
  "juanma-escalera": {},
  "jose-manuel-arroyo": {},
  "sandra-logan": {},
  "carmen-bargues": {},
  "nuria-urcelay": {},
  "celia-vergara": {},
  "maria-celeste": {},
  "montse-valverde": {},
  "ilaria-gonzales": {}
};
var couponCodeParam = "off";
var refCodeParam = "ref_code_la_experiencia";
var queryParams = new URLSearchParams(window.location.search);
var couponCodeValue = queryParams.get(couponCodeParam);
var refCodeValue = (_queryParams$get = queryParams.get(refCodeParam)) !== null && _queryParams$get !== void 0 ? _queryParams$get : localStorage.getItem(refCodeParam.split("_").join("-"));
var refCodeValueValid = window.validateRefCode(refCodeMappingTable, refCodeValue);
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
        id: 8,
        slug: "tc-laboutiquedementores-8-EQCPG7"
      },
      n: {
        id: 9,
        slug: "tc-laboutiquedementores-9-RIQWE9"
      }
    },
    paypal: {
      t: {
        id: 18,
        slug: "tc-laboutiquedementores-18-4G1GY8"
      },
      n: {
        id: 19,
        slug: "tc-laboutiquedementores-19-8M8DVV"
      }
    }
  }
};

// Store Ref Code
window.storeRefCode(refCodeValueValid, refCodeParam.split("_").join("-"), refCodeValue);

// Add Thrivecart Params
if (couponCodeValue !== null) thrivecartObj.queryParams["coupon"] = couponCodeValue;
thrivecartObj.queryParams["passthrough[custom_ref-code]"] = refCodeValueValid ? refCodeValue : "organic";

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