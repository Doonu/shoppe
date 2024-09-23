import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '@shared/ui';

describe('Button', () => {
  test('Отображение компонента', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
