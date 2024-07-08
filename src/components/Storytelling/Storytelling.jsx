import React from 'react';
import { Link } from 'react-router-dom';
import './Storytelling.css'; 

import image1 from '../../assets/story-listen.png';
import image2 from '../../assets/slide-viewer.png';

const Storytelling = () => {
    return (
        <div className="body">
            
                <div className="storycontainer">
                    <div className="storyitem">
                        <Link to="/storytelling/slider" className="storylink">
                            <img src={image2} alt="Story Listen" className="level-image" />
                            <span className="image-text">Story Viewer</span>
                        </Link>
                    </div>
                    <div className="storyitem">
                        <Link to="/storytelling/listening" className="storylink">
                            <img src={image1} alt="Slide Viewer" className="level-image" />
                            <span className="image-text">Slide Listening</span>
                        </Link>
                    </div>
                </div>
            </div>
        
    );
};

export default Storytelling;
