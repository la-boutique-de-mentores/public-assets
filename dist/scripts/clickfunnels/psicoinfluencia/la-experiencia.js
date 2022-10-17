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
var refCodeParam = "ref_code_la_experiencia";
var queryParams = new URLSearchParams(window.location.search);
var refCodeValue = (_queryParams$get = queryParams.get(refCodeParam)) !== null && _queryParams$get !== void 0 ? _queryParams$get : localStorage.getItem(refCodeParam.split("_").join("-"));
var refCodeValueValid = window.validateRefCode(refCodeMappingTable, refCodeValue);

// Store Ref Code
window.storeRefCode(refCodeValueValid, refCodeParam.split("_").join("-"), refCodeValue);

// Remove Query Params
window.removeQueryParams();