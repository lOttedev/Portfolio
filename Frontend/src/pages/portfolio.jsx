import choco from "../assets/images/chocolatine-clickers.png"
import questubois from "../assets/images/Logo-Questubois.png"
import sds from "../assets/images/logo-sleepy-dev-squad.png"

import HouseLotte from "../components/Lottehouse"

const logoSite = [
{
  id : 1,
  image : choco,
  name : "Choc'n Click",
  url: "choc",
},
{
  id : 2,
  image : questubois,
  name : "Questubois",
},
{
  id: 3,
  image : sds,
  name : "Sleepy Dev Squad",
},

];

function Portfolio() {
  return (
    <section className="portfolio">

      <h2>Portfolio</h2>

      <div className="portfoliocontainer">

        <div className="illustrations">
          <HouseLotte />
        </div>
        <div className="descriptionandproject">
          <div className="description">
            <p className="détailprojets">
              Voici ici quelques uns de mes projets sur lesquels j'ai travaillé seule ou en équipe. 
              J'utilise principalement React.js pour mes réalisations, mais certains projets ont aussi été codés en JavaScript. 
              Si vous souhaitez en voir plus, il vous suffit de cliquer sur les logos qui défilent ci-dessous.
            </p>
          </div>
       
          <div className="sites">
            {logoSite.map((site) => (
              <div key={site.id} className="swippe">
                <button type="button" onClick={site.url}>
                  <img src={site.image} alt={site.name} id="swipper" />
                </button>
              </div>
            ))}
          </div>
          </div>
          </div>

    </section>
  );
}


export default Portfolio;