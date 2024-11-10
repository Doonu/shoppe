import { Button } from '@shared/ui';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Button', () => {
  test('Отображение компонента', () => {
    render(<Button />);
    expect(screen.getByTestId('ButtonTestId')).toBeInTheDocument();
  });
});
