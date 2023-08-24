import Skills from "../components/skills";
import cvlotte from "../assets/images/cvLotte.png"
import cvDevWeb from "../assets/images/cvDevWeb.png"

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from "react";

function About () {
  const [showCV, setShowCV] = useState(false);

  function toggleCV() {
    setShowCV(!showCV);
  }

    return(
      <div>
        <section className="sec" id="about">
        <h2>Présentation</h2>
        <div className="lottedescription">
        <AnimationOnScroll animateIn="bounceInRight" animateOut="bounceOutRight" className="cvlotte" style={{ animationDuration: '2s' }}>
        <button type="button" onClick={toggleCV} id="buttoncv">
          <img src={cvlotte} alt="cv Lotte" id="cvlotte" />
          </button>
          </AnimationOnScroll>
          {showCV && (
            <div className="cv">
            <img src={cvDevWeb} alt="cv en pdf" id="cv"/>
            </div>
          )}
          <div className="texte">
            <p>
                Je suis une webdesigner freelance passionnée par la création de sites web uniques et personnalisés qui reflètent l'identité de mes clients.
                Avec un master en design couleur et matière, j'ai acquis une solide expertise en design graphique, ce qui m'a même conduit à enseigner cette discipline pendant deux ans.
                Ma passion pour le développement web est née plus tard, lorsque j'ai décidé de me reconvertir. Ce fut comme résoudre un jeu d'énigmes captivant, alliant à la fois la résolution de problèmes techniques et la créativité dans la construction de chaque projet.
                Cependant, l'illustration reste mon premier amour, et c'est cette passion qui vient nourrir mon univers créatif. J'aime intégrer des illustrations uniques dans mes projets pour leur donner une touche artistique et originale.
                Si vous recherchez un site web qui vous ressemble, je suis là pour concrétiser votre vision et donner vie à votre projet en ligne.
                N'hésitez pas à me contacter pour discuter de votre projet web et découvrir comment nous pouvons collaborer pour créer quelque chose de vraiment spécial.
            </p>
          </div>
        </div>
      </section>
      <h4>Mes outils</h4>
      <Skills />
      </div>
    )
}

export default About;