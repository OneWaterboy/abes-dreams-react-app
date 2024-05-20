import React, { useState, useEffect } from 'react';
import DreamPopUp from './PopUps';

const InstagramFeed = () => {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);
  const token = process.env.REACT_APP_INSTA_TOKEN;

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${token}`)
      .then(response => response.json())
      .then(data => {
        setFeed(data.data);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      });
  }, [token]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="instagramFeed">
      {feed.map(post => (
        <div key={post.id} className="single-post">
            <img src={post.media_url} alt="one of my dreams"/>
            <DreamPopUp post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
