import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StoryItem from '../../components/StoryItem/StoryItem';
import { getStories } from '../../ApiService';

import './StoryList.css';

export const StoryList = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    getStories().then((stories) => {
      setStories(stories);
    });
  }, []);
  return (
    <div className="story-list">
      <Link to="/storypage">
        <button className="add-story">Add Story</button>
      </Link>
      <h1>My Stories</h1>
      <div className="stories">
        {stories &&
          stories.map((story) => {
            return <StoryItem key={story._id} story={story} />;
          })}
      </div>
    </div>
  );
};

export default StoryList;
