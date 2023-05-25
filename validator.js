export const validator={
  isValid: function(cardNumber){
    const numeroArray = cardNumber.split("").reverse( );
    // split() retorna un array en el cual reverse() y join() pueden ser aplicados
    for (let i = 0; i < numeroArray.length; i += 1){
    // aca le digo si mi numero es divisible por 2 y da 0 lo tomo 
      if (i % 2 !==0) {
      // ACA LE DGO QE LOS NUMEROS EN POSICION IMPAR ME LOS MULTIPLIQUE POR DOS
        numeroArray[i] = parseInt(numeroArray[i]) * 2;
        if (numeroArray[i] > 9) {
          // le quito 9 a numeros que tengan dos cifras para que todos mis numeros tengan un solo numero 
          numeroArray[i] = numeroArray[i] -9
        }
      } else { numeroArray[i] = parseInt(numeroArray[i])
      }
    }
    const sumaDigitos = numeroArray.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
    const resultado = sumaDigitos % 10 === 0;

    
    alert(resultado);
  },
  
  Maskify: function(cardNumber){
    const numeroArray = cardNumber.split("");
    for (let i =0; i<numeroArray.length-4; i++){
      numeroArray[i]= "#";
    }
    return numeroArray.join("");
  }   
  

}