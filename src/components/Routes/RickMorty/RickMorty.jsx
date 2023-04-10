import React, { Component } from "react";
import axios from "axios";
class RickMorty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errorMessage: ""
        };
    }

    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            this.setState({
                posts: response.data
            });
            console.log(response.data.results);
        });
    }
    render() {
        const { posts, errorMessage } = this.state;
        return (
            <React.Fragment>
                Rick and Morty
                {posts.length}
                {2 + 2}
            </React.Fragment>
        );
    }
}

export default RickMorty;
