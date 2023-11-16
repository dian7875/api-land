window.addEventListener("load", function () {
  console.log("'Todos los recursos terminaron de cargar!");
});


var men = document.getElementById("Mensaje");//text
var opStatus = document.getElementById("ImgSta");//imagen
var opdiv = document.getElementById("Final");//span
var obje = document.getElementById("ExitoError");
function loadExito(){
men.innerText="Operacion Realizada Con Exito";
opStatus.src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png";
men.style.visibility="visible";
opStatus.style.visibility="visible";
opdiv.style.visibility="visible";
opdiv.style.visibility="visible";
obje.style.visibility="visible";
};
function loadError(){
  men.innerText="ERROR al realizar la operacion porfavor revisa los datos";
  opStatus.src="https://cdn-icons-png.flaticon.com/128/1810/1810747.png";
  men.style.visibility="visible";
  opStatus.style.visibility="visible";
  opdiv.style.visibility="visible";
};

function hidddenStatus(){
  men.style.visibility="hidden";
  opStatus.style.visibility="hidden";
  opdiv.style.visibility="hidden";
};

//Botones sidebar
let EditS = document.getElementById("EditarServ");
let createS = document.getElementById("AgregarServ");
let DeleteS = document.getElementById("EliminarServ");
let AddImg = document.getElementById("AgregarIMG");
let DelImg = document.getElementById("EliminarIMG");
let EdiImg = document.getElementById("EditarIMG");
let EdiInf = document.getElementById("InfEdit");
var advertencia = document.getElementsByClassName("adverAgregar")[0];

//Servicios Funciones y variables
const selectIDSERV = document.getElementById('IDService');
const urlInputElement = document.getElementById('Surl');
var serviceName = document.getElementById("Sname");
var serviceDescription = document.getElementById("Sdesc");

//funciones alterar campos y demas

function lock() {
  target = document.getElementById("InfoService");
  target2 = document.getElementById("photoInfo");
  target.style.zIndex = "-99";
  target2.style.zIndex = "-99";
}
function unlock() {
  target = document.getElementById("InfoService");
  target2 = document.getElementById("photoInfo");
  target.style.zIndex = "1";
  target2.style.zIndex = "1";
}

