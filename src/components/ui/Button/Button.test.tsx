import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index'; // hoặc './Button' tùy vào cấu trúc dự án

describe('Button Component', () => {
  // Test rendering cơ bản
  it('renders correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  // Test các variants khác nhau
  it('renders with correct variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-primary');

    rerender(<Button variant="secondary">Secondary Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-secondary');

    rerender(<Button variant="destructive">Destructive Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-destructive');
  });

  // Test disabled state
  it('handles disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
  });

  // Test click event
  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test không gọi onClick khi disabled
  it('does not call onClick when disabled', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test size variants
  it('renders with correct size classes', () => {
    const { rerender } = render(<Button size="default">Default Size</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(<Button size="sm">Small Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-9');

    rerender(<Button size="lg">Large Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-11');
  });

  // Test asChild prop
  it('renders as a different element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="https://example.com">Link Button</a>
      </Button>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Link Button')).toBeInTheDocument();
  });

  // Test loading state nếu có
  it('shows loading state when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);

    expect(screen.getByRole('button')).toHaveClass('cursor-not-allowed');
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
