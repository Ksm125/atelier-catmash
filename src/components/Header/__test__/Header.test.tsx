import { render, screen } from '../../../tests/test-utils';
import { Header } from '../index';

describe('Header', () => {
  it('should render the header component', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { name: /Catmash/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the links', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const pollLink = screen.getByRole('link', { name: /Poll/i });
    expect(homeLink).toBeInTheDocument();
    expect(pollLink).toBeInTheDocument();
  });
});