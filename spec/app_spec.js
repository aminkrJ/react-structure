import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';

import Test from '../src/components/test';

describe('Test', () => {
  it('renders without problems', () => {
    TestUtils.renderIntoDocument(<Test />);
  });
});
