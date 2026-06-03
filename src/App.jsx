import './App.css'

import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

import Home from './pages/Home'
import Search from './pages/Search'
import Album from './pages/Album'

import { songs } from './data/songs'

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  function playNextSong() {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    )

    const nextIndex =
      currentIndex === songs.length - 1
        ? 0
        : currentIndex + 1

    setCurrentSong(songs[nextIndex])
  }

  function playPreviousSong() {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    )

    const previousIndex =
      currentIndex === 0
        ? songs.length - 1
        : currentIndex - 1

    setCurrentSong(songs[previousIndex])
  }

  return (
    <BrowserRouter>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />

          <Route
            path="/album"
            element={
              <Album
                setCurrentSong={setCurrentSong}
                currentSong={currentSong}
              />
            }
          />
        </Routes>
      </div>

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        playNextSong={playNextSong}
        playPreviousSong={playPreviousSong}
      />
    </BrowserRouter>
  )
}

export default App
