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
          <div className="col-md-3 col-sm-6 mb-5">
           <Link to={`pokemon/${this.props.name}`}>
              <div className="card" style={{width: "8rem"}}>
                <div className="card-header">{this.props.number}</div>
                  <img 
                    className="card-img-top" 
                    onLoad={this.onImageLoaded}
                    src={imageSource}
                    alt={this.props.name}/>
                  <div className="card-body">
                  <p style={{textAlign: "center"}} className="card-title">{this.props.name}</p>
                </div>
              </div>
            </Link>
          </div> 
        )
    }
}
