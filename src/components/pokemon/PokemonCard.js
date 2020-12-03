import React, { Component } from 'react';
import spinner from '../UI/spinner-gif.gif';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class PokemonCard extends Component {
  state = {
    name: "",
    number: "",
    loaded: false,
    pokemonSpecUrl: `https://pokeapi.co/api/v2/pokemon-species/${this.props.name}`
  }
  onImageLoaded = () => {
    this.setState({loaded: true})
  }
  
  async componentDidMount() {
    function search(nameKey, myArray){
      for (let i = 0; i < myArray.length; i++) {
          if (myArray[i].language.name === nameKey) {
              return myArray[i];
          }
      }
  }
    const resData = await axios.get(this.state.pokemonSpecUrl);
    const pokeNameDe = search("de", resData.data.names);
    this.setState({name: pokeNameDe.name});
  }
  
 
    render() {
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.props.number}.png?raw=true`
      
        return (
          <div className="col-md-3 col-sm-6 mb-5">
            <div className="card" style={{width: "8rem"}}>
              <Link to={`pokemon/${this.props.name}`}>
                <div className="card-header">{this.props.number}</div>
                  <img 
                    className="card-img-top" 
                    onLoad={this.onImageLoaded}
                    src={this.state.loaded ? imageUrl : spinner}
                    alt={this.props.name}/>
                  <div className="card-body">
                  <p style={{textAlign: "center"}} className="card-title">{this.state.name}</p>
                </div>
              </Link>
            </div>
          </div> 
        )
    }
}