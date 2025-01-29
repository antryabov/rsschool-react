import { Component, ReactNode } from 'react';
import './App.css';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import Loader from './components/UI/Loader/Loader';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface AppState {
  people: People[] | [];
  isLoading: boolean;
  error: null | string;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      people: [],
      isLoading: false,
      error: null,
    };
  }

  getListPeople = async (value: string) => {
    try {
      this.setState({
        isLoading: true,
        error: null,
      });
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${value.trim()}`
      );
      if (!response.ok) {
        throw new Error('query error');
      }
      this.setState({
        isLoading: false,
      });

      const { results } = await response.json();
      this.setState(() => ({
        people: [...results],
      }));
      if (!results.length && response.ok) {
        this.setState({
          error: 'This character has not been found',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        this.setState({
          error: error.message,
        });
        console.error(error.message);
      }
    }
  };

  componentDidMount(): void {
    this.getListPeople('');
  }

  render(): ReactNode {
    const { people, isLoading, error } = this.state;
    return (
      <>
        <Header>
          <h1 className="title">
            Search for characters from the Star Wars universe
          </h1>
          <Search fetchData={this.getListPeople} />
        </Header>
        <Main>
          {error && <h2>{error}</h2>}
          {isLoading && <Loader />}
          <CardList people={people} />
        </Main>
      </>
    );
  }
}

export default App;
