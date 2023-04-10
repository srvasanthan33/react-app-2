import React, { Component } from "react";
import axios from "axios";
class RickMorty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chars: [],
            errorMessage: ""
        };
    }

    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            this.setState({
                chars: response.data.results
            });
            console.log(response.data.results);
        });
    }
    render() {
        const { chars, errorMessage } = this.state;
        return (
            <React.Fragment>
                Rick and Morty
                {chars.length
                    ? chars.map(chara => (
                          <div id={chara.id}>
                              <b>{chara.name}</b>
                              <img src={chara.image} width="100px" />
                          </div>
                      ))
                    : null}
            </React.Fragment>
        );
    }
}

export default RickMorty;
