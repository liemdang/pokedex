import React, { Component } from 'react';
import spinner from '../UI/spinner-gif.gif'

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
      const numbero = this.props.number
      const extractedNumber = numbero[1].replace(/\//g, "")
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${extractedNumber}.png?raw=true`
      let imageSource 
      if(this.state.loaded === false) {
        imageSource = spinner
      } else {
        imageSource = imageUrl
      }
        return (
            <div className="col-md-3 col-sm-6 mb-5">
            
<div className="card" style={{width: "8rem"}}>
            <div className="card-header">{extractedNumber}</div>
            <img className="card-img-top" 
              onLoad={this.onImageLoaded}
            src={imageSource}
                alt="Pokemon"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
            
          </div> 
        )
    }
}
