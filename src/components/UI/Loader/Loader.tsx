import { Component, ReactNode } from 'react';
import style from './Loader.module.css';

class Loader extends Component {
  render(): ReactNode {
    return (
      <div className={style['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
