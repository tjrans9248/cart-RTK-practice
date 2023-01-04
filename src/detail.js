/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { addItem } from './store.js';
import { useDispatch } from 'react-redux';

import React from 'react';

const detail = () => {
  let dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
        }}
      >
        주문하기
      </button>
    </div>
  );
};

export default detail;
