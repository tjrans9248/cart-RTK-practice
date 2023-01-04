/* eslint-disable react-hooks/rules-of-hooks */
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { upNumber } from './store/userSlice.js';
import { increaseNumber, removeItem } from './store.js';
import Detail from './detail.js';

const cart = () => {
  let state = useSelector(state => state);
  let dispatch = useDispatch();

  return (
    <Table>
      <button
        onClick={() => {
          dispatch(upNumber(100));
        }}
      >
        버튼
      </button>
      {state.user.name} {state.user.age}의 장바구니
      {/* <button
        onClick={() => {
          dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
        }}
      >
        주문하기
      </button> */}
      <Detail />
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {state.stock.map((a, i) => (
          <tr key={i}>
            <td>{state.stock[i].id}</td>
            <td>{state.stock[i].name}</td>
            <td>{state.stock[i].count}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(increaseNumber(state.stock[i].id));
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  dispatch(removeItem());
                }}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default cart;
