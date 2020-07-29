import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Select from 'react-select';

class Layout extends Component {

    state = {
        selectedOption: {},
        filmList: []
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, function(){
            this.props.fetchFilms(this.props.characters[selectedOption.value]["films"])
        });
        
        // this.props.characters[selectedOption.value]["films"].map(film =>
        //     (this.props.fetchFilms(film))
        // )

        // this.props.characters[selectedOption.value]["films"].map(film =>{
        //     fetch(film
        //         ,
        //         {
        //             method: "GET",
        //         }
        //     )
        //         .then(res => res.json())
        //         .then(response => {
        //             this.state.filmList.push(response.title)
        //         })
        //         .catch(error => console.log(error));
        //     }
        // )

        // console.log(this.state.filmList)
    }

    componentDidMount() {
        this.props.onInitCharacters();
    }

    render() {
        return (
            <div>
                {this.props.ings}<br />
                STAR WARS <br />
                <button onClick={this.props.onValueAdd}>Click me</button><br />
                <Select onChange={this.handleChange}
                    options={this.props.characters.map((character, index) =>
                        ({ label: character.name, value: index })
                    )} /><br />
                <ul>
                    {this.props.films.map(film =>
                        <li>{film}</li>
                    )}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ings: state.initialValue,
        characters: state.characters,
        films: state.films
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onValueAdd: () => dispatch(actions.add(1)),
        onInitCharacters: () => dispatch(actions.onInitCharacters()),
        fetchFilms: (filmUrl) => dispatch(actions.fetchFilms(filmUrl))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);