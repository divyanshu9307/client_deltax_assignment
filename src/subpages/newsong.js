
import React, { useState, memo } from "react";
import Multiselect from "multiselect-react-dropdown";

const newsong = () => {
 
  
    return (
      <>
       
        <form
          className="form-design"
        
          onSubmit={(event) => {
            event.preventDefault();
            
          }}
        >
          <h1 style={{ marginLeft: "10px" }}>Adding a new Song</h1>
          <div className="input-design">
            <div>
              <div className="name">Song Name</div>
              <div className="name">Date Released</div>
              <div className="name">Artwork</div>
              <div className="name">Artist</div>
            </div>
            <div className="input-div">
              <div className="input">
                <input
                  type="text"
                  name="songname"
                  />
              </div>
              <div className="input">
                <input
                  type="date"
                  name="datereleased"
                 />
              </div>
              <div className="input">
                <input
                  type="file"
                  name="artwork"
                 />
              </div>
              <div className="input" id="add-artist">
                <Multiselect
                  isObject={false}
                  onRemove={(event)=>{console.log(event)}}
                  onSelect={(event)=>{console.log(event)}}
                 
                  showCheckbox
                 
                   name="artists"
                  
                />
               
  
                <button  className="artist-button">
              
                  + Add Artist
                </button>
              </div>
              <div className="input-button">
                <button>Save</button>
                <div className="cancel-button">
                 
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
  )
}

export default memo (newsong)