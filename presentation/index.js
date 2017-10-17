// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Bar,
  Cite,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text
} from "spectacle";

import { SlideCodeable } from './src/SlideCodeable';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  main_background: require("../assets/bttf-background.jpg"),
  logo: require("../assets/bttf.svg"),
  fine: require("../assets/thisisfine.gif"),
  future: require("../assets/future.gif"),
  greet: require("../assets/greet.gif"),
  add: require("../assets/add.gif"),
  clock: require("../assets/clock.gif"),
  cuando: require("../assets/cuando.gif"),
  consola: require("../assets/consola.gif"),
  wash: require("../assets/wash.gif"),
  gitscm: require("../assets/git-scm.com-.png"),
  distribuido: require("../assets/centralized.png"),
  github: require("../assets/github.com-explore.png"),
};

preloader(images);

const audios = {
  intro: require("../assets/bttf.mp3")
}

preloader(audios);

const theme = createTheme({
  primary: "#E91E63",
  secondary: "#03A9F4",
  tertiary: "#212121",
  quartenary: "#FFA000",
  white: "#FFF"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {

  constructor(props) {
    super(props);

    this.audioIntro = this.audioIntro.bind(this);
  }

  audioIntro() {
    const audio = new Audio(audios.intro);
    return audio;
  }

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"pacman"}>
        <SlideCodeable bgImage={images.main_background} audio={this.audioIntro}>
          <Image src={images.logo} />
        </SlideCodeable>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
            <Heading size={1} textColor="primary" caps>¿Que es GIT?</Heading>
          </Appear>
          <List>
            <Appear>
              <ListItem>El DeLorean</ListItem>
            </Appear>
            <Appear>
              <ListItem>Un sistema de control versiones</ListItem>
            </Appear>
            <Appear>
              <ListItem>Un sistema para trabajo colaborativo</ListItem>
            </Appear>
            <Appear>
              <ListItem>Un sistema de distribución de información</ListItem>
            </Appear>
            <Appear>
              <ListItem>Software libre</ListItem>
            </Appear>
            <Appear>
              <ListItem><span>Un amigo de verdad <Appear><span>😜</span></Appear></span></ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="quartenary">
          <Appear>
            <Heading size={1} textColor="tertiary" caps>¿Control de versiones?</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="tertiary">Pero si yo tengo todo bajo control.</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <List textColor="white">
            <Appear><ListItem>📁 Tesis 😛</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión 1 😃</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión 1.1 😃</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión 2 😏</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión 2 - Cambios 😏</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión Final 😖</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión Final finalisíma 😔</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión Final finalisísma OK 😕</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión Final finalisísma OK - Cambios 😐</ListItem></Appear>
            <Appear><ListItem>📁 Tesis versión Final 2 - Cambios 😒</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Appear>
            <Image src={images.fine} />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Appear>
            <Heading size={1}>Comenzamos</Heading>
          </Appear>
          <Appear><Heading size={6} textColor="white" caps>¿Que vamos a ver?</Heading></Appear>
          <Appear>
            <List textColor="white">
              <ListItem>¿Cómo instalar git?</ListItem>
              <ListItem>Flujo básico de git</ListItem>
              <ListItem>Como usar git localmente</ListItem>
              <ListItem>GitHub</ListItem>
              <ListItem>Comandos fundamentales</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="tertiary">
          <Appear>
            <Heading size={3}>¿Que es el control de versiones?</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white">Es como tener puntos de guardado de nuestro trabajo, con opciones infinitas para hacer y deshacer. 🚀</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Appear>
            <Heading size={1} textColor="primary">¿Para que versionar?</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white">Para no sufrir. 💀</Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="quartenary" textColor="tertiary">
          <Appear>
            <Heading size={1}>¿Por que git?</Heading>
          </Appear>
          <Appear>
            <Heading size={6}>Porque es gratis, facil de mantener, rápido y colaborativo por naturaleza. 😎</Heading>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="secondary" textColor="tertiary">
          <Appear>
            <Heading size={6} textColor="white">¿Cómo instalar?</Heading>
          </Appear>
          <Appear>
            <div>
              <Image src={images.gitscm} width="70%" />
              <div>
                <span><Link href="https://git-scm.com/" target="_blank" textColor="white">https://git-scm.com/</Link> 👍</span>
              </div>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Image src={images.future} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Appear>
            <Heading size={3}>Pero antes</Heading>
          </Appear>
          <Appear>
            <div>
              <Image src={images.greet} />
              <Text textColor="white">Seamos educados.<br />Hay que presentarnos con git</Text>
            </div>
          </Appear>
          <Appear>
            <List textColor="white">
              <ListItem>Decirle nuestro nombre</ListItem>
              <ListItem>Decirle nuestro correo electrónico</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["flip"]} bgColor="secondary">
          <Heading size={3} textColor="white">Ahora si</Heading>
          <Image src={images.future} />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Appear>
            <Heading size={6} textColor="white">Creando un repositorio</Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor="quaternary">¿Que es un repositorio?</Heading>
          </Appear>
          <Appear>
            <Text textColor="white">Un repositorio es un sitio centralizado donde se almacena y mantiene información.</Text>
          </Appear>
          <Appear>
            <Heading size={3} textColor="primary" caps>Centralizado</Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="secondary">
          <Heading size={6} textColor="white">Añadiendo archivos</Heading>
          <Image src={images.add} />
        </Slide>
        <Slide transition={["flip"]} bgColor="tertiary" textColor="white">
          <Heading size={4} textColor="primary">commit</Heading>
          <Text textColor="white">
            <p>Git funciona mediante <i>commits</i>.<i>Commit</i> es una palabra complicada.</p>
            <p>La mejor interpretación seria como: <i>consignar</i>, <i>acometer</i> o <i>comprometer</i></p>
            <p>Asi que estamos consignando/comprometiendo cambios de contenido 👽.</p>
          </Text>
          <Heading size={6} textColor="quartenary">No suena bonito pero así es 💡.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={1}>Flujo de trabajo</Heading>
          <Heading size={6}>Añadir</Heading>
          <Heading size={6}>Stage ➡️ Seleccionar</Heading>
          <Heading size={6}>Commit ➡️ Consignar</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="ternary">Log</Heading>
          <Image src={images.clock} />
          <Heading size={3} textColor="quarternary">Registro de cambios</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="white">
          <Heading size={3} textColor="ternary">¡Pero cuando viajamos en el tiempo!</Heading>
          <Image src={images.cuando} />
        </Slide>
        <Slide transition={["flip"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">checkout y ramas</Heading>
          <Text textColor="white">
            <p><strong>checkout</strong> es una utilidad de git que es nuestro primer <i>DeLorean</i> (al comienzo de usar git, despues encontraremos otros más). </p>
            <p>Checkout nos permite viajar en el tiempo entre "commits", crear ramas, cambiarnos de rama, traer archivos en el tiempo y mucho más.</p>
          </Text>
        </Slide>
        <Slide transition={["slide", "flip"]} bgColor="secondary" textColor="white">
          <Appear>
            <div>
              <Heading size={3} textColor="ternary">Lave, enjuague y repita</Heading>
              <Image src={images.wash} />
            </div>
          </Appear>
          <Appear>
            <List textColor="white">
              <ListItem>Edite sus archivos</ListItem>
              <ListItem>Revise y añada sus cambios</ListItem>
              <ListItem>Consigne sus cambios</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "flip"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="white">Sorpresa</Heading>
          <Text textColor="white">
            <p>git no es <strong>centralizado</strong>.</p>
          </Text>
        </Slide>
        <Slide transition={["zoom", "flip"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="white">Distribuido</Heading>
          <Image src={images.distribuido} width="80%" />
        </Slide>
        <Slide transition={["flip", "fade"]} bgColor="secondary" textColor="tertiary">
          <Link href="https://github.com" target="_blank" textColor="white">
            <Heading size={3} textColor="ternary">github.com</Heading>
          </Link>
          <Text textColor="white">
            <p>Posiblemente el mayor nodo de distribución de repositorios git en el mundo.</p>
          </Text>
          <Image src={images.github} width="80%" />
        </Slide>
        <Slide transition={["zoom", "flip"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary">Clonar</Heading>
          <Text textColor="white">
            <p>Clonar un proyecto no es mas que conseguir una copia identica del repositorio, incluyendo toda la historia de cambios y ramas.</p>
          </Text>
        </Slide>
        <Slide transition={["slide", "flip"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Remotos</Heading>
          <Text textColor="tertiary">
            <p>Un remoto es un espacio en la <i>nube</i> que nos permite subir nuestro código y trabajar colaborativamente.</p>
          </Text>
        </Slide>
        <Slide transition={["zoom", "flip"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Extendido</Heading>
          <Heading size={5} textColor="white">GIT desde la consola</Heading>
          <Heading size={6} textColor="tertiary">Contenido para geeks 😎</Heading>
          <Image src={images.consola}/>
        </Slide>
      </Deck>
    );
  }
}
