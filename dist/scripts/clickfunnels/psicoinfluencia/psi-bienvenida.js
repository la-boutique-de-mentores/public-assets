"use strict";

// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2022. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

// Settings
var queryParams = new URLSearchParams(window.location.search);
var mauticFormParam = "mautic-frame";
var mauticFormSelector = document.querySelector("#".concat(mauticFormParam));
var mauticFormUrl = "https://em.laboutiquedementores.es/form/4";

// Mount Mautic Form
if (mauticFormSelector !== null) {
  window.mountMauticForm(mauticFormSelector, mauticFormUrl, queryParams);
}

// Remove Query Params
window.removeQueryParams();