const playlists = [
  { title: "Top Hits", desc: "Best global tracks" },
  { title: "Daily Mix", desc: "Made for you" },
  { title: "Chill Vibes", desc: "Relax and slow down" },
  { title: "Workout", desc: "Gym motivation" },
  { title: "Bollywood", desc: "Trending Hindi songs" },
  { title: "Lo-Fi Beats", desc: "Coding mood" },
]

function Home() {
  return (
    <main className="home">
      <div className="top-banner">
        <h1>Good Evening</h1>
      </div>

      <div className="playlist-grid">
        {playlists.map((item, index) => (
          <div
  className="playlist-card"
  key={index}
  onClick={() => window.location.href='/album'}
>
            <div className="playlist-img">
              <img
                src={`https://picsum.photos/300/300?random=${index}`}
                alt=""
              />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="play-btn">▶</button>
          </div>
        ))}
      </div>

      <h2 className="section-title">Recently Played</h2>

      <div className="recent-grid">
        {playlists.map((item, index) => (
          <div className="recent-card" key={index}>
            <img
              src={`https://picsum.photos/200/200?random=${index + 20}`}
              alt=""
            />

            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home