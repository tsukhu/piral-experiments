import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const MyPageMenu: React.FC = () => (
  <NavLink to="/posts">My Posts</NavLink>
);