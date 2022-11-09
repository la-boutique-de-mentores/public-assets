// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2022. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

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

const refCodeParam          = "ref_code_la_experiencia";
const queryParams           = new URLSearchParams(window.location.search);
const refCodeValue          = queryParams.get(refCodeParam) ?? localStorage.getItem(refCodeParam.split("_").join("-"));
const refCodeValueValid     = window.validateRefCode(refCodeMappingTable, refCodeValue);

// Store Ref Code
window.storeRefCode(refCodeValueValid, refCodeParam.split("_").join("-"), refCodeValue);

// Remove Query Params
window.removeQueryParams();