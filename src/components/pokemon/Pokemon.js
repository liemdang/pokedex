
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import spinner from '../UI/spinner-gif.gif';

export default class Pokemon extends Component {
    state = {
        index: "", 
        description: "",
        descriptionURL: `https://pokeapi.co/api/v2/pokemon-species/${this.props.match.params.name}`,
        stats: [],
        loaded: false
    }
     
    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`);
        
        function search(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].language.name === nameKey) {
                    return myArray[i];
                }
            }
        }
        
        const resDes = await axios.get(this.state.descriptionURL);
        const reverseStat = res.data.stats.reverse()
        const descriptionObjects = resDes.data.flavor_text_entries
        const resultObject = search("en", descriptionObjects)
        const resultDescription = resultObject.flavor_text
        
        this.setState({
            index: res.data.game_indices[0].game_index,
            stats: reverseStat,
            description: resultDescription,
            loaded: true
        })
    }
    onImageLoaded = () => {
        this.setState({loaded: true})
      } 
    render() {
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.state.index}.png?raw=true`
        let imageSource 
      if(this.state.loaded === false) {
        imageSource = spinner
      } else {
        imageSource = imageUrl
      }
        return (
            <div className="card">
                <h1>Pokemon</h1>
                <h3>{this.props.match.params.name}</h3>
                <div>
                <img 
                    src={imageSource}
                    onLoad={this.onImageLoaded}
                    alt="Pokemon"
                    className="center"/>
                <p>{this.state.description}</p>
                </div>
               
                <table border="1">
                   <tbody>
                {this.state.stats.map(stats => (
                   <tr key={stats.stat.name}>
                        <td>{stats.stat.name}</td>
                        <td>{stats.base_stat}</td>
                    </tr>
                )
                )}
                   </tbody> 
                </table>
            </div>
        )
    }
    
}