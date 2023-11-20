/** Ennoncé
 *
 * Craquez un algorithme de chiffrement : le ROT13 (ou Rotate By 13 Places). L’idée est de décaler chacune des lettres de l’alphabet de 13 places.
 *
 */

/* Ma solution */

// Déclarartion de la fonction transformToRot13(stringToTransform)
const transformToRot13 = (stringToTransform) => {
  // Création de la variable newStr qui comprend stringToTransform et la transforme en tableau
  const newStr = stringToTransform.split("").map((char) => {
    const code = char.charCodeAt(char);
    //console.log(code);
    // Parcourir le tableau pour trouver son code character et vérifier s'il est compris entre 65 et 90
    if (code < 65 || code > 90) {
      // retourne un caratère non converti
      return String.fromCharCode(code);
    } else if (code < 78) {
      // Avance de 13 places
      //console.log("Avance de 13 places");
      return String.fromCharCode(code + 13);
    } else {
      // Recule de 13 places
      //console.log("Recule de 13 places");
      return String.fromCharCode(code - 13);
    }
  });

  // retourne le tout
  return newStr;
};

/* Tests */

// Appel de la fonction transformToRot13()
transformToRot13("URYYB JBEYQ"); // HELLO WORLD
transformToRot13("PRPV RFG ZBA PBQR FRPERG"); // CECI EST MON CODE SECRET
