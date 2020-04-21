import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStory } from '../../ApiService';

import './ShowStory.css';

export const ShowStory = () => {
  const [story, setStory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getStory(id).then((story) => setStory(story));
  }, [id]);

  return (
    <div>
      <h1>
        {story.title} ({story.year})
      </h1>
      <p>{story.description}</p>
      <div className="photo-grid">
        {story.photos &&
          story.photos.map((photo, index) => {
            return <img key={index} src={photo} alt="" />;
          })}
      </div>
    </div>
  );
};

export default ShowStory;
