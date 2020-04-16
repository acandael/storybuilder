import React, { useRef, useState } from 'react';
import Story from './components/Story/Story';
import Editable from './components/Editable/Editable';

export const StoryPage = () => {
  const inputRef = useRef();
  const textareaRef = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <form>
        <Editable text={title} placeholder="Write a task name" type="input">
          <input
            type="text"
            name="title"
            placeholder="Write a task name"
            childRef={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Editable>
        <Editable
          text={description}
          placeholder="Description for the task"
          type="textarea"
        >
          <textarea
            name="description"
            placeholder="Description for the task"
            childRef={textareaRef}
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Editable>
      </form>
      <Story />
    </div>
  );
};