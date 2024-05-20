import React, { useState } from 'react';

const DreamPopUp = ({post}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openPopup = () => {
      setIsOpen(true);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };
  
    return (
      <div>
        <button className="open-pop-up" onClick={openPopup}>Dream With Me</button>
  
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
                <img src={post.media_url} alt="dream image"/>
                <p className="post-desc">{post.caption}</p>
              <button onClick={closePopup}>X</button>
            </div>
            <div className="popup-overlay" onClick={closePopup}></div>
          </div>
        )}
      </div>
    );
  };
  
  export default DreamPopUp;  