import { Component, ReactNode } from 'react';
import { People } from '../../App';
import style from './CardList.module.css';
import Card from '../Card/Card';

interface CardListProps {
  people: People[];
}

class CardList extends Component<CardListProps> {
  render(): ReactNode {
    const { people } = this.props;

    return (
      <div className={style['people-list']}>
        {people.length > 0 &&
          people.map((person) => <Card key={person.name} person={person} />)}
      </div>
    );
  }
}

export default CardList;
