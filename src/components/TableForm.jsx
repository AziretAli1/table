import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleDisabled, handleInc } from "./store/table-slice";
import { handleDec } from "./store/table-slice";
export const TableForm = () => {
  const { tables } = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const handleIncrement = (id) => {
    dispatch(handleInc(id));
  };
  const handleDecrement = (id) => {
    dispatch(handleDec(id));
  };

  const isDisabled = (count) => {
    dispatch(handleDisabled(count));
  };
  return (
    <StyledBlok>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Price</th>
          <th>Increment</th>
          <th>Decrement</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {tables.map((item) => (
          <tr key={item.id}>
            {/* <th>{}</th> */}
            <StyledaTd>{item.id}</StyledaTd>
            <StyledaTd>{item.description}</StyledaTd>
            <StyledaTd>{item.price}</StyledaTd>
            <StyledaTd>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </StyledaTd>
            <StyledaTd>
              <button
                onClick={() => handleDecrement(item.id)}
                disabled={isDisabled(item.count)}
              >
                -
              </button>
            </StyledaTd>
            <StyledaTd>{item.count}</StyledaTd>
          </tr>
        ))}
      </tbody>
    </StyledBlok>
  );
};
const StyledBlok = styled.table`
  border: 1px solid red;
`;
const StyledaTd = styled.td`
  border: 1px solid red;
`;
