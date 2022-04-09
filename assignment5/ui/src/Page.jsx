import React from 'react';
import { NavLink } from 'react-router-dom';

import Contents from './Contents.jsx';

function NavBar() {
  const f = 0;
  console.log(f);
  return (
    <nav>
      <NavLink exact to="/">Home!</NavLink>
      {' | '}
      <NavLink to="/products">Product List!</NavLink>
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
}
