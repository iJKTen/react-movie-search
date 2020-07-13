import React from 'react';

const Pager = (props) => {
  const pages = [];
  for (let index = 1; index <= props.totalPages; index++) {
    pages.push(
      <button
        key={index}
        type='button'
        onClick={(e) => props.changePage(index)}>
        {index}
      </button>
    )
  }
  return (
    <div>
      {pages}
    </div>
  )
}

export default Pager;
