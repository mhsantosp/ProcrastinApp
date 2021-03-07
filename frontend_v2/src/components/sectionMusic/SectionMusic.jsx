import React from 'react';
import musicForConcentration from '../../images/musicImages/musicForConcentration.JPG'
import rockParaTrabajar from '../../images/musicImages/rockParaTrabajar.JPG'
import instrumentalStudy from '../../images/musicImages/instrumentalStudy.JPG'
import acousticsCovers from '../../images/musicImages/acousticCovers.JPG'
import latinasSiempre from '../../images/musicImages/latinasSiempre.JPG'
import chillAsFolk from '../../images/musicImages/chillAsFolk.JPG'
import noteOfCovers from '../../images/musicImages/noteOfCovers.JPG'
import itsAltGood from '../../images/musicImages/itsAltGood.JPG'
import afternoonAcoustic from '../../images/musicImages/afternoonAcoustic.JPG'
import concentracionPerfecta from '../../images/musicImages/concentracionPerfecta.JPG'
import peacefulPiano from '../../images/musicImages/peacefulPiano.JPG'
import todayTopHits from '../../images/musicImages/todayTopHits.JPG'


export default function SectionMusic(props) {
  return (
    <section className="container-fluid sectionMusic">
      <h1 className="mt-5 titleMusic">Música para ti</h1>
      <p className="mt-3 pMusic">Para algunas personas escuchar su música favorita o sus propias playlists es una buena opción pero para otras esto se puede convertir también en una distracción a la hora de realizar sus actividades, por eso una buena opción puede ser escuchar canciones de artistas que no conoces aún o canciones que no contengan letra y solo sean sonidos, esto para asi ayudarte a estar más enfocado en lo que estás haciendo.</p>
      <p className="mt-3 pMusic">La plataforma Spotify ofrece diferentes y variadas playlist diseñadas por sus creadores para determinadas situaciones y momentos, muchas de estas enfocadas en el momento de trabajo dependiendo de los gustos y preferencias de cada persona. Te compoartiremos algunas de ellas.</p>

      <div className="music col-12">
        <div className="playlists">
          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={musicForConcentration} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us?si=nh4V4MNQSYKcuYBILzjKug&utm_source=embed_v2&go=1&play=1&nd=1" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Music For Concentration</h2>
                <p className="playlistDescription">Esta playlist creada por Spotify para momentos en los que queramos concentrarnos en algo pero también estar acompañados de buena música.</p>
              </div>
            </div>
          </div>

          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={rockParaTrabajar} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/5EWhuzXkbTRDcv0ckRosuV?si=gI4aEuDUSz22yEfVxux8ow&utm_source=embed_v2&go=1&play=1&nd=1" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Rock Para Trabajar</h2>
                <p className="playlistDescription">Si eres amante del rock esta playlist con los mejores clasicos del genero es perfecta para acompañarte en tus horas de trabajo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="playlists">
          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={instrumentalStudy} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DX9sIqqvKsjG8?utm_source=embed_v2&go=1&play=1&nd=1" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Instrumental Study</h2>
                <p className="playlistDescription">Diferentes melodías y sonidos que te ayudarán en tus horas de estudio.</p>
              </div>
            </div>
          </div>

          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={acousticsCovers} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DWXmlLSKkfdAk" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Acoustics Covers</h2>
                <p className="playlistDescription">Una playlist con versiones acústicas de diferentes canciones por diferentes artistas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="playlists">
          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={latinasSiempre} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/1lvD3XTXCHx0VjXNbl49XF?si=uaP7scn1TDy517ms0U6qOw&utm_source=embed_v2&go=1&play=1&nd=1" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Latinas Siempre</h2>
                <p className="playlistDescription">Si a la hora de trabajar te gusta más la música movida y que te active, esta playlist con ritmos latinos como la salsa, la bachata, el reggaeton es perfecta para ti.</p>
              </div>
            </div>
          </div>

          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={chillAsFolk} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DWVl5gPCRkquk" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Chill As Folk</h2>
                <p className="playlistDescription">Lista de música alternativa para no distraerte y pasar un buen rato mientras cumples con tus obligaciones.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="playlists">
          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={noteOfCovers} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/7mZhW4DmFkfa6K0nIyCoan" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Take Note of These Covers</h2>
                <p className="playlistDescription">Algunos covers pueden ser aún mejor que la versión original y puedes descubrirlos mientras trabajas con esta playlist.</p>
              </div>
            </div>
          </div>

          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={itsAltGood} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DX2SK4ytI2KAZ" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">It's ALT Good!</h2>
                <p className="playlistDescription">Una playlist para tener buenas vibras y buenos ratos mientras trabajas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="playlists">
          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={afternoonAcoustic} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DX4E3UdUs7fUx" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Afternoon Acoustic</h2>
                <p className="playlistDescription">Canciones acústicas para escuchar en una tarde de trabajo.</p>
              </div>
            </div>
          </div>

          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={concentracionPerfecta} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DX0MqBmOXvo6b" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Concentración Perfecta</h2>
                <p className="playlistDescription">Otra playlist perfecta para momentos donde necesites estar concentrado.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="playlists">
          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={peacefulPiano} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Peaceful Piano</h2>
                <p className="playlistDescription">Si prefieres las melodías esta playlist con piezas de piano será perfecta para acompañarte en horas de trabajo.</p>
              </div>
            </div>
          </div>

          <div className="playlist">
            <div className="row col-sm-12">
              <div className="imgcontainer col-lg-5 col-sm-12">
                <img src={todayTopHits} className="playlistCover" alt="Portada de Playlist" />
                <div className="middle">
                  <a href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M" target="_blank" rel="noopener noreferrer">
                    <button className="btn-playlist">Ir a la playlist</button>
                  </a>

                </div>
              </div>

              <div className="infoPlaylist col-lg-7 col-sm-12">
                <h2 className="playlistName">Today's Top Hits</h2>
                <p className="playlistDescription">Puedes trabajar mientras te pones al día con los nuevos éxitos con esta playlist que se actualiza cada semana.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}   