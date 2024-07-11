# Social proof section

Repositorio con el código solución del challenge: [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA)

## Tabla de Contenidos

- [Social proof section](#social-proof-section)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [The challenge](#the-challenge)
  - [Diseños a Replicar](#diseños-a-replicar)
    - [1-Mobile Design](#1-mobile-design)
    - [2-Desktop Design](#2-desktop-design)
  - [Proyecto Realizado](#proyecto-realizado)
    - [1-Project on Mobile Screen](#1-project-on-mobile-screen)
    - [2-Project on Desktop Screen](#2-project-on-desktop-screen)
  - [Modificaciones](#modificaciones)
    - [Se cambia componente de React que muestra background Images a componente de TailwindCSS](#se-cambia-componente-de-react-que-muestra-background-images-a-componente-de-tailwindcss)

## The challenge

El challenge consiste en realizar lo siguiente:

> Users should be able to:
>
> - View the optimal layout for the section depending on their device's screen size

## Diseños a Replicar

### 1-Mobile Design

![Mobile Design](./screenshots/mobile-design.jpg)

### 2-Desktop Design

![Desktop Design](./screenshots/desktop-design.jpg)

## Proyecto Realizado

### 1-Project on Mobile Screen

![Project on Mobile Screen](./screenshots/waldo/mobile.webp)

### 2-Project on Desktop Screen

![Project on Desktop Screen](./screenshots/waldo/desktop.webp)

## Modificaciones

### Se cambia componente de React que muestra background Images a componente de TailwindCSS

Se cambia el siguiente componente de React:

```jsx
import bgPatternTopMobile from "../assets/bg-pattern-top-mobile.svg";
import bgPatternBottomMobile from "../assets/bg-pattern-bottom-mobile.svg";

import bgPatternTopDesktop from "../assets/bg-pattern-top-desktop.svg";
import bgPatternBottomDesktop from "../assets/bg-pattern-bottom-desktop.svg";

export default function BackgroundsPatterns() {
  return (
    <>
      <img
        src={bgPatternTopMobile}
        alt="bg-pattern-top-mobile"
        className="absolute top-0 left-0 right-0 lg:hidden z-[-1]"
      />
      <img
        src={bgPatternBottomMobile}
        alt="bg-pattern-bottom-mobile"
        className="absolute  right-0 bottom-0 lg:hidden z-[-1]"
      />

      <img
        src={bgPatternTopDesktop}
        alt="bg-pattern-top-desktop"
        className="absolute top-0 left-0 right-0 hidden lg:block z-[-1]"
      />
      <img
        src={bgPatternBottomDesktop}
        alt="bg-pattern-bottom-desktop"
        className="absolute left-[23%] bottom-0 hidden lg:block z-[-1]"
      />
    </>
  );
}
```

Al siguiente componente de TailwindCSS:

```css
.backgroundLayer {
  background: url("./assets/bg-pattern-top-mobile.svg") top left/100% auto
      no-repeat, url("./assets/bg-pattern-bottom-mobile.svg") bottom right/100%
      50% no-repeat;
}
@screen md {
  .backgroundLayer {
    background: url("./assets/bg-pattern-top-desktop.svg") top left no-repeat, url("./assets/bg-pattern-bottom-desktop.svg")
        bottom right no-repeat;
  }
}
```
