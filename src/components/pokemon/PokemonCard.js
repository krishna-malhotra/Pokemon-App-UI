import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import spinner from '../layout/spinner.gif';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

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

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
  };

  componentDidMount() {
    const { name, url } = this.props;

    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            {this.state.imageLoading ? (
              <img
                src={spinner}
                style={{ width: '5em', height: '5em' }}
                className="card-img-top rounded mx-auto d-block mt-2"
              />
            ) : null}
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              src={this.state.imageUrl}
              onLoad={() => this.setState({ imageLoading: false })}
              style={
                 this.state.imageLoading
                  ? null
                  : { display: 'block' }
              }
            />
            <div className="card-body mx-auto">
              <h6 className="card-title text-capitalize">
                {this.state.name}
              </h6>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}
