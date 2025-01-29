import { ChangeEvent, Component, MouseEvent, ReactNode } from 'react';
import styles from './Search.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

type SearchProps = object;

interface SearchState {
  value: string;
  data: [];
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      data: [],
      value: localStorage.getItem('search') || '',
    };
  }

  handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value,
    });
    localStorage.setItem('search', event.target.value);
  };

  componentDidMount(): void {}

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
