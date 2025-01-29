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
        <div>Name: {person.name}</div>
        <div>Birth year: {person.birth_year}</div>
        <p className={style['birth-desc']}>
          The birth year of the person, using the in-universe standard of BBY or
          ABY - Before the Battle of Yavin or After the Battle of Yavin. The
          Battle of Yavin is a battle that occurs at the end of Star Wars
          episode IV: A New Hope.
        </p>
        <div>Gender: {person.gender}</div>
        <div>Height: {person.height}</div>
        <div>Eye color: {person.eye_color}</div>
        <div>Hair color: {person.hair_color}</div>
      </div>
    );
  }
}

export default Card;
