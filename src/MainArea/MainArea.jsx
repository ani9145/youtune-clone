import React from "react";
import './MainArea.css'
import {MdHome,MdVideoLibrary,MdHistory,MdWatchLater,MdPlaylistPlay,MdRssFeed} from 'react-icons/md'
import {FaGripfire,FaFutbol,FaMusic,FaNewspaper} from "react-icons/fa"
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from "react-player";
function MainArea(){
    return(
        <div className="MainArea">
            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red" fontSize="3rem" />
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="red" fontSize="3rem" />
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="red" fontSize="3rem" />
                        <div>Subscriptions</div>
                    </div>
                </div>
                <div className="Library">
                    <div className="Quick_Icon">
                        <MdHome color="red" fontSize="3rem" />
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="red" fontSize="3rem" />
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="red" fontSize="3rem" />
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="red" fontSize="3rem" />
                        <div>Wacth Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="red" fontSize="3rem" />
                        <div>YouTube Clone</div>
                    </div>
                </div>
                <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <GiGamepad color="red" fontSize="3rem" />
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="red" fontSize="3rem" />
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="red" fontSize="3rem" />
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="red" fontSize="3rem" />
                        <div>Misucs</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="red" fontSize="3rem" />
                        <div>News</div>
                    </div>
                </div>
            </div>
            <div className="Main">
                <div className="Videos">
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Iron Man (2008) Trailer #1</div>
                        </div>
                        <br></br>
                        <div className="view">
                            1,275,385 viewsApr 23, 2008
                        </div>
                    </div>

                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=wKtcmiifycU"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Iron Man 2 Trailer #2 (2010)</div>
                        </div>
                        <br></br>
                        <div className="view">
                            2,482,744 viewsApr 13, 2013
                        </div>
                    </div>
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=YLorLVa95Xo"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Marvel's Iron Man 3 Domestic Trailer 2</div>
                        </div>
                        <br></br>
                        <div className="view">
                            4,516,760 viewsMar 6, 2013

                        </div>
                    </div>
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=JerVrbLldXw"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Captain America: The First Avenger - Trailer</div>
                        </div>
                        <br></br>
                        <div className="view">
                            11,488,545 viewsMar 22, 2011

                        </div>
                    </div>

                </div>
                <div className="Videos">
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Iron Man (2008) Trailer #1</div>
                        </div>
                        <br></br>
                        <div className="view">
                            1,275,385 viewsApr 23, 2008
                        </div>
                    </div>

                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=wKtcmiifycU"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Iron Man 2 Trailer #2 (2010)</div>
                        </div>
                        <br></br>
                        <div className="view">
                            2,482,744 viewsApr 13, 2013
                        </div>
                    </div>
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=YLorLVa95Xo"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Marvel's Iron Man 3 Domestic Trailer 2</div>
                        </div>
                        <br></br>
                        <div className="view">
                            4,516,760 viewsMar 6, 2013

                        </div>
                    </div>
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=JerVrbLldXw"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Captain America: The First Avenger - Trailer</div>
                        </div>
                        <br></br>
                        <div className="view">
                            11,488,545 viewsMar 22, 2011
                        </div>
                    </div>
                </div>
                <div className="Videos">
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Iron Man (2008) Trailer #1</div>
                        </div>
                        <br></br>
                        <div className="view">
                            1,275,385 viewsApr 23, 2008
                        </div>
                    </div>

                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=wKtcmiifycU"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Iron Man 2 Trailer #2 (2010)</div>
                        </div>
                        <br></br>
                        <div className="view">
                            2,482,744 viewsApr 13, 2013
                        </div>
                    </div>
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=YLorLVa95Xo"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Marvel's Iron Man 3 Domestic Trailer 2</div>
                        </div>
                        <br></br>
                        <div className="view">
                            4,516,760 viewsMar 6, 2013

                        </div>
                    </div>
                    <div className="video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=JerVrbLldXw"
                            height="170px"
                            width="280px"
                            controls />
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            <div>Captain America: The First Avenger - Trailer</div>
                        </div>
                        <br></br>
                        <div className="view">
                            11,488,545 viewsMar 22, 2011
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea