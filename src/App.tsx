import { Component, ReactNode } from 'react';
import './App.css';
import Search from './components/Search/Search';

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
      const response = await fetch(`https://swapi.dev/api/people/`);
      if (!response.ok) {
        throw new Error('query error');
      }
      const { results } = await response.json();
      this.setState(() => ({
        people: [
          ...results.filter((person: People) => person.name.includes(value)),
        ],
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
          <Search fetchData={this.getListPeople} />
        </header>
        <main>
          {people.length &&
            people.map((person) => (
              <div key={person.name} style={{ border: '1px solid black' }}>
                <div>{person.name}</div>
                <div>{person.birth_year}</div>
              </div>
            ))}
        </main>
      </>
    );
  }
}

export default App;
