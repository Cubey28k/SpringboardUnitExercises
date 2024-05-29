import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import { describe, it, expect } from 'vitest';
import TEST_IMAGES from './__testCommon';
import '@testing-library/jest-dom';

describe('Carousel', () => {
  it('renders without crashing', () => {
    render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('hides the left arrow when at the first image', () => {
    const { queryByTestId } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
    expect(queryByTestId('left-arrow')).not.toBeInTheDocument();
  });

  it('hides the right arrow when at the last image', () => {
    const { container } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
    const { queryByTestId } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
    fireEvent.click(container.querySelector('.bi-arrow-right-circle'));
    fireEvent.click(container.querySelector('.bi-arrow-right-circle'));
    expect(queryByTestId('right-arrow')).not.toBeInTheDocument();
  });

  it('works when you click on the right arrow', () => {
    const { container } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);
    expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
    fireEvent.click(container.querySelector('.bi-arrow-right-circle'));
    expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();
    expect(container.querySelector('img[alt="testing image 2"]')).toBeInTheDocument();
  });
});
