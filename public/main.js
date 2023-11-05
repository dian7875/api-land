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
function editSer(){
  document.getElementById("Servicios-Edit").style.visibility = "visible";
  document.getElementById("IDService").style.visibility = "visible";
  document.getElementById("Servicios-Delete").style.visibility = "hidden";
  document.getElementById("Servicios-Create").style.visibility = "hidden";
}
function createServ(){
  document.getElementById("Servicios-Create").style.visibility = "visible";
  document.getElementById("Servicios-Delete").style.visibility = "hidden";
  document.getElementById("Servicios-Edit").style.visibility = "hidden";
  document.getElementById("IDService").style.visibility = "hidden";
}
function deleteServ(){
  document.getElementById("Servicios-Delete").style.visibility = "visible";
  document.getElementById("Servicios-Edit").style.visibility = "hidden";
  document.getElementById("Servicios-Create").style.visibility = "hidden";
  document.getElementById("IDService").style.visibility = "visible";
}
function cancel(){
  document.getElementById("Servicios-Delete").style.visibility = "hidden";
  document.getElementById("Servicios-Edit").style.visibility = "hidden";
  document.getElementById("Servicios-Create").style.visibility = "hidden";
  document.getElementById("IDService").style.visibility = "hidden";
}
function hiddenServ(){
  document.getElementById("Servicios-Delete").style.visibility = "hidden";
  document.getElementById("Servicios-Edit").style.visibility = "hidden";
  document.getElementById("Servicios-Create").style.visibility = "hidden";
  document.getElementById("IDService").style.visibility = "hidden";
}
edit.addEventListener("click", function () {
  editSer();
})
create.addEventListener("click", function () {
  createServ();
})
del.addEventListener("click", function () {
  deleteServ();
})

for (var i = 0; i < cancels.length; i++) {
  cancels[i].addEventListener("click", function () {
    cancel();
  });
}
AddImg.addEventListener("click", function () {
  hiddenServ();
})
EdiImg.addEventListener("click", function () {
  hiddenServ();
})
DelImg.addEventListener("click", function () {
  hiddenServ();
})
EdiInf.addEventListener("click", function () {
  hiddenServ();
})
