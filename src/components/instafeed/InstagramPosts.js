import React, { useState, useEffect } from 'react';

const InstagramFeed = () => {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);
  const token = process.env.INSTA_TOKEN;

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${INSTA_TOKEN}`)
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
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            <img src={post.media_url} alt={post.caption} />
          </a>
          <p className="post-desc">{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