//carga de lista sevicios
function loadComboSID() {
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

//finaliza
//variables de servicios

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
//BOTONES DE SERVICIOS
let Service = document.getElementById("Servicios");
let ListSe = document.getElementById("IDService")
let SC = document.getElementById("CreateService");
let SD = document.getElementById("DeleteService");
let SE = document.getElementById("EditService");
var Surl = document.getElementById("Surl");
var Simg = document.getElementById("Simg");

function inicioVacio() {
  serviceName.value = "";
  serviceDescription.value = "";
  urlInputElement.value = "";
  Simg.src = 'https://i.pinimg.com/originals/fa/a5/62/faa5625612ebb5d14e955fe0aa8a616d.png';
};
function hiddenServ() {
  Service.style.visibility = "hidden";
  ListSe.style.visibility = "hidden";
  SD.style.visibility = "hidden";
  SE.style.visibility = "hidden";
  SC.style.visibility = "hidden";
};
Surl.addEventListener("input", function () {
  const nuevoSrc = Surl.value;
  Simg.src = nuevoSrc;
});
var confEDIMG = document.getElementById("AceptarEdiImg");
var confDEIMG = document.getElementById("AceptarDeleteImg");
var confADIMG = document.getElementById("AceptarAgreImg");
var confEDINF = document.getElementById("AceptarEdiInfo");
var confADSER = document.getElementById("Aceptar");
var confDESER = document.getElementById("AceptarDeleteService");
var confEDSER = document.getElementById("AceptarEdiService");
function hiddenButton() {
  confEDIMG.style.visibility = "hidden";
  confDEIMG.style.visibility = "hidden";
  confADIMG.style.visibility = "hidden";
  confEDINF.style.visibility = "hidden";
  confADSER.style.visibility = "hidden";
  confDESER.style.visibility = "hidden";
  confEDSER.style.visibility = "hidden";
};
/*Orden de las funcionalides
mostrar campos de opcion
mostrar advertencia
realizar accion
*/
//edit(PATCH) service
EditS.addEventListener("click", function () {
  cancel();
  inicioVacio();
  loadComboSID();
  ListSe.style.visibility = "visible";
  Service.style.visibility = "visible";
  SE.style.visibility = "visible";
  unlock();
});

document.getElementById("EditService").addEventListener("click", function () {
  advertencia.style.visibility = "visible";
  hiddenButton();
  confEDSER.style.visibility = "visible";
});

confEDSER.addEventListener("click", function () {
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
      if (response.status === 2000) {
        loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden"
          inicioVacio();
          loadComboSID();
          hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden"
          hidddenStatus();
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//delete service
DeleteS.addEventListener("click", function () {
  cancel();
  inicioVacio();
  loadComboSID();
  ListSe.style.visibility = "visible";
  Service.style.visibility = "visible";
  SD.style.visibility = "visible";
  lock();
});

document.getElementById("DeleteService").addEventListener("click", function () {
  advertencia.style.visibility = "visible";
  hiddenButton();
  confDESER.style.visibility = "visible";
});

confDESER.addEventListener("click", function () {
  var SerchserviceId = selectIDSERV.value;

  fetch(`/api/services/${SerchserviceId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.status === 2000) {
        loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden"
          inicioVacio();
          loadComboSID();
          hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden"
          hidddenStatus();
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//post service
createS.addEventListener("click", function () {
  cancel();
  inicioVacio();
  Service.style.visibility = "visible";
  SC.style.visibility = "visible";
  unlock();
});
document.getElementById("CreateService").addEventListener("click", function () {

  advertencia.style.visibility = "visible";
  hiddenButton();
  confADSER.style.visibility = "visible";
});
confADSER.addEventListener("click", function () {
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
        loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden"
          inicioVacio();
          hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden"
          hidddenStatus();
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//fin de services

//informacion general

function hiddenInf() {
  InfoGenDsi.style.visibility = "hidden";
}

EdiInf.addEventListener("click", function () {
  cancel();
  hiddenServ();
  InfoGenDsi.style.visibility = "visible";
  hiddenImgs();
  fetch('http://localhost:3000/api/infogeneral/1')
    .then(response => response.json())
    .then(RYC => {
      RYCDATA = RYC;
      Logo.value = RYCDATA.logo;
      ImgLog.src = RYCDATA.logo;
      ImgBAN.src = RYCDATA.imgDescription;
      Banner.value = RYCDATA.imgDescription;
      CompanyName.value = RYCDATA.companyName;
      Description.value = RYCDATA.description;
      History.value = RYCDATA.history;
      Phone.value = RYCDATA.tel;
      Phone2.value = RYCDATA.tel2;
      Direction.value = RYCDATA.direction;
      Email.value = RYCDATA.correo;
    });
});


document.getElementById("Confirm").addEventListener("click", function () {
  advertencia.style.visibility = "visible";
  hiddenButton();
  confEDINF.style.visibility = "visible";
});


confEDINF.addEventListener("click", function () {
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
        loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
         hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
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
  hiddenButton();
  advertencia.style.visibility = "hidden"
}
for (var i = 0; i < cancels.length; i++) {
  cancels[i].addEventListener("click", function () {
    cancel();
  });
}

//segmento de imagenes
//combobox y carga de elementos del combobox
var ListaGall = document.getElementById("IDPhoto");
var urlFoto = document.getElementById("URLphoto"); //Input ESTE ES EL QUE OCUPO
var imgP = document.getElementById("IMGGal"); //IMAGEN

//carga de lista imagenes
function loadComboOp() {
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
      imgP.src = GaleryData.url;
    })
    .catch(error => console.error(error));
});
//!reducir funciones a directo unicafuncion hiddenIMG
//Galeria botones y texto
var InfG = document.getElementById("galleryInf");
//botones Delete,Edit,Create
let IDELETE = document.getElementById("DeleteIMG");
let IE = document.getElementById("EditIMG");
let IC = document.getElementById("CreateIMG");
//fin
//Estado inicial y funciones asociadas
function hiddenImgs() {
  IDPhoto.style.visibility = "hidden";
  InfG.style.visibility = "hidden";
  IC.style.visibility = "hidden";
  IDELETE.style.visibility = "hidden";
  IE.style.visibility = "hidden";
};
function loadEmpy() {
  urlFoto.value = "";
  imgP.src = "https://i.pinimg.com/originals/fa/a5/62/faa5625612ebb5d14e955fe0aa8a616d.png";
};
urlFoto.addEventListener("input", function () {
  const nuevoSrc = urlFoto.value;
  imgP.src = nuevoSrc;
});
//FIN

//Edit(PATCH)
EdiImg.addEventListener("click", function () {
  cancel();
  IDPhoto.style.visibility = "visible";
  InfG.style.visibility = "visible";
  IE.style.visibility = "visible";
  loadEmpy();
  loadComboOp();
  unlock();
});
IE.addEventListener("click", function () {
  advertencia.style.visibility = "visible";
  hiddenButton();
  confEDIMG.style.visibility = "visible";
});

confEDIMG.addEventListener("click", function () {

  var newUrlFoto = urlFoto.value;
  const selectPhotoId = ListaGall.value;
  var updateGalery = {
    url: newUrlFoto,
    infoGeneralId: 1
  };

  fetch(`http://localhost:3000/api/galery/${selectPhotoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateGalery)
  })
    .then(response => {
      if (response.status === 200) {
       loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
          loadComboOp();
          loadEmpy();
          hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
          hidddenStatus();
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
//DELETE
DelImg.addEventListener("click", function () {
  cancel();
  IDPhoto.style.visibility = "visible";
  InfG.style.visibility = "visible";
  IDELETE.style.visibility = "visible";
  loadEmpy();
  loadComboOp();
  lock();
});


IDELETE.addEventListener("click", function () {
  advertencia.style.visibility = "visible";
  hiddenButton();
  confDEIMG.style.visibility = "visible";
});

confDEIMG.addEventListener("click", function () {
  var SerchGallId = ListaGall.value;

  fetch(`/api/Galery/${SerchGallId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.status === 200) {
        loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
          loadComboOp();
          loadEmpy();
          hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
          hidddenStatus();
        }, 2000);
      }
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//PUT
AddImg.addEventListener("click", function () {
  cancel();
  InfG.style.visibility = "visible";
  IC.style.visibility = "visible";
  loadEmpy();
  unlock();
});

IC.addEventListener("click", function () {
  advertencia.style.visibility = "visible";
  hiddenButton();
  confADIMG.style.visibility = "visible";
});


confADIMG.addEventListener("click", function () {
  var newUrlFoto = urlFoto.value;

  var newGalery = {
    url: newUrlFoto,
    infoGeneralId: 1
  };

  fetch('http://localhost:3000/api/galery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newGalery)
  })
    .then(response => {
      if (response.status === 201) {
        loadExito();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
          loadEmpy();
          hidddenStatus();
        }, 2000);
      } else {
        loadError();
        setTimeout(() => {
          hiddenButton();
          advertencia.style.visibility = "hidden";
          hidddenStatus();
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
//fin galery
//advertencia


document.getElementById("cancelar").addEventListener("click", function () {
  advertencia.style.visibility = "hidden";
  hiddenButton();
});

//Fin >_<