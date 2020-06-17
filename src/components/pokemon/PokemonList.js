import React, { Component } from 'react';

import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <div>
        <div className="container p-2 mb-2 mt-2 mx-auto">
          <h1 className="text-center text-uppercase" style={{fontWeight:'bolder', fontStyle:'italic', fontFamily:'monospace'}}>Pokemon Collection</h1>
        </div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
            <h1> Loading.. </h1>
        )}
      </div>
    );
  }
}
