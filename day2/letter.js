/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar.
 El tema es que es una cadena de texto y es muy difícil de leer 😱. 
 ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado,
     porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra,
 por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece
*/

function listGifts(letter) {
  const letterArray = letter.split(" ");
  console.log(letterArray);
  const obj = {};
  letterArray.forEach((item) => {
    if (item !== "" && item.charAt(0) !== "_") {
      obj[item] ? (obj[item] = obj[item] + 1) : (obj[item] = 1);
    }
  });
  return obj;
}

const carta = "bici  coche balón _playstation   bici coche peluche";

const regalos = listGifts(carta);

console.log(regalos);

/*
should log:
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
