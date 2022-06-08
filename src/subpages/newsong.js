
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
  const [data, setData] = useState({
    song: "",
    datereleased: "",
    artwork: "",
    nameartist:"",
    dob:"",
    bio:""
    
  });
  const [touched, setTouched] = useState({
    
    song: false,
    datee: false,
    artwork: false,
    nameartist:false,
    dob:false,
    bio:false
    
  });

 

  const handleChange = (event) => {
    const changedInput = event.target.name;
    setData({ ...data, [changedInput]: event.target.value });
  };
  const handleBlur = (event) => {
    const blurredInput = event.target.name;
    setTouched({ ...touched, [blurredInput]: true });
  };
 
  let songcheck = "";
  let datecheck = "";
  let artworkcheck = "";
  let nameartistcheck="";
  let dobcheck="";
  let biocheck="";
  
  if (!data.song) {
    songcheck = "*Name  is mandatory";
  } else if (data.song.length < 4) {
    songcheck = "*enter full song name";
  } else {
    songcheck = "";
  }
  if (!data.datee) {
    datecheck = "*Date is mandatory";
  } else {
    datecheck = "";
  }
  if (!data.artwork) {
    artworkcheck = "*file is required";
  } else {
    artworkcheck = "";
  }
  if (!data.nameartist) {
    nameartistcheck = "* Artist Name  is mandatory";
  } else if (data.nameartist.length < 4) {
    nameartistcheck = "*enter full song name";
  } else {
    nameartistcheck = "";
  }
  if (!data.dob) {
    dobcheck = "* Date of birth  is mandatory";
  
  } else {
    dobcheck = "";
  }
  if (!data.bio) {
    biocheck = "*Bio is mandatory";
  
  }
  

  
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
                        name="nameartist"
                      
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={data.nameartist}
                      />
                      {touched.nameartist && (
                        <div className="input errorMessage">{nameartistcheck}</div>
                      )}
                      
                     
                    </div>
                    <div className="input">
                      <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={data.dob}
                      />
                      {touched.dob && (
                        <div className="input errorMessage">{dobcheck}</div>
                      )}
                       
                      
                    
                    </div>
                    <div className="input">
                      <textarea
                        type="text"
                        name="bio"
                        value={data.bio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        
                      ></textarea>
                        {touched.bio && (
                        <div className="input errorMessage">{biocheck}</div>
                      )}
                       
                      
                     
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
            console.log(data);
            
          }}
        >
          <h1 style={{ marginLeft: "10px" }}>Adding a new Song</h1>
          <div className="input-design">
            <div>
              <div className="name">Song Name</div>
              <div className="name">Date Released</div>
              <div className="name">Artwork</div>
              <div className="name">Artists</div>
            </div>
            <div className="input-div">
              <div className="input">
                <input
                  type="text"
                  name="song"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={data.song}
                />
                {touched.song && (
                  <div className="input errorMessage">{songcheck}</div>
                )}
                  
              </div>
              <div className="input">
                <input
                  type="date"
                  name="datereleased"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={data.datereleased}
                />
                {touched.datereleased && (
                  <div className="input errorMessage">{datecheck}</div>
                )}
                 
              </div>
              <div className="input">
                <input
                  type="file"
                  name="artwork"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={data.artwork}
                />
                {touched.artwork && (
                  <div className="input errorMessage">{artworkcheck}</div>
                )}
                 
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