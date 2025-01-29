import { Component, ReactNode } from 'react';
import './App.css';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';

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
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      people: [],
    };
  }

  getListPeople = async (value: string) => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${value}`
      );
      if (!response.ok) {
        throw new Error('query error');
      }
      const { results } = await response.json();
      this.setState(() => ({
        people: [...results],
      }));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  render(): ReactNode {
    const { people } = this.state;
    console.log(people);
    return (
      <>
        <header className="header">
          <h1 className="title">
            Search for characters from the Star Wars universe
          </h1>
          <Search fetchData={this.getListPeople} />
        </header>
        <main className="main">
          <CardList people={people} />
        </main>
      </>
    );
  }
}

export default App;
