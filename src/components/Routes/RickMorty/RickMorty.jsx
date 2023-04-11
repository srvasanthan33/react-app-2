import React, { Component } from "react";
import axios from "axios";

import "./RickMorty.css";
class RickMorty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chars: [],
            errorMessage: ""
        };
    }

    componentDidMount() {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(response => {
                this.setState({
                    chars: response.data.results
                });
            })
            .catch(error => {
                this.setState({ errorMessage: "API Call failed" });
            });
    }
    render() {
        const { chars, errorMessage } = this.state;
        return (
            <React.Fragment>
                Rick and Morty
                <div className="grid-container">
                    {chars.length
                        ? chars.map(chara => (
                              <div className="element" key={chara.id}>
                                  <img src={chara.image} />
                                  <b>{chara.name}</b>
                              </div>
                          ))
                        : null}
                    {errorMessage ? <div>errorMessage</div> : null}
                </div>
            </React.Fragment>
        );
    }
}

export default RickMorty;
