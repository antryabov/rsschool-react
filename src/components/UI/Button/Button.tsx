import { Component, ReactNode, MouseEvent } from 'react';
import style from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

class Button extends Component<ButtonProps> {
  render(): ReactNode {
    const { children, onClick } = this.props;

    return (
      <button className={style.button} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
