import React from "react";
import './MainArea.css'
import {MdHome,MdVideoLibrary,MdHistory,MdWatchLater,MdPlaylistPlay} from 'react-icons/md'
import {FaGripfire} from "react-icons/fa"
import {BsFillCollectionPlayFill} from 'react-icons/bs'
function MainArea(){
    return(
        <div className="MainArea">
          <div className="Sidebar">
              <div className="Home">
                  <div className="Quick_Icon">
                      <MdHome color="red" fontSize="3rem"/>
                      <div>Home</div>
                  </div>
                  <div className="Quick_Icon">
                      <FaGripfire color="red" fontSize="3rem"/>
                      <div>Trending</div>
                  </div>
                  <div className="Quick_Icon">
                      <BsFillCollectionPlayFill color="red" fontSize="3rem"/>
                      <div>Subscriptions</div>
                  </div>
                </div>
                <div className="Library">
                  <div className="Quick_Icon">
                      <MdHome color="red" fontSize="3rem"/>
                      <div>Home</div>
                  </div>
                  <div className="Quick_Icon">
                      <MdVideoLibrary color="red" fontSize="3rem"/>
                      <div>Video Library</div>
                  </div>
                  <div className="Quick_Icon">
                      <MdHistory color="red" fontSize="3rem"/>
                      <div>History</div>
                  </div>
                  <div className="Quick_Icon">
                      <MdWatchLater color="red" fontSize="3rem"/>
                      <div>Wacth Later</div>
                  </div>
                  <div className="Quick_Icon">
                      <MdPlaylistPlay color="red" fontSize="3rem"/>
                      <div>YouTube Clone</div>
                  </div>
                  </div>
                  <div className="More_From_Youtube">
                  <div className="Quick_Icon">
                      <mdWatchLater color="red" fontSize="3rem"/>
                      <div>Wacth Later</div>
                  </div>
                  <div className="Quick_Icon">
                      <mdWatchLater color="red" fontSize="3rem"/>
                      <div>Wacth Later</div>
                  </div>
                </div>
          </div>
          <div className="Main">
              Main</div>
        </div>
    )
}

export default MainArea