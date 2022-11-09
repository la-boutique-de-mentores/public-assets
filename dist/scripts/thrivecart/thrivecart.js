"use strict";

// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2022. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

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