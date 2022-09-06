import React, { useRef, useState } from 'react';
import Input from '../Input/Input';
import Post from '../Post/Post';
import './posts.css';

const Posts = () => {
  const staticPosts = [
    {
      title: 'Title 1',
      id: 'post-1',
    },
    {
      title: 'Title 2',
      id: 'post-2',
    },
  ];
  const localPosts = JSON.parse(localStorage.getItem('posts'));
  const [posts, setPosts] = useState(localPosts ? localPosts : staticPosts);
  const [title, setTitle] = useState('');
  const [showContent, setShowContent] = useState(true);
  const inputRef = useRef();

  const addPost = (e) => {
    e.preventDefault();
    setShowContent(!showContent);
    setPosts([
      ...posts,
      {
        title: inputRef.current.value,
        id: Date.now(),
      },
    ]);
    localStorage.setItem('posts', JSON.stringify(posts));
    setShowContent(!showContent);
  };

  const showInputValue = (value, text) => {
    console.log(value);
    console.log(text);
  };

  return (
    <>
      <div className='posts'>
        <div className='posts__wrapper'>
          {/* Form */}
          <form className='posts__form'>
            <Input
              type={'text'}
              ref={inputRef}
              // changeValue={(e) => {
              //   setTitle(e);

              //   if (showContent) {
              //     showInputValue(e, 'inline text');
              //   }
              // }}
            />
            {/* <input
              type='text'
              // value={title}
              ref={inputRef}
              placeholder='Введіть новий пост'
            /> */}
            <button type='submit' onClick={addPost}>
              <span>Add post</span>
            </button>
          </form>
          {/* List */}
          <ul className='posts__list'>
            {posts.map((post) => (
              <li className='posts__item' key={'Post-' + post.id}>
                <Post title={post.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
