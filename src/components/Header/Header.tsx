import { Component, ReactNode } from 'react';
import style from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
}

class Header extends Component<HeaderProps> {
  render(): ReactNode {
    const { children } = this.props;
    return <header className={style.header}>{children}</header>;
  }
}

export default Header;
