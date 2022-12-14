// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2022. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

const removeQueryParams = () => {
  // Get URL & URL Path
  const url = new URL(window.location.href);
  const urlPath = url.origin + url.pathname;

  // Change URL (Remove Query Params)
  history.pushState({}, null, urlPath);
};

const validateRefCode = (refCodeMappingTable, refCodeValue) => {
  return Object.keys(refCodeMappingTable).includes(refCodeValue);
};

const storeRefCode = (refCodeValid, refCodeKey, refCodeValue) => {
  (refCodeValid) ? localStorage.setItem(refCodeKey, refCodeValue) : localStorage.removeItem(refCodeKey);
};

const loadImageFromRefCode = (refCodeValid, refCodeMappingTable, refCodeValue) => {
  const imgRefCodeSelector = document.querySelector(`[data-title="img__ref-code"] > img`);
  const imgUrl = refCodeValid ? refCodeMappingTable[refCodeValue]["image"] : refCodeMappingTable["default"]["image"];

  imgRefCodeSelector.src = imgUrl;
};

const loadVideoFromRefCode = (refCodeValid, refCodeMappingTable, refCodeValue) => {
  const videoRefCodeSelector = document.querySelector(`[data-title="video__ref-code"] > .elVideo > div > iframe`);
  const videoUrl = refCodeValid ? refCodeMappingTable[refCodeValue]["video"] : refCodeMappingTable["default"]["video"];

  videoRefCodeSelector.src = videoUrl;
};

const validatePayParams = (payProcessorValue, payFromSpainValue, payTaxExemptionValue) => {
  const payParamValues = [
    payProcessorValue,
    payFromSpainValue
  ]

  if (payFromSpainValue == "yes") payParamValues.push(payTaxExemptionValue);

  return payParamValues.every(item => typeof item === "string");
};

const togglePayTaxExemptionRow = (payTaxExemptionParam, payTaxExemptionToggler) => {
  const payTaxExemptionRowSelector = document.querySelector(`[data-title="row__${payTaxExemptionParam}"]`);
  const toggleValue                = payTaxExemptionToggler === true ? "block" : "none";

  payTaxExemptionRowSelector.style.setProperty("display", toggleValue, "important");
};

const toggleThrivecartCheckout = (thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam) => {
  const payProcessorValue    = localStorage.getItem(payProcessorParam);
  const payFromSpainValue    = localStorage.getItem(payFromSpainParam);

  if (payFromSpainValue == "yes") {

    thrivecartObj.queryParams["passthrough[customer_address_country]"] = "ES";
    togglePayTaxExemptionRow(payTaxExemptionParam, true);
  } else {

    localStorage.removeItem(payTaxExemptionParam);
    delete thrivecartObj.queryParams["passthrough[customer_address_country]"];

    togglePayTaxExemptionRow(payTaxExemptionParam, false);
  }

  const payTaxExemptionValue = localStorage.getItem(payTaxExemptionParam);

  unmountThrivecartCheckout(thrivecartObj);

  if (validatePayParams(payProcessorValue, payFromSpainValue, payTaxExemptionValue)) {
    mountThrivecartCheckout(thrivecartObj, payProcessorValue, payFromSpainValue, payTaxExemptionValue);
  }
};

const addThrivecartQueryParams = (thrivecartObj) => {
  const thrivecartDiv            = $(`div[data-thrivecart-account="${thrivecartObj.account}"]`);
  const thriveCartQueryParamsObj = new URLSearchParams(thrivecartObj.queryParams).toString();
  thrivecartDiv.attr("data-thrivecart-querystring", thriveCartQueryParamsObj);
};

const mountThrivecartCheckout = (thrivecartObj, payProcessorValue, payFromSpainValue, payTaxExemptionValue) => {
  let checkoutTax = true;

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
  const thrivecartCheckout = thrivecartObj.checkouts[payProcessorValue][checkoutTax];
  const thrivecartDiv = $(`div[data-thrivecart-account="${thrivecartObj.account}"]`);

  console.log("Montando Checkout...");
  console.log(thrivecartObj.checkouts[payProcessorValue][checkoutTax])

  thrivecartDiv.attr("data-thrivecart-product", thrivecartCheckout.id);
  thrivecartDiv.attr("data-thrivecart-embeddable", thrivecartCheckout.slug);
  addThrivecartQueryParams(thrivecartObj);

  loadScript("//tinder.thrivecart.com/embed/v1/thrivecart.js");
};

const unmountThrivecartCheckout = (thrivecartObj) => {
  console.log("Desmontando Checkout...");
  const thrivecartDiv = $(`div[data-thrivecart-account="${thrivecartObj.account}"]`);
  thrivecartDiv.children().remove();
};

const mountMauticForm = (mauticFormObj, mauticFormUrl, mauticQueryParams) => {
  console.log("Montando Formulario...");
  const mauticQueryParamsObj = new URLSearchParams(mauticQueryParams).toString();
  
  mauticFormObj.src = `${mauticFormUrl}?${mauticQueryParamsObj}`;
};

// Exports
window.removeQueryParams         = removeQueryParams;
window.validateRefCode           = validateRefCode;
window.storeRefCode              = storeRefCode;
window.loadImageFromRefCode      = loadImageFromRefCode;
window.loadVideoFromRefCode      = loadVideoFromRefCode;
window.validatePayParams         = validatePayParams;
window.togglePayTaxExemptionRow  = togglePayTaxExemptionRow;
window.toggleThrivecartCheckout  = toggleThrivecartCheckout;
window.addThrivecartQueryParams  = addThrivecartQueryParams;
window.mountThrivecartCheckout   = mountThrivecartCheckout;
window.unmountThrivecartCheckout = unmountThrivecartCheckout;
window.mountMauticForm           = mountMauticForm;