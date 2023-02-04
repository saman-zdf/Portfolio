import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Must display my name in heading', () => {
    const { container } = render(<App />, { wrapper: MemoryRouter });
    const myName = container.querySelector('.AngledFullName');
    expect(myName).toHaveTextContent('Saman Fayazi');
  });
});
