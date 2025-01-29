import { ChangeEvent, Component, ReactNode } from 'react';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<InputProps> {
  render(): ReactNode {
    const { value, onChange } = this.props;

    return <input value={value} onChange={onChange} />;
  }
}

export default Input;
