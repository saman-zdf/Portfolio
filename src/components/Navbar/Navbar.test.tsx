import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Navbar must be visible', () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });
    const navbar = container.querySelector('.Navbar');
    expect(navbar).not.toBeNull();
  });

  it('Test link must be truthy', () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });
    const link = container.querySelector('.NavbarLink');
    expect(link).toBeTruthy();
  });

  it('Test link have the correct page name', () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });
    const linkText = container.querySelectorAll('.PageName');
    expect(linkText[0]).toHaveTextContent('// home');
    expect(linkText[1]).toHaveTextContent('// about me');
    expect(linkText[2]).toHaveTextContent('// projects');
    expect(linkText[3]).toHaveTextContent('// contacts');
  });
});
