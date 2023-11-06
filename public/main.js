window.addEventListener("load", function (event) {
  console.log("'Todos los recursos terminaron de cargar!");
});
//Botones sidebar
let EditS = document.getElementById("EditarServ");
let createS = document.getElementById("AgregarServ");
let DeleteS = document.getElementById("EliminarServ");
let AddImg = document.getElementById("AgregarIMG");
let DelImg = document.getElementById("EliminarIMG");
let EdiImg = document.getElementById("EditarIMG");
let EdiInf = document.getElementById("InfEdit");
//Segmento de servicios
let Service = document.getElementById("Servicios");
let ListSe = document.getElementById("IDService")
let SC = document.getElementById("CreateService");
let SD = document.getElementById("DeleteService");
let SE = document.getElementById("EditService");
var Surl = document.getElementById("Surl");
var Simg = document.getElementById("Simg");
function hiddenServ() {
  Service.style.visibility = "hidden";
  ListSe.style.visibility = "hidden";
  SD.style.visibility = "hidden";
  SE.style.visibility = "hidden";
  SC.style.visibility = "hidden";
}
function editSer() {
 
  ListSe.style.visibility = "visible";
  Service.style.visibility = "visible";
  SC.style.visibility = "hidden";
  SD.style.visibility = "hidden";
  SE.style.visibility = "visible";
}

function createServ() {
  
  ListSe.style.visibility = "hidden";
  Service.style.visibility = "visible";
  SC.style.visibility = "visible";
  SD.style.visibility = "hidden";
  SE.style.visibility = "hidden";
}
function deleteServ() {
 
  ListSe.style.visibility = "visible";
  Service.style.visibility = "visible";
  SC.style.visibility = "hidden";
  SD.style.visibility = "visible";
  SE.style.visibility = "hidden";
}

EditS.addEventListener("click", function () {
  editSer();
  hiddenInf();
  hiddenImgs();
})
createS.addEventListener("click", function () {
  createServ();
  hiddenInf();
  hiddenImgs();
})
DeleteS.addEventListener("click", function () {
  deleteServ();
  hiddenInf();
  hiddenImgs();
})
Surl.addEventListener("input", function () {
  const nuevoSrc = Surl.value;
  Simg.src = nuevoSrc;
});

//Segmento de Informacion General
var scrImgLog = document.getElementById("LogoI");
var ImgLog = document.getElementById("Logop");
var ImgBAN = document.getElementById("LogoB");
var scrBAN = document.getElementById("BanIn");
let InfoGenDsi = document.getElementById("ActionInfo");
var cancels = document.getElementsByClassName("cancelar");

function EditInf() {
  InfoGenDsi.style.visibility = "visible";
}
function hiddenInf() {
  InfoGenDsi.style.visibility = "hidden";
}

EdiInf.addEventListener("click", function () {
  hiddenServ();
  EditInf();
  hiddenImgs();
})
scrImgLog.addEventListener("input", function () {
  const nuevoSrc = scrImgLog.value;
  ImgLog.src = nuevoSrc;
});
scrBAN.addEventListener("input", function () {
  const nuevoSrc = scrBAN.value;
  ImgBAN.src = nuevoSrc;
});
//Botones cancelar
function cancel() {
  hiddenServ();
  hiddenInf();
  hiddenImgs();
}
for (var i = 0; i < cancels.length; i++) {
  cancels[i].addEventListener("click", function () {
    cancel();
  });
}

//segmento de imagenes

var IDPhoto = document.getElementById("IDPhoto");//ComboBox de Galeria
var InfG = document.getElementById("galleryInf");//Info de galeria
let ID = document.getElementById("EditIMG");
let IE = document.getElementById("DeleteIMG");
let IC = document.getElementById("CreateIMG");
var GalImg=document.getElementById("IMGGal");
var urlGal=document.getElementById("URLphoto");

urlGal.addEventListener("input", function () {
  const nuevoSrc = urlGal.value;
  GalImg.src = nuevoSrc;
});

AddImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
  ShowImgAdd();
});
EdiImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
  showImgEdit();
});
DelImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
  showImgDele();
});

function hiddenImgs() {
  IDPhoto.style.visibility = "hidden";
  InfG.style.visibility = "hidden";
  IC.style.visibility = "hidden";
  ID.style.visibility = "hidden";
  IE.style.visibility = "hidden";
}

function showImgEdit() {
  IDPhoto.style.visibility = "visible";
  InfG.style.visibility = "visible";
  IE.style.visibility = "visible";
  IC.style.visibility = "hidden";
  ID.style.visibility = "hidden";
}
function showImgDele() {
  IDPhoto.style.visibility = "visible";
  InfG.style.visibility = "visible";
  ID.style.visibility = "visible";
  IE.style.visibility = "hidden";
  IC.style.visibility = "hidden";
}
function ShowImgAdd() {
  IDPhoto.style.visibility = "hidden";
  InfG.style.visibility = "visible";
  IC.style.visibility = "visible";
  IE.style.visibility = "hidden";
  ID.style.visibility = "hidden";

}




