import React from 'react'
import { useParams } from 'react-router-dom';
export default function Blogs(props) {

  let {id} = useParams();
  console.log(id)

  return (
    <React.Fragment>
      <h1>Blogs</h1>
    </React.Fragment>
  );
}