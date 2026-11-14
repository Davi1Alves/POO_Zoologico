import Cachorro from "./models/cachorro.js";
import Gato from "./models/Gato.js";
import Mamiferos from "./models/mamiferos.js";
import Humano from "./models/humano.js";

const Humano1 = new Humano("Davi", 26, "M");
const Cachorro1 = new Cachorro("Rex", "M");
const Gato1 = new Gato("Luna", "F");

Humano1.emitirSom();
Cachorro1.emitirSom();
Gato1.emitirSom();

Humano1.mortalPraTras();

Cachorro1.sentar();

Gato1.subirNaArvore();