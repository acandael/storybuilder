import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStory } from '../../ApiService';

import './ShowStory.css';

export const ShowStory = () => {
  const [story, setStory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getStory(id).then((story) => setStory(story));
  }, []);

  return (
    <div>
      <h1>
        {story.title} ({story.year})
      </h1>
      <p>{story.description}</p>
      <div class="photo-grid">
        {story.photos &&
          story.photos.map((photo) => {
            return <img key={story._id} src={photo} />;
          })}
      </div>
      <button className="edit-story">Edit Story</button>
    </div>
  );
};

export default ShowStory;
