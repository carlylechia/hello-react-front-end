import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../Redux/store';

function Messages() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  const data = useSelector((state) => state).text;

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default Messages;
