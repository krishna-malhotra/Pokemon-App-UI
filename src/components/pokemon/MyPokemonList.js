import React , {Component} from 'react';
import axios from 'axios';
import MyPokemonCards from './MyPokemonCard';


class MyPokemonList extends Component {

    state = {
        pokemonIds: []
    }

    componentDidMount() {
       axios.get("http://localhost:2019/getAllPokemons", {headers : {Authorization: sessionStorage.getItem("basicAuth")}})
       .then(res => {
           this.setState({pokemonIds: res.data})
       })
       .catch(err => alert(err));
    }

    render() {
        this.state.pokemonIds.sort( function(a,b) {
            return a-b;
        })
        return (
            <div>
                <div className="container text-uppercase mx-auto text-center">
                <h1 style={{fontStyle:'italic', fontWeight:'bolder'}}>Saved Pokemons </h1>
                </div>
              <div className="row">
                 
                  {this.state.pokemonIds.map(poke => (
                      <MyPokemonCards 
                        key={poke}
                        pokemonId ={poke}
                      />
                  ))}
              </div>
            </div>
        )
    }
}


export default MyPokemonList;