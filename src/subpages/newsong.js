
import React, { useState, memo } from "react";
import Popup from "../components/Popup";
import Multiselect from "multiselect-react-dropdown";
import { Link } from "react-router-dom/";



const Newsong = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPop = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
 
  const [artist] = useState([
    "Shawn mendes",
    "Post Malone",
    "Alan Walker",
    "Duncan Laurence",
    "Lord Huron",
  ]);
  
    return (
      <>
      {isOpen && (
        
        <Popup
          content={ 
          <>
        <form
                class="popup-handle"
                onSubmit={(event) => {
                  event.preventDefault();
                  // console.log(data);
                }}
              >
                <h1 style={{ marginLeft: "10px" }}>Add Artist</h1>
                <div className="input-design">
                  <div>
                    <div className="name">Artist Name</div>
                    <div className="name">date of Birth</div>
                    <div className="name">Bio</div>
                  </div>
                  <div className="input-div">
                    <div className="input">
                      <input
                        name="artistname"
                      
                        type="text"
                    
                      />
                     
                    </div>
                    <div className="input">
                      <input
                        type="date"
                        name="date"
                       
                      />
                    
                    </div>
                    <div className="input">
                      <textarea
                        type="text"
                        name="bio"
                       
                      ></textarea>
                     
                    </div>
                    <div className="input">
                    <button type="submit">Done</button>
                      <button onClick={openPop}>Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
              </>
          }
          handleClose={openPop}
        />
      )}
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
                options={artist}
                showCheckbox
                
                 name="artists"
                
              />
               
  
                <button  onClick={openPop}  className="artist-button">
              
                  + Add Artist
                </button>
              </div>
              <div className="input-button">
                <button>Save</button>
                
                <div className="cancel-button">
                <Link to="/" id="cancel-color">
                  Cancel
                </Link> 
                 
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
  )
}

export default memo (Newsong)