
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import pokeBall from "../UI/pokeball.png";

export default class PokemonDetails extends Component {
    state = {
        index: "", 
        description: "",
        descriptionURL: `https://pokeapi.co/api/v2/pokemon-species/${this.props.match.params.name}`,
        stats: [],
        loaded: false,
        name: "",
        height: ""
    }
     
    async componentDidMount() {
        function search(nameKey, myArray){
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i].language.name === nameKey) {
                    return myArray[i];
                }
            }
        }
        document.getElementsByClassName("content_container")[0].style.height = "100vh";
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`);
        const resDes = await axios.get(this.state.descriptionURL);
        const pokeNameDe = search("de", resDes.data.names);
        const reverseStat = res.data.stats.reverse();
        const descriptionObjects = resDes.data.flavor_text_entries;
        const resultObject = search("de", descriptionObjects);
        const resultDescription = resultObject.flavor_text;
        
        const newStatDe = []
        for (let i = 0; i < reverseStat.length; i++) {
            let statUrl = await axios.get(reverseStat[i].stat.url)
            let statDe = statUrl.data.names.find(value => value.language.name === "de");
            newStatDe.push(statDe.name)
            reverseStat[i].stat.name = newStatDe[i]
        }

        this.setState({
            index: res.data.id,
            stats: reverseStat,
            description: resultDescription,
            loaded: true,
            name: pokeNameDe.name,
            height: res.data.height
        })
    }
    onImageLoaded = () => {
        this.setState({loaded: true});
      } 
    render() {
        
        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.state.index}.png`
        return (
            <div className="card liem">
                
                <div className="pokeDetails_container">
                    <div className="image_name">
                        <h3>{this.state.name}</h3>
                        <img 
                        width={this.state.height < 10 ? "200px" : "300px"}
                        src={this.state.loaded ? imageUrl : pokeBall}
                        onLoad={this.onImageLoaded}
                        alt={this.props.match.params.name}
                        className="center"/>
                    </div>
                
                
                <table border="1">
                   <tbody>
                    {this.state.stats.map(stats => (
                    <tr key={stats.stat.name}>
                        <td>{stats.stat.name}</td>
                        <td>
                            <div className="progress">
                                <div 
                                    className="progress-bar" 
                                    role="progressbar" 
                                    style={{width: Math.round(stats.base_stat/154 * 100).toString() + "%"}}>
                                    {stats.base_stat}
                                </div>
                            </div>
                        </td>
                    </tr>
                    )
                    )}
                   </tbody> 
                </table>
                </div>
                <p className="description">{this.state.description}</p>
            </div>
        )
    }
    
}