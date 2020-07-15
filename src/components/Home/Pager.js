import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
    font-weight: ${props => props.currentPage ? 'bold' : 'normal'};
    text-align: center;
    box-shadow: none;
    border: 0;
    cursor: pointer;
    font-size: 16px;
    background-color: #FFF;
    color: ${props => props.currentPage ? 'darkgreen' : 'black'};
`

const Pager = (props) => {
  const pages = [];
  for (let index = 1; index <= props.totalPages; index++) {
    pages.push(
      <Button
        currentPage={props.currentPage === index}
        key={index}
        type='button'
        onClick={(e) => props.changePage(index)}>
        {index}
      </Button>
    )
  }
  return (
    <div>
      {pages}
    </div>
  )
}

export default Pager;
