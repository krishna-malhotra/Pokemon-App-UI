import React , {Component} from 'react';
import PokemonList from '../pokemon/PokemonList';
import NavBar from './NavBar';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <div className="row">
                <div className="col">
                    <PokemonList/>
                </div>
            </div>
            </div>
        )
    }
}