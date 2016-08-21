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

function Footer() {
  return (
    <footer>
      <div className={s.container}>
        <span className={s.spacer}>·</span>
        <a className={s.link} href="http://zertukis.com">zertukis</a>
        <span className={s.spacer}>·</span>
        <a className={s.link} href="http://github.com/zertuk">github</a>
        <span className={s.spacer}>·</span>
      </div>
    </footer>
  );
}

export default withStyles(s)(Footer);
