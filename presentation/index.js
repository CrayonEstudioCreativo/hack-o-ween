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
  gitscm: require("../assets/git-scm.com-.png"),
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
              <ListItem>Una maquina del tiempo</ListItem>
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
              <ListItem>Como usar git localmente</ListItem>
              <ListItem>GitHub</ListItem>
              <ListItem>Flujo básico de git</ListItem>
              <ListItem>Comandos fundamentales</ListItem>
              <ListItem>Viajar en el tiempo y cambiar la historia</ListItem>
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




        <Slide transition={["spin"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
