import { songs } from "../data/songs"

function Album({ setCurrentSong, currentSong }) {
  return (
    <main className="home">
      <div className="album-header">
        <img src={currentSong.image} alt={currentSong.title} />

        <div>
          <p className="album-label">Playlist</p>
          <h1>Top Hits</h1>
          <p className="album-desc">
            Songs selected from your personalized music collection.
          </p>
        </div>
      </div>

      <div className="album-list">
        {songs.map((song) => (
          <div
            className={
              currentSong.id === song.id
                ? "song-row active-song"
                : "song-row"
            }
            key={song.id}
            onClick={() => setCurrentSong(song)}
          >
            <span>
              {currentSong.id === song.id ? "▶" : song.id}
            </span>

            <div className="song-title-cell">
              <img src={song.image} alt={song.title} />

              <div>
                <strong>{song.title}</strong>
                <p>{song.artist}</p>
              </div>
            </div>

            <span>{song.album}</span>

            <span>{song.duration}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Album