window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
  });
  
  let edit = this.document.getElementById("AgregarServ");
  
 edit.addEventListener("click",function(){
  document.getElementById("Servicios-Create").style.visibility="visible";
  
 })
  
    
  

    /*const cardText = document.getElementById("input");
    let createCard = document.getElementById("BTN")

    createCard.addEventListener("click", function() {
        const text = cardText.value;
        if (text.trim() !== "") {
            // Crear una nueva tarjeta
            const my_card = document.createElement("my_cards");
            my_card.className = "my_card";
            my_card.textContent = text;
            
            // Agregar la tarjeta al contenedor
            my_cards.appendChild(my_card);
            
            // Limpiar el campo de entrada de texto
            cardText.value = "";
        }
    });
*/ 