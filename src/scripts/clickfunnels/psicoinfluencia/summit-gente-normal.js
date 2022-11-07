// Settings
const refCodeMappingTable = {
  "default": {
    "video": "https://player.vimeo.com/video/759616934?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/f5/93a2a2c8c84d9d9f2b8098c846a1cb/pixel.jpg"
  },
  "david-sobrino": {
    "video": "https://player.vimeo.com/video/759616934?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/f5/93a2a2c8c84d9d9f2b8098c846a1cb/pixel.jpg"
  },
  "helder-torres": {
    "video": "https://player.vimeo.com/video/759616934?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/d6/f006c243944e048db110ffdf27e624/helder-torres.jpg"
  },
  "maria-del-mar": {
    "video": "https://player.vimeo.com/video/761786689?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/e0/bc1bc4445c424ca616abc8999cb1b4/maria-del-mar.jpg"
  },
  "cristina-santos": {
    "video": "https://player.vimeo.com/video/760580027?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/46/bb562eadfc49d2a6f07430b4c8d59c/cristina-santos.jpg"
  },
  "jose-sevilla": {
    "video": "https://player.vimeo.com/video/759868067?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/71/0a9892adc7495792fde120db21ed9a/jose-sevilla.jpg"
  },
  "nati-alcazar": {
    "video": "https://player.vimeo.com/video/759616934?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/cf/dc87011b3d4d4894c8c861856537b1/nati-alcazar.jpg"
  },
  "mayka-zabala": {
    "video": "https://player.vimeo.com/video/759850588?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/d3/ea493b6b8e4c50a25a7a9589a1395c/mayka-zabala.jpg"
  },
  "fayna-betancor": {
    "video": "https://player.vimeo.com/video/759872932?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/b4/8115677d7e4e89b85cc8eb4ac1e067/fayna-betancor.jpg"
  },
  "nuria-urcelay": {
    "video": "https://player.vimeo.com/video/760035955?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/5c/85dd7d07374247919d3fd3a50a0779/nuria-urcelay.jpg"
  },
  "marta-canto": {
    "video": "https://player.vimeo.com/video/760331171?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/c6/9925562f2b4ebbb9c7bc52f9ea8863/marta-canto.jpg"
  },
  "montse-mouna": {
    "video": "https://player.vimeo.com/video/760768019?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/b3/346d7ed1444b1ca23ba25fed73aeec/montse-mouna.jpg"
  },
  "sonia-barriga": {
    "video": "https://player.vimeo.com/video/760253758?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/5e/8cd7d16576430c80796464c5bd7cb5/sonia-barriga.jpg"
  },
  "lorena-farre": {
    "video": "https://player.vimeo.com/video/759616934?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/44/0f0c04853348fc904ba48812c0f68b/lorena-farre.jpg"
  },
  "montse-valverde": {
    "video": "https://player.vimeo.com/video/761028743?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/d2/0b18efb2754f508a6a91a768b13e4a/montse-valverde.jpg"
  },
  "maria-blanco": {
    "video": "https://player.vimeo.com/video/761780040?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/fe/c9918755074e2b8857a2abbf911c87/maria-blanco.jpg"
  },
  "henals-senior": {
    "video": "https://player.vimeo.com/video/759891243?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/ec/4a0f7ebbd14be3b564cb36476de413/henals-senior.jpg"
  },
  "maria-celeste": {
    "video": "https://player.vimeo.com/video/761780062?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/71/1ed6ae0b0545599f72a888a6b84d75/maria-celeste.jpg"
  },
  "carlos-avila": {
    "video": "https://player.vimeo.com/video/759888810?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/fa/9009b051884cb3a58dce7a04628330/carlos-avila.jpg"
  },
  "raquel-benavides": {
    "video": "https://player.vimeo.com/video/759850614?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/3d/616a3cf19b4313b4f4aa8008ff3535/raquel-benavides.jpg"
  },
  "inma-munoz": {
    "video": "https://player.vimeo.com/video/760449593?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/b9/38d3b374164de0b591cb67475fe985/inma-munoz.jpg"
  },
  "bea-mayoral": {
    "video": "https://player.vimeo.com/video/760035892?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/de/3f601eaddb4f36bb1096408cf6128c/bea-mayoral.jpg"
  },
  "noemi-caballero": {
    "video": "https://player.vimeo.com/video/760035927?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/8c/c89288a7684afb9448c8433cef1c89/noemi-caballero.jpg"
  },
  "esther-sanchez": {
    "video": "https://player.vimeo.com/video/759872880?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/cf/9344f378ce4542abcd284553fddb77/esther-sanchez.jpg"
  },
  "sandra-logan": {
    "video": "https://player.vimeo.com/video/760580037?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0",
    "image": "https://images.clickfunnels.com/ef/3edfc2b3bb42989759b61d101556eb/sandra-logan.jpg"
  }
};

const refCodeParam          = "ref_code_summit_gn";
const queryParams           = new URLSearchParams(window.location.search);
const refCodeValue          = queryParams.get(refCodeParam) ?? localStorage.getItem(refCodeParam.split("_").join("-"));
const refCodeValueValid     = window.validateRefCode(refCodeMappingTable, refCodeValue);

// Store Ref Code
window.storeRefCode(refCodeValueValid, refCodeParam.split("_").join("-"), refCodeValue);

// Load Video from Ref Code
window.loadVideoFromRefCode(refCodeValueValid, refCodeMappingTable, refCodeValue);

// Load Image from Ref Code
window.loadImageFromRefCode(refCodeValueValid, refCodeMappingTable, refCodeValue);

// Remove Query Params
window.removeQueryParams();