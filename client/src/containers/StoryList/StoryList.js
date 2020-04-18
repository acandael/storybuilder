import React from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';

import './StoryList.css';

export const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      <h1>My Stories</h1>
      {stories &&
        stories.map((story) => {
          return <StoryItem story={story} />;
        })}
    </div>
  );
};

export default StoryList;
