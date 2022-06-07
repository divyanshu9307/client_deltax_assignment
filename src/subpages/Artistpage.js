import React from 'react'

const Artistpage = (props) => {
  return (
    <div id="artistset">
    <div id="a1">
        {props.name}  
    </div>
    <div id="a1">
        {props.dob}  
    </div>
    <div id="a1">
        {props.songslist}  
    </div>
</div>
  )
}

export default Artistpage