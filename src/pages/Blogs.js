import React from 'react'
import { useParams,useLocation } from 'react-router-dom';
export default function Blogs(props) {

  let {id} = useParams();
  console.log('id:',id)


  function useQuery() {
    const { search } = useLocation();
    console.log('query:',search)
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  console.log('search:',query.get('search'))

  return (
    <React.Fragment>
      <h1>Blogs</h1>
    </React.Fragment>
  );
}