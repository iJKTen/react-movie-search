import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
    font-weight: ${props => props.currentPage ? 'bold' : 'normal'}
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
