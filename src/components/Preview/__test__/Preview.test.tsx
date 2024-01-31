import { render, screen } from '@testing-library/react';
import { Preview } from '../index';
import styles from '../preview.module.scss';

describe('Preview', () => {
  const url = 'https://cdn2.thecatapi.com/images/MTYwODk3Mg.jpg';
  const id = 'MTYwODk3Mg';
  const votes = 0;

  it('should render image with correct src', () => {
    render(<Preview url={url} id={id} votes={votes} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', url);
    expect(image).toHaveAttribute('alt', id);
  });

  it('should render id and vote', () => {
    render(<Preview url={url} id={id} votes={votes} />);

    expect(screen.getByText(`Id: ${id}`)).toBeInTheDocument();
    expect(screen.getByText(`Vote: ${votes}`)).toBeInTheDocument();
  });

  it('should render with correct className for container', () => {
    const testId = 'previewid';
    render(<Preview data-testid={testId} url={url} id={id} votes={votes} />);

    expect(screen.getByTestId(testId)).toHaveClass(styles.preview);
  });

  it('should render with correct className for image', () => {
    render(<Preview url={url} id={id} votes={votes} />);

    expect(screen.getByRole('img')).toHaveClass(styles.preview__image);
  });
});