import { ChangeEvent, Component, InputHTMLAttributes, ReactNode } from 'react';
import style from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<InputProps> {
  render(): ReactNode {
    const { value, onChange, placeholder } = this.props;

    return (
      <input
        placeholder={placeholder}
        className={style.input}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default Input;
