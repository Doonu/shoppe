import React from 'react';

import { Button } from '@shared/ui';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('Отображение компонента', () => {
    render(<Button />);
    expect(screen.getByTestId('ButtonTestId')).toBeInTheDocument();
  });
});
