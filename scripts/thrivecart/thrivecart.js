"use strict";

var thrivecartQueryParams = new URLSearchParams(window.location.search);
var thrivecartCustomerAddressCountry = thrivecartQueryParams.get("passthrough[customer_address_country]");
var thrivecartCustomerAddressState = thrivecartQueryParams.get("passthrough[customer_address_state]");
setTimeout(function () {
  var thrivecartCustomerAddressCountrySelector = document.querySelector("#field-customer-address-country");
  var thrivecartCustomerAddressStateSelector = document.querySelector("#field-customer-address-state");
  if (thrivecartCustomerAddressCountry != null) {
    thrivecartCustomerAddressCountrySelector.disabled = true;
    thrivecartCustomerAddressCountrySelector.parentElement.style.display = "none";
  } else {
    thrivecartCustomerAddressCountrySelector.removeChild(document.querySelector("option[value='ES']"));
  }
  if (thrivecartCustomerAddressState != null) {
    thrivecartCustomerAddressStateSelector.value = thrivecartCustomerAddressState;
    thrivecartCustomerAddressStateSelector.disabled = true;
  }
}, 2000);