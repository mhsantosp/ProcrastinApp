import React from 'react'
import Music from "../sectionMusic/SectionMusic";
import Podcasts from "../sectionPodcasts/SectionPodcasts"
import YoutubeVideos from "../sectionYoutube/SectionYoutube";

export default function Multimedia(props) {
  return (
    <section className="container-fluid sectionMultimedia">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-link active" id="spotifyPlaylists-tab" data-toggle="tab" href="#spotifyPlaylists" role="tab" aria-controls="spotifyPlaylists" aria-selected="true">Spotify Playlists</a>
          <a className="nav-link" id="podcasts-tab" data-toggle="tab" href="#podcasts" role="tab" aria-controls="podcasts" aria-selected="false">Podcasts</a>
          <a className="nav-link" id="youtubePlaylists-tab" data-toggle="tab" href="#youtubePlaylists" role="tab" aria-controls="youtubePlaylists" aria-selected="false">Youtube Playlists</a>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="spotifyPlaylists" role="tabpanel" aria-labelledby="spotifyPlaylists-tab">
          <Music />
        </div>
        <div className="tab-pane fade" id="podcasts" role="tabpanel" aria-labelledby="podcasts-tab">
          <Podcasts />
        </div>
        <div className="tab-pane fade" id="youtubePlaylists" role="tabpanel" aria-labelledby="youtubePlaylists-tab">
          <YoutubeVideos />
        </div>
      </div>
    </section>
  )
}