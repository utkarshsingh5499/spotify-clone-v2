import { NavLink } from "react-router-dom"

import { FaHome, FaSearch } from "react-icons/fa"
import { MdLibraryMusic } from "react-icons/md"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">

        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>

        <NavLink to="/search">
          <FaSearch />
          Search
        </NavLink>

        <p>
          <MdLibraryMusic />
          Your Library
        </p>

      </div>

      <div className="playlist-menu">
        <h4>Your Playlists</h4>
        <p>Liked Songs</p>
        <p>Top Hits 2025</p>
        <p>Chill Mix</p>
        <p>Workout Beats</p>
      </div>
    </div>
  )
}

export default Sidebar