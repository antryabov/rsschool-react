import { Component, ReactNode } from 'react';
import style from './Main.module.css';

interface MainProps {
  children: ReactNode;
}

class Main extends Component<MainProps> {
  render(): ReactNode {
    const { children } = this.props;
    return <main className={style.main}>{children}</main>;
  }
}

export default Main;
