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
        <button onClick={openPopup}>Dream It</button>
  
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Popup Content</h2>
                <p className="post-desc">{post.caption}</p>
              <button onClick={closePopup}>Close</button>
            </div>
            <div className="popup-overlay" onClick={closePopup}></div>
          </div>
        )}
      </div>
    );
  };
  
  export default DreamPopUp;  