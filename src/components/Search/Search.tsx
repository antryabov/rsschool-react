import { ChangeEvent, Component, MouseEvent, ReactNode } from 'react';
import styles from './Search.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

interface SearchProps {
  fetchData: (value: string) => void;
}

export interface Films {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

interface SearchState {
  value: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('search') || '',
    };
  }

  handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.fetchData(this.state.value);
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value,
    });
    localStorage.setItem('search', event.target.value);
  };

  render(): ReactNode {
    const { value } = this.state;
    return (
      <div className={styles.search}>
        <form>
          <Input value={value} onChange={this.handleChange} />
          <Button onClick={this.handleClick}>Search</Button>
        </form>
      </div>
    );
  }
}

export default Search;
