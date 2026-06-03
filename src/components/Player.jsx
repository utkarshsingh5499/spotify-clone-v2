import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp
} from "react-icons/fa"

import { useEffect, useState } from "react"

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  playNextSong,
  playPreviousSong
}) {
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    setProgress(0)
    setCurrentTime(0)
  }, [currentSong])

  useEffect(() => {
    let timer

    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 100) {
            playNextSong()
            return 0
          }

          return prev + 1
        })

        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }

          return prev + 1
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isPlaying, playNextSong])

  function formatTime(value) {
    const minutes = Math.floor(value / 60)
    const seconds = value % 60

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  }

  function handleProgressChange(e) {
    const value = Number(e.target.value)
    setProgress(value)
    setCurrentTime(value)
  }

  return (
    <div className="player">
      <div className="song-info">
        <img src={currentSong.image} alt={currentSong.title} />

        <div>
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-icons">
          <FaStepBackward
            className="control-click"
            onClick={playPreviousSong}
          />

          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <FaStepForward
            className="control-click"
            onClick={playNextSong}
          />
        </div>

        <div className="progress-area">
          <span>{formatTime(currentTime)}</span>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
          />

          <span>{currentSong.duration}</span>
        </div>
      </div>

      <div className="volume">
        <FaVolumeUp />
        <input type="range" min="0" max="100" />
      </div>
    </div>
  )
}

export default Player