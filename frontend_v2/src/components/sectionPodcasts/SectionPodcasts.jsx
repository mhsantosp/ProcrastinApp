// import { render } from '@testing-library/react';
import React from 'react';
import entiendeTuMente from '../../images/podcastsImages/entiendeTuMente.JPG'
import seRegalanDudas from '../../images/podcastsImages/seRegalanDudas.JPG'
import tedEspañol from '../../images/podcastsImages/tedEspañol.JPG'
import tvPodcast from '../../images/podcastsImages/tvPodcast.JPG'
import favoriteMurder from '../../images/podcastsImages/favoriteMurder.JPG'
import historiaCosas from '../../images/podcastsImages/historiaCosas.JPG'
import meditacion from '../../images/podcastsImages/meditacion.JPG'
import dianaUribe from '../../images/podcastsImages/dianaUribe.JPG'
import cosasInternet from '../../images/podcastsImages/cosasInternet.JPG'
import metodoArjona from '../../images/podcastsImages/metodoArjona.JPG'

export default function SectionPodcasts() {
  return (
    <section className="container-fluid sectionPodcasts">
      <h1 className="mt-5 titlePodcasts">Podcasts Recomendados</h1>
      <p className="mt-3 pPodcasts"> Los podcasts son una muy buena opción si queremos enfocarnos en nuestro trabajo mientras también aprendemos cosas nuevas o pasamos un buen rato escuchando los relatos de diferentes creadores de contenido en este campo, puede ser una muy buena alternativa para evitar la procrastinación ya que podemos escucharlos mientras trabajamos, aquí te daremos algunas recomendaciones.</p>

      <div className="podcasts-group col-12">
        <div className="podcasts">
          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={entiendeTuMente} className="podcastCover" alt="Portada del Podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/0sGGLIDnnijRPLef7InllD" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Entiende Tu Mente</h2>
                <p className="podcastDescription">Podcast de 20 minutos cada episodio para aprender a entenderte mejor, y es un espacio con temas guiados por la psicología y el crecimiento personal.</p>
                <a href="https://entiendetumente.info/blog/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>

          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={seRegalanDudas} className="podcastCover" alt="Portada del podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/0KUjSzqMyxrTyXuw15j4e8" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Se Regalan Dudas</h2>
                <p className="podcastDescription">Su línea principal es hablar sobre temas que son un tabú pero sin prejuicios y con mucha picardía, invitándonos a cuestionar todas nuestras creencias.</p>
                <a href="https://www.seregalandudas.com/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="podcasts">
          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={tedEspañol} className="podcastCover" alt="Portada del Podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/524qliZmwyXLOClyk8gV9T" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Ted En Español</h2>
                <p className="podcastDescription">Es un espacio en donde se responden preguntas diversas, por ejemplo ¿cómo construye su identidad un inmigrante? ¿Nos reemplazará la inteligencia artificial en nuestros trabajos? Y más, a través de conferencistas destacados en cada aspecto.</p>
                <a href="https://www.ted.com/podcasts/ted-en-espanol" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>

          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={tvPodcast} className="podcastCover" alt="Portada del podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/689SmqMf26gpQvv9Jctkwk" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Ohhh TV Podcast</h2>
                <p className="podcastDescription">Si te gusta el cine y la televisión, es un podcast dedicado a la cultura audiovisual. Cada 15 días una nueva tertulia informativa e informal sobre televisión y cine.</p>
                <a href="https://ohhhtv.com/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="podcasts">
          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={favoriteMurder} className="podcastCover" alt="Portada del Podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/0U9S5J2ltMaKdxIfLuEjzE" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">My Favorite Murder</h2>
                <p className="podcastDescription">Si te gustan las historias y el true crime este podcast es perfecto para ti. Consiste principalmente en un diálogo entre las dos hots, una de ellas cuenta la historia y la otra reacciona a esta.</p>
                <a href="https://myfavoritemurder.com/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>

          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={historiaCosas} className="podcastCover" alt="Portada del podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/2kJJCdj7VKJV6AQNu03QT8" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">La Historia de las Cosas</h2>
                <p className="podcastDescription">Un podcast en español para los amantes de las curiosidades y aquellos que siempre tienen el "datazo" en las conversaciones con amigos.</p>
                <a href="https://piapodcast.com/podcast/la-historia-de-las-cosas/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="podcasts">
          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={meditacion} className="podcastCover" alt="Portada del Podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/4TmUpG1YdJMa4aAnp9s21F" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Meditada</h2>
                <p className="podcastDescription">Si queremos trabajar eficientemente y evitar la procrastinación lo ideal es también tener momentos de descanso por un rato, este podcast te ayuda a meditar, relajarte, calmarte, dormir... Y encontrar paz y tranquilidad durante, por lo menos, unos minutos al día.</p>
                <a href="https://meditada.com/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>

          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={dianaUribe} className="podcastCover" alt="Portada del podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/3xIalu2XhZ2EjSbOcTg0U8" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Diana Uribe FM</h2>
                <p className="podcastDescription">El podcast #1 en Colombia en el que Diana Uribe continúa la conversación que empezó en la radio hace 20 años donde se habla de cultura, de cine, de paz, de viajes y de música.</p>
                <a href="https://www.dianauribe.fm/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="podcasts">
          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={cosasInternet} className="podcastCover" alt="Portada del Podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/27Z92SlTT4YOgFCng14hfq" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">Cosas de Internet</h2>
                <p className="podcastDescription">Este es un podcast, en español, donde Laura y Santiago charlan para entender el modo en que la tecnología nos pone a vivir.</p>
                <a href="https://cosasdeinternet.fm/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>

          <div className="podcast">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={metodoArjona} className="podcastCover" alt="Portada del podcast" />
                <div className="middle">
                  <a href="https://open.spotify.com/show/2fUXa61zNLkOFcEg4v56eu" target="_blank" rel="noopener noreferrer">
                    <button className="btn-podcast">Ir al Podcast</button>
                  </a>

                </div>
              </div>

              <div className="infoPodcast col-lg-7 col-sm-12">
                <h2 className="podcastName">El Método Arjona Project</h2>
                <p className="podcastDescription">Podcast sobre diferentes temas añadiendole humor a cada uno de ellos, ideal para divertirte mientras trabajas.</p>
                <a href="https://www.instagram.com/elmetodoarjona/?hl=es" target="_blank" rel="noopener noreferrer">
                  <button className="btn-goToPage">Ir a Página Oficial</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}