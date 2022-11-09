"use strict";

var thrivecartQueryParams = new URLSearchParams(window.location.search);
var thrivecartCustomerAddressCountry = thrivecartQueryParams.get("passthrough[customer_address_country]");
var thrivecartCustomerAddressState = thrivecartQueryParams.get("passthrough[customer_address_state]");
setTimeout(function () {
  if (thrivecartCustomerAddressCountry != null) {
    var thrivecartCustomerAddressCountrySelector = document.querySelector("#field-customer-address-country");
    thrivecartCustomerAddressCountrySelector.disabled = true;
  }
  if (thrivecartCustomerAddressState != null) {
    var thrivecartCustomerAddressStateSelector = document.querySelector("#field-customer-address-state");
    thrivecartCustomerAddressStateSelector.value = thrivecartCustomerAddressState;
    thrivecartCustomerAddressStateSelector.disabled = true;
  }
}, 2000);