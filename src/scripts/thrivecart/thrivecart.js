const thrivecartQueryParams            = new URLSearchParams(window.location.search);
const thrivecartCustomerAddressCountry = thrivecartQueryParams.get("passthrough[customer_address_country]");
const thrivecartCustomerAddressState   = thrivecartQueryParams.get("passthrough[customer_address_state]");

setTimeout(() => {
  if (thrivecartCustomerAddressCountry != null) {
    const thrivecartCustomerAddressCountrySelector = document.querySelector("#field-customer-address-country");
    thrivecartCustomerAddressCountrySelector.disabled = true;
  }

  if (thrivecartCustomerAddressState != null) {
    const thrivecartCustomerAddressStateSelector = document.querySelector("#field-customer-address-state");
    thrivecartCustomerAddressStateSelector.value = thrivecartCustomerAddressState;
    thrivecartCustomerAddressStateSelector.disabled = true;
  }
}, 2000);