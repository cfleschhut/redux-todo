import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <span> &middot; </span>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <span> &middot; </span>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);

export default Footer;
