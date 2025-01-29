import { Component, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

class Button extends Component<ButtonProps> {
  render(): ReactNode {
    const { children, onClick } = this.props;

    return <button onClick={onClick}>{children}</button>;
  }
}

export default Button;
