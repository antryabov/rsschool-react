import { Component, ReactNode } from 'react';
import { People } from '../../App';
import style from './Card.module.css';

interface CardProps {
  person: People;
}

class Card extends Component<CardProps> {
  render(): ReactNode {
    const { person } = this.props;

    return (
      <div className={style['people-item']}>
        <h2 className={style['card-title']}>Name: {person.name}</h2>
        <div>Birth year: {person.birth_year}</div>
        <div>Gender: {person.gender}</div>
        <div>Height: {person.height}</div>
        <div>Eye color: {person.eye_color}</div>
        <div>Hair color: {person.hair_color}</div>
      </div>
    );
  }
}

export default Card;
