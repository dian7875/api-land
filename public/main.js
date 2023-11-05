window.addEventListener("load", function (event) {
  console.log("'Todos los recursos terminaron de cargar!");
});

let edit = this.document.getElementById("EditarServ");
let create = this.document.getElementById("AgregarServ");
let del = this.document.getElementById("EliminarServ");
var cancels = document.getElementsByClassName("cancelar");
let AddImg = this.document.getElementById("AgregarIMG");
let DelImg = this.document.getElementById("EliminarIMG");
let EdiImg = this.document.getElementById("EditarIMG");
let EdiInf = this.document.getElementById("InfEdit");
var scrImgLog = document.getElementById("LogoI");
var ImgLog = document.getElementById("Logop");
var ImgBAN = document.getElementById("LogoB");
var scrBAN = document.getElementById("BanIn");
let SD = document.getElementById("Servicios-Delete")
let SE = document.getElementById("Servicios-Edit")
let SC = document.getElementById("Servicios-Create")
let ListSe = document.getElementById("IDService")
let InfoGenDsi = document.getElementById("ActionInfo");

function EditInf(){
  InfoGenDsi.style.visibility="visible";
}
function hiddenInf(){
  InfoGenDsi.style.visibility="hidden";
}

function editSer() {
  SE.style.visibility = "visible";
  ListSe.style.visibility = "visible";
  SD.style.visibility = "hidden";
  SC.style.visibility = "hidden";
}
function createServ() {
  SC.style.visibility = "visible";
  SD.style.visibility = "hidden";
  SE.style.visibility = "hidden";
  ListSe.style.visibility = "hidden";
}
function deleteServ() {
  SD.style.visibility = "visible";
  SE.style.visibility = "hidden";
  SC.style.visibility = "hidden";
  ListSe.style.visibility = "visible";
}
function cancel() {
  SD.style.visibility = "hidden";
  SE.style.visibility = "hidden";
  SC.style.visibility = "hidden";
  ListSe.style.visibility = "hidden";
  InfoGenDsi.style.visibility="hidden";
}
function hiddenServ() {
  SD.style.visibility = "hidden";
  SE.style.visibility = "hidden";
  SC.style.visibility = "hidden";
  ListSe.style.visibility = "hidden";
}
edit.addEventListener("click", function () {
  editSer();
  hiddenInf();
})
create.addEventListener("click", function () {
  createServ();
  hiddenInf();
})
del.addEventListener("click", function () {
  deleteServ();
  hiddenInf();
})

for (var i = 0; i < cancels.length; i++) {
  cancels[i].addEventListener("click", function () {
    cancel();
  });
}
AddImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
})
EdiImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
})
DelImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
})
EdiInf.addEventListener("click", function () {
  hiddenServ();
  EditInf();
})
scrImgLog.addEventListener("input", function () {
  const nuevoSrc = scrImgLog.value;
  ImgLog.src = nuevoSrc;
});
scrBAN.addEventListener("input", function () {
  const nuevoSrc = scrBAN.value;
  ImgBAN.src = nuevoSrc;
});