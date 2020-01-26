import React, { Component } from 'react';
import spinner from '../UI/spinner-gif.gif';
import { Link } from 'react-router-dom';


export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    number: "",
    loaded: false
  }
  onImageLoaded = () => {
    this.setState({loaded: true})
  }
 
    render() {
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.props.number}.png?raw=true`
      let imageSource 
      if(this.state.loaded === false) {
        imageSource = spinner
      } else {
        imageSource = imageUrl
      }
        return (
          <div className="col-md-4 col-sm-6 mb-5">
           <Link to={`pokemon/${this.props.name}`}>
              <div className="card" style={{width: "10rem"}}>
                <div className="card-header">{this.props.number}</div>
                  <img className="card-img-top" 
                    onLoad={this.onImageLoaded}
                    src={imageSource}
                    alt="Pokemon"/>
                  <div className="card-body">
                  <h5 className="card-title">{this.props.name}</h5>
                </div>
              </div>
            </Link>
          </div> 
        )
    }
}
