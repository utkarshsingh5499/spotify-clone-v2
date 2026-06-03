const genres = [
  "Pop",
  "Hip-Hop",
  "Bollywood",
  "Lo-Fi",
  "Workout",
  "Chill",
  "Rock",
  "Jazz",
]
const colors = [
  "#ff4b4b",
  "#1db954",
  "#9b5cff",
  "#ff9800",
  "#00bcd4",
  "#e91e63",
  "#795548",
  "#3f51b5",
]
function Search() {
  return (
    <main className="home">

      <h1>Search</h1>

      <input
        className="search-input"
        type="text"
        placeholder="What do you want to listen to?"
      />

      <div className="genre-grid">

        {genres.map((genre, index) => (

          <div
           className="genre-card"
          key={index}
          style={{
          background: colors[index]
         }}>
            <h3>{genre}</h3>
          </div>

        ))}

      </div>

    </main>
  )
}

export default Search