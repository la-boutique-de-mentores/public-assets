const thrivecartQueryParams            = new URLSearchParams(window.location.search);
const thrivecartCustomerAddressCountry = thrivecartQueryParams.get("passthrough[customer_address_country]");
const thrivecartCustomerAddressState   = thrivecartQueryParams.get("passthrough[customer_address_state]");

setTimeout(() => {
  const thrivecartCustomerAddressCountrySelector = document.querySelector("#field-customer-address-country");
  const thrivecartCustomerAddressStateSelector   = document.querySelector("#field-customer-address-state");

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