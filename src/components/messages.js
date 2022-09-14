import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../Redux/store';

function Messages() {
  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  const dispatch = useDispatch();
  const data = useSelector(state => state).text

  return (
    <div className='App'>
      <h1>{data}</h1>
    </div>
  )
}

export default Messages