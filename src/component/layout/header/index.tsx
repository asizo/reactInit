import React from 'react';
import './header.scoped.scss'

export const Header = () => {

  let title = 'Header';

  return (
    <header>
      <div className="">
        <div className="">
          반가워!!
          <span>{title}</span>
        </div>
      </div>
      <div>돌아가기11</div>
    </header>
  );
};
