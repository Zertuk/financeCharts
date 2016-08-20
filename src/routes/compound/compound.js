/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import ChartContainer from '../../components/ChartContainer'

const title = 'Contact Us';

function Compound(props, context) {
  context.setTitle("Compound Interest Calculator");
  return (
  	<ChartContainer />
  );
}

Compound.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Compound;
