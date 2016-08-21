/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

function Header() {
  return (
    <header>
      <nav className={s.container}>
        <a href="/compound">Compound Interest Calculator</a>
      </nav>
    </header>
  );
}

export default withStyles(s)(Header);
