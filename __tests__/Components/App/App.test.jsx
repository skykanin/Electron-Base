import React from 'react'
import {render} from 'react-testing-library'
import App from '../../../src/components/App'


test('Check if App DOM is rendered properly', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });

