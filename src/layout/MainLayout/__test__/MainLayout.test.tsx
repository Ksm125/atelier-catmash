import { Route, Routes } from 'react-router-dom';
import { render, screen } from '../../../tests/test-utils';
import { MainLayout } from '../index';

vitest.mock('../../../components/Header', () => ({
  Header: () => <header>Header</header>,
}));

describe('MainLayout', () => {
  const testId = 'main-layout';

  it('should render the main layout component', () => {
    render(<MainLayout data-testid={testId} />);
    const mainLayoutElement = screen.getByTestId(testId);
    expect(mainLayoutElement).toBeInTheDocument();
  });

  it('should render the header', () => {
    render(<MainLayout />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('should render the content', () => {
    const App = () => (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div data-testid="main-layout-content" />} />
          <Route path="other" element={<div data-testid="other-content" />} />
        </Route>
      </Routes>
    );

    render(<App />);
    const contentElement = screen.getByTestId('main-layout-content');
    expect(contentElement).toBeInTheDocument();
  });
});
