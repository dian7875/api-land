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

//Servicios Funciones y variables
const selectIDSERV = document.getElementById('IDService');
const urlInputElement = document.getElementById('Surl');
var serviceName = document.getElementById("Sname");
var serviceDescription = document.getElementById("Sdesc");

function lock(){
  target = document.getElementById("InfoService");
  target2 = document.getElementById("photoInfo");
  target.style.zIndex="-99";
  target2.style.zIndex="-99";
}
function unlock(){
  target = document.getElementById("InfoService");
  target2 = document.getElementById("photoInfo");
  target.style.zIndex="1";
  target2.style.zIndex="1";
}

function loadComboSID(){
  while (selectIDSERV.length > 1) {
    selectIDSERV.remove(1);
  };
  fetch('http://localhost:3000/api/services')
  .then(response => response.json())
  .then(data => {

    const selectIDSERV = document.getElementById('IDService');
    data.forEach(service => {
      const option = document.createElement('option');
      option.value = service.id;
      option.textContent = service.name;
      selectIDSERV.appendChild(option);
    });
  })
  .catch(error => console.error(error));
}

selectIDSERV.addEventListener('change', (event) => {
  const selectedServiceId = event.target.value;
  fetch(`/api/services/${selectedServiceId}`)
    .then(response => response.json())
    .then(serviceData => {
      serviceName.value = serviceData.name;
      serviceDescription.value = serviceData.description;
      Simg.src = serviceData.icon;
      urlInputElement.value = serviceData.icon;
    }).catch(error => console.error(error));
});

