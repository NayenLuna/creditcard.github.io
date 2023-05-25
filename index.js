import {validator} from './validator.js';
//creo una constante que llame al boton validar
const validarButton=document.querySelector('#validation-message');
// creo un evento que escuche al momento de hacer click
validarButton.addEventListener("click",function(event){
//previene que se ejecute cualquier otro evento 
  event.preventDefault()
  const cardNumber = document.querySelector("#numeroDeTarjeta").value;
  validator.isValid(cardNumber);
  document.getElementById("numeroDeTarjeta").value = validator.Maskify(cardNumber);
}
);



