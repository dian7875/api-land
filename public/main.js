window.addEventListener("load", function (event) {
  console.log("'Todos los recursos terminaron de cargar!");


});

let urlFet = "http://localhost:3000/api/infogeneral/1"


var Logo = document.getElementById("LogoI");
var Banner = document.getElementById("BanIn");
var CompanyName = document.getElementById("NameC");
var Description = document.getElementById("DescC");
var History = document.getElementById("HistC");
var Phone = document.getElementById("TelC");
var Phone2 = document.getElementById("Tel2C");
var Direction = document.getElementById("DirC");
var Email = document.getElementById("MailC");

// Inicio del update informacion genereal en el html//
document.getElementById("Confirm").addEventListener("click", function() {
  // Obtén los valores de los campos de entrada que deseas actualizar
  var newLogo = Logo.value;
  var newBanner = Banner.value;
  var newCompanyName = CompanyName.value;
  var newDescription = Description.value;
  var newHistory = History.value;
  var newPhone = Phone.value;
  var newPhone2 = Phone2.value;
  var newDirection = Direction.value;
  var newEmail = Email.value;

  // Crea un objeto que contenga los datos que deseas actualizar
  var updatedData = {
    logo: newLogo,
    companyName: newCompanyName,
    description: newDescription,
    imgDescription: newBanner,
    correo: newEmail,
    tel: newPhone,
    tel2: newPhone2,
    direction: newDirection,
    history: newHistory
  };

  
  var infoId = 1; // variable por si cambiaramos la id del elemento en la db

 
  fetch(urlFet, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => {
    if (response.status === 200) {
     
      alert('Actualización exitosa');
    } else {
     
      alert('Hubo un error al actualizar');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

// Final del update informacion genereal en el html//










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
  fetch('http://localhost:3000/api/infogeneral/1')
  .then(response => response.json())
  .then(RYC => {
    RYCDATA = RYC;
    Logo.value = RYCDATA.logo;
    ImgLog.src=RYCDATA.logo;   
    Banner.value = RYCDATA.imgDescription;
    CompanyName.value = RYCDATA.companyName;
    Description.value = RYCDATA.description;
    History.value = RYCDATA.history; 
    Phone.value = RYCDATA.tel  ;    
    Phone2.value = RYCDATA.tel2   ;  
    Direction.value = RYCDATA.direction ; 
    Email.value = RYCDATA.correo;
  });
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