document.getElementById("CreateService").addEventListener("click", function () {

  var NewserviceName = serviceName.value;
  var NewserviceDescription = serviceDescription.value;
  var NewserviceIcon = urlInputElement.value;

  var newService = {
    name: NewserviceName,
    description: NewserviceDescription,
    icon: NewserviceIcon,
    infoGeneralId: 1
  };

  fetch('http://localhost:3000/api/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newService)
  })
    .then(response => {
      if (response.status === 201) {
        alert('Servicio agregado con éxito');

      } else {
        alert('Hubo un error al agregar el servicio');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


document.getElementById("EditService").addEventListener("click", function () {
  var SerchserviceId = selectIDSERV.value;
  var serviceNewName = serviceName.value;
  var serviceNewDescription = serviceDescription.value;
  var serviceNewIcon = urlInputElement.value;

  var updatedService = {
    name: serviceNewName,
    description: serviceNewDescription,
    icon: serviceNewIcon,

  };

  fetch(`/api/services/${SerchserviceId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedService)
  })
    .then(response => {
      if (response.status === 200) {
        alert('Servicio actualizado con éxito');
      } else {
        alert('Hubo un error al actualizar el servicio');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById("DeleteService").addEventListener("click", function () {
  var SerchserviceId = selectIDSERV.value;

  fetch(`/api/services/${SerchserviceId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.status === 200) {
      console.log("EXITO");
      //imagen de exito al eliminar
      //cancel();
    }else{
      //evento de fallo img fallo al eliminar
    }
  })
    .catch(error => {
      console.error('Error:', error);
    });
});

//BOTONES DE SERVICIOS
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

function inicioVacio(){
  serviceName.value = "";
  serviceDescription.value ="";
  urlInputElement.value = "";
  Simg.src = 'https://i.pinimg.com/originals/fa/a5/62/faa5625612ebb5d14e955fe0aa8a616d.png';
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
  inicioVacio();
  editSer();
  hiddenInf();
  hiddenImgs();
  loadComboSID();
  unlock();
})
createS.addEventListener("click", function () {
  inicioVacio();
  createServ();
  hiddenInf();
  hiddenImgs();
  unlock();
})
DeleteS.addEventListener("click", function () {
  inicioVacio();
  deleteServ();
  hiddenInf();
  hiddenImgs();
  loadComboSID();
  lock();
})
Surl.addEventListener("input", function () {
  const nuevoSrc = Surl.value;
  Simg.src = nuevoSrc;
});


//Info general funciones y variables
//variables
var Logo = document.getElementById("LogoI");
var Banner = document.getElementById("BanIn");
var CompanyName = document.getElementById("NameC");
var Description = document.getElementById("DescC");
var History = document.getElementById("HistC");
var Phone = document.getElementById("TelC");
var Phone2 = document.getElementById("Tel2C");
var Direction = document.getElementById("DirC");
var Email = document.getElementById("MailC");
var ImgLog = document.getElementById("Logop");
var ImgBAN = document.getElementById("LogoB");
let InfoGenDsi = document.getElementById("ActionInfo");
var cancels = document.getElementsByClassName("cancelar");
//funciones
document.getElementById("Confirm").addEventListener("click", function () {
  var newLogo = Logo.value;
  var newBanner = Banner.value;
  var newCompanyName = CompanyName.value;
  var newDescription = Description.value;
  var newHistory = History.value;
  var newPhone = Phone.value;
  var newPhone2 = Phone2.value;
  var newDirection = Direction.value;
  var newEmail = Email.value;

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
  
  fetch("http://localhost:3000/api/infogeneral/1", {
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
    ImgBAN.src=RYCDATA.imgDescription;
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
Logo.addEventListener("input", function () {
  const nuevoSrc = Logo.value;
  ImgLog.src = nuevoSrc;
});
Banner.addEventListener("input", function () {
  const nuevoSrc = Banner.value;
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
//combobox y carga de elementos del combobox
var ListaGall = document.getElementById("IDPhoto");
var urlFoto = document.getElementById("URLphoto"); //Input
var imgP = document.getElementById("IMGGal"); //IMAGEN

function loadComboOp(){
  while (ListaGall.length > 1) {
    ListaGall.remove(1);
  };
  fetch('http://localhost:3000/api/Galery')
  .then(response => response.json())
  .then(data => {
    const selectIDSERV = document.getElementById('IDPhoto');
    data.forEach(Galery => {
      const option = document.createElement('option');
      option.value = Galery.id;
      option.textContent = Galery.id;
      selectIDSERV.appendChild(option);
    });
  })
  .catch(error => console.error(error));
};

ListaGall.addEventListener('change', (event) => {

  const selectPhotoId = event.target.value;


  fetch(`http://localhost:3000/api/Galery/${selectPhotoId}`)
    .then(response => response.json())
    .then(GaleryData => {
      urlFoto.value = GaleryData.url;
      imgP.src= GaleryData.url;
    })
    .catch(error => console.error(error));
});

//Galeria botones y texto
var InfG = document.getElementById("galleryInf");
let IDELETE = document.getElementById("DeleteIMG");
let IE = document.getElementById("EditIMG");
let IC = document.getElementById("CreateIMG");

urlFoto.addEventListener("input", function () {
  const nuevoSrc = urlFoto.value;
  imgP.src = nuevoSrc;
});

function hiddenImgs() {
  IDPhoto.style.visibility = "hidden";
  InfG.style.visibility = "hidden";
  IC.style.visibility = "hidden";
  IDELETE.style.visibility = "hidden";
  IE.style.visibility = "hidden";
}
function loadEmpy(){
urlFoto.value ="";
imgP.src="https://i.pinimg.com/originals/fa/a5/62/faa5625612ebb5d14e955fe0aa8a616d.png";
}
function showImgEdit() {
  IDPhoto.style.visibility = "visible";
  InfG.style.visibility = "visible";
  IE.style.visibility = "visible";
  IC.style.visibility = "hidden";
  IDELETE.style.visibility = "hidden";
  loadEmpy();
}
EdiImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
  showImgEdit();
  loadComboOp();
  unlock();
});
function showImgDele() {
  IDPhoto.style.visibility = "visible";
  InfG.style.visibility = "visible";
  IDELETE.style.visibility = "visible";
  IE.style.visibility = "hidden";
  IC.style.visibility = "hidden";
  loadEmpy();
}
DelImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
  showImgDele();
  loadComboOp();
  lock();
});
function ShowImgAdd() {
  ListaGall.style.visibility = "hidden";
  InfG.style.visibility = "visible";
  IC.style.visibility = "visible";
  IE.style.visibility = "hidden";
  IDELETE.style.visibility = "hidden";
  loadEmpy();
}
AddImg.addEventListener("click", function () {
  hiddenServ();
  hiddenInf();
  ShowImgAdd();
  unlock();
});
//PUT,PATCH,DELETE
IDELETE.addEventListener("click", function () {

  //confirmacion de elimnar
  var SerchGallId = ListaGall.value;

  fetch(`/api/Galery/${SerchGallId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.status === 200) {
        console.log("EXITO");
        //imagen de exito al eliminar
        //cancel();
      }else{
        //evento de fallo img fallo al eliminar
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
//Fin >_<