// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Link,
  Slide
} from "spectacle";

import { SlideCodeable } from "./src/SlideCodeable";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  mainBackground: require("../assets/bttf-background.jpg"),
  what: require("../assets/what.gif"),
  ingredients: require("../assets/ingredients.gif"),
  ready: require("../assets/ready.gif"),
  que: require("../assets/what2.gif"),
  shrink: require("../assets/shrink.gif"),
  node: require("../assets/node.png"),
  tools: require("../assets/tools.gif")
};

preloader(images);

const audios = {
  intro: require("../assets/QueMonstruosSon.mp3")
};

preloader(audios);

const theme = createTheme(
  {
    primary: "#212121",
    secondary: "#FE9600",
    tertiary: "#FFC501",
    quartenary: "#FFEE4A",
    purple: "#77477E",
    black: "#03001C",
    white: "#FFF"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

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
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress={"pacman"}
      >
        <SlideCodeable
          bgImage={images.mainBackground}
          bgColor="primary"
          audio={this.audioIntro}
        >
          <div>
            <Heading size={3} textColor="white" caps>
              ¡Hack-O-ween!
            </Heading>
            <div className="logo">
              <ul className="cube">
                <li className="front" />
                <li className="back" />
                <li className="right" />
                <li className="left" />
                <li className="top" />
                <li className="bottom" />
                <li className="floor" />
              </ul>
              <ul className="cube-inner">
                <li className="front" />
                <li className="back" />
                <li className="right" />
                <li className="left" />
                <li className="top" />
                <li className="bottom" />
              </ul>
            </div>
            <Heading size={4} textColor="white" caps>
              con Webpack
            </Heading>
          </div>
        </SlideCodeable>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear>
            <div>
              <Heading size={3} textColor="tertiary" caps>
                Advertencia
              </Heading>
              <Heading size={5} textColor="white" caps>
                Esta más que una platica es un <strong>taller</strong>
              </Heading>
              <Heading size={6} textColor="white" caps>
                En los talleres se construyen cosas <br />
                Vamos a construir cosas 🔨👾
              </Heading>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="purple">
          <Appear>
            <div>
              <Heading size={1} textColor="secondary" caps>
                ¿Que vamos a hacer?
              </Heading>
              <Image src={images.what} />
            </div>
          </Appear>
          <Appear>
            <Heading size={6} textColor="tertiary">
              Construir una SPA (<em>single-page-app</em>)
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "spin"]} bgColor="purple">
          <Appear>
            <div>
              <Heading size={1} textColor="secondary" caps>
                ¿Que vamos a necesitar
              </Heading>
              <Image src={images.ingredients} />
            </div>
          </Appear>
          <Appear>
            <Heading size={6} textColor="tertiary">
              🎃 Node.js 🎃
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Appear>
            <Image src={images.ready} />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black" textColor="tertiary">
          <Appear>
            <Heading textColor="secondary" size={1}>
              Comenzamos
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white" caps>
              ¿Que vamos a ver?
            </Heading>
          </Appear>
          <Appear>
            <List textColor="white">
              <ListItem>¿Que es webpack?</ListItem>
              <ListItem>Bundling !== minification</ListItem>
              <ListItem>Javascript</ListItem>
              <ListItem>Node / NPM / Yarn</ListItem>
              <ListItem>Javascript para la Web</ListItem>
              <ListItem>Webpack (JS, Sass, Assets)</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="tertiary">
          <Appear>
            <Heading size={3}>¿Que webpack?</Heading>
          </Appear>
          <Appear>
            <div>
              <Heading size={6} textColor="purple">
                Webpack is a module bundler for modern JavaScript applications.
              </Heading>
              <div>
                <Image src={images.que} />
              </div>
              <Link
                href="https://webpack.js.org"
                target="_blank"
                textColor="white"
              >
                webpack.js.org
              </Link>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Appear>
            <div>
              <Heading size={4} textColor="purple">
                Bundling & Minification
              </Heading>
              <Image src={images.shrink} />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="quartenary" textColor="tertiary">
          <Appear>
            <Heading size={1} textColor="purple">
              Bundling
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="primary">
              Realizar conjuntos de código comun entre multiples páginas.
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="quartenary" textColor="tertiary">
          <Appear>
            <Heading size={1} textColor="purple">
              Minification
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="primary">
              Comprimir, ofuscar y reducir el código para que sea mas "ligero".
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="purple" textColor="tertiary">
          <Appear>
            <Heading size={1} textColor="secondary">
              Javascript
            </Heading>
          </Appear>
          <Appear>
            <div>
              <Image src={images.node} width="200px" />
              <div>
                <span>
                  <Link
                    href="https://nodejs.org/"
                    target="_blank"
                    textColor="white"
                  >
                    nodejs.org
                  </Link>
                </span>
              </div>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Image src={images.tools} />
          <Appear>
            <div>
              <Link
                href="https://www.npmjs.com/"
                target="_blank"
                textColor="secondary"
              >
                NPM
              </Link>
            </div>
          </Appear>
          <Appear>
            <div>
              <Link
                href="https://yarnpkg.com/lang/en/"
                target="_blank"
                textColor="tertiary"
              >
                Yarn
              </Link>
            </div>
          </Appear>
          <Appear>
            <div>
              <Link
                href="https://babeljs.io/learn-es2015/"
                target="_blank"
                textColor="white"
              >
                ES6:ES2015
              </Link>
            </div>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
