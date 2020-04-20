import React from 'react';
import { Link } from 'react-router-dom';

import './StoryItem.css';

export const StoryItem = ({ story }) => {
  return (
    <div class="story">
      <h2 className="text-black">
        <Link to={`/stories/${story._id}`}>{story.title}</Link>
      </h2>
      <p className="text-gray">{story.year}</p>
      <Link to={`/stories/${story._id}`}>
        <img
          src={story.photos[0]}
          className="storyPicture"
          alt="some picture"
        />
      </Link>
    </div>
  );
};

export default StoryItem;
