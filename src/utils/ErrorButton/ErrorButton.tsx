import { Component, ReactNode } from 'react';
import Button from '../../components/UI/Button/Button';

interface ErrorButtonState {
  error: boolean;
}

class ErrorButton extends Component<object, ErrorButtonState> {
  constructor(props: object) {
    super(props);
    this.state = {
      error: false,
    };
  }

  throwError = () => {
    this.setState({
      error: true,
    });
  };

  componentDidUpdate(): void {
    if (this.state.error === true) {
      throw new Error('error');
    }
  }

  render(): ReactNode {
    return <Button onClick={this.throwError}>Error Button</Button>;
  }
}

export default ErrorButton;
