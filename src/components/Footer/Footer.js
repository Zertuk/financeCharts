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
import s from './Footer.css';
import Link from '../Link';

function Footer() {
  return (
    <footer>
      <div className={s.container}>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="http://zertukis.com">zertukis</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="http://zertukis.com">github</Link>
        <span className={s.spacer}>·</span>
      </div>
    </footer>
  );
}

export default withStyles(s)(Footer);
