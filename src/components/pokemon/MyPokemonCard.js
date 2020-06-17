import React , {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Card = styled.div`
box-shadow: 0 1px 5px 2px grey;
transition: all 0.2s ease;
&:hover {
box-shadow: 0 7px 15px 2px grey;
cursor: pointer;
}
user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

 
  &:hover {
    text-decoration: none;
  }
`;


export default class MyPokemonCards extends Component {
    state = {
        pokemonId:'',
        name:'',
        imageUrl: '',
        imageLoading: true,
    }

     componentDidMount() {
        const {pokemonId} = this.props    
        this.setState({pokemonId});


        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

         axios.get(pokemonUrl)
         .then(res => {
             this.setState({name: res.data.name , imageUrl: res.data.sprites.front_default});
         })

        // this.setState({name});

    }



    render() {
        return (
           <div className="col-sm-6 col-md-4">
                <StyledLink to={`pokemon/${this.state.pokemonId}`}>
                <Card className="card mt-2">
                    <div className="card-header">{this.state.pokemonId}</div>
                    <div className="card-body mx-auto">
                    <img src={this.state.imageUrl} className="rounded" style={{width:'5em' , height:'5em'}} />
                    <div className="card-title text-capitalize mt-2 mx-auto" style={{fontWeight:'bolder'}}>{this.state.name}</div>
                    </div>
                </Card>
                </StyledLink>
           </div>
        )
    }
}