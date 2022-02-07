import React from 'react'
import {Link,Outlet} from 'react-router-dom'


export default function Layout(props) {
  return (
    <React.Fragment>
      <div>Layout Header</div>
      <nav>
        <ul style={{display:'flex','gap':'1rem',listStyle:'none'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs/1">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
      <div>Layout Footer</div>
      <div>Layout Other</div>
    </React.Fragment>
  );
}