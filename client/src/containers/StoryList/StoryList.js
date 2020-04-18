import React from 'react';
import { Link } from 'react-router-dom';
import StoryItem from '../../components/StoryItem/StoryItem';

import './StoryList.css';

export const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      <Link to="/storypage">
        <button className="addStory">Add Story</button>
      </Link>
      <h1>My Stories</h1>
      {stories &&
        stories.map((story) => {
          return <StoryItem key={story.id} story={story} />;
        })}
    </div>
  );
};

export default StoryList;
