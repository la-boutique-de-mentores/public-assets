// Settings
const refCodeMappingTable = {
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

const couponCodeParam         = "off";
const refCodeParam            = "ref_code_la_experiencia";
const queryParams             = new URLSearchParams(window.location.search);
const couponCodeValue         = queryParams.get(couponCodeParam);
const refCodeValue            = queryParams.get(refCodeParam) ?? localStorage.getItem(refCodeParam.split("_").join("-"));
const refCodeValueValid       = window.validateRefCode(refCodeMappingTable, refCodeValue);
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
      t: {id: 8, slug: "tc-laboutiquedementores-8-EQCPG7"},
      n: {id: 9, slug: "tc-laboutiquedementores-9-RIQWE9"}
    },
    paypal: {
      t: {id: 18, slug: "tc-laboutiquedementores-18-4G1GY8"},
      n: {id: 19, slug: "tc-laboutiquedementores-19-8M8DVV"}
    }
  }
}

// Store Ref Code
window.storeRefCode(refCodeValueValid, refCodeParam.split("_").join("-"), refCodeValue);

// Add Thrivecart Params
if (couponCodeValue !== null) thrivecartObj.queryParams["coupon"] = couponCodeValue;
thrivecartObj.queryParams["passthrough[custom_ref-code]"] = (refCodeValueValid) ? refCodeValue : "organic";

// Remove Query Params
window.removeQueryParams();

// Add Event Listeners
payProcessorSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payTaxExemptionSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payFromSpainSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
window.addEventListener("load", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));