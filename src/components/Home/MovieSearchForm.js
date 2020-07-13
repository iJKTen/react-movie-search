import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: grid;

  @media(min-width:768px) {
    grid-template-columns: auto 1fr auto;
    grid-gap: 1rem;
    align-items: center;
  }
`

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
`

const Input = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  line-height: 2.8rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-bottom: 1rem;

  @media(min-width:768px) {
    margin-bottom: 0;
  }
`

const Button = styled.button`
  background-color: rgb(0,0,0,0.75);
  color: #FFF;
  padding: 1rem 2rem;
  border: 1px solid rgb(0,0,0,0.75);
  border-radius: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 250ms;

  :hover {
    background-color: rgb(0,0,0,0.85);
  }
`

const MovieSearchForm = (props) => {
  return (
    <Form
      onSubmit={(e) => props.onSubmit(e)}>
      <Label
        htmlFor='query'>
        Movie Search
        </Label>
      <Input
        type='text'
        name='query'
        id='query'
        placeholder='i.e. Jurassic Park'
        aria-label='Search for movies'
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      />
      <Button type='submit'>Search</Button>
    </Form>
  )
}

export default MovieSearchForm;
