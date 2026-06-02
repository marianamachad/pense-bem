import { programa1 } from "./programa1.js";
import { programa2 } from "./programa2.js";
import { programa3 } from "./programa3.js";
import { programa4 } from "./programa4.js";
import { programa5 } from "./programa5.js";

function pegarQuestoesAleatorias(lista, quantidade) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia.slice(0, quantidade);
}

export const programa6 = [
  ...pegarQuestoesAleatorias(programa1, 6),
  ...pegarQuestoesAleatorias(programa2, 6),
  ...pegarQuestoesAleatorias(programa3, 6),
  ...pegarQuestoesAleatorias(programa4, 6),
  ...pegarQuestoesAleatorias(programa5, 6),
];

programa6.sort(() => Math.random() - 0.5);