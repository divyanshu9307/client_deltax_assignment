import React from 'react'
import { Link } from 'react-router-dom/'

const Topsongs = () => {
  return (
    <div>
      <div id="songs">
        <div id="s1">Top 10 Songs</div>
        <Link id="s3" to="/AddNewSong">
          <div id="s2">+Add Song</div>
        </Link>
      </div>
      <div></div>
    </div>
  )
}

export default Topsongs