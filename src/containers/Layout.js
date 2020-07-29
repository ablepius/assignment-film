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
    }

    componentDidMount() {
        this.props.onInitCharacters();
    }

    render() {
        return (
            <div>
                STAR WARS <br />
                <Select onChange={this.handleChange}
                    options={this.props.characters.map((character, index) =>
                        ({ label: character.name, value: index })
                    )} /><br />
                <ul>
                    {this.props.films.map(film =>
                        <li>{film.title}</li>
                    )}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        films: state.films
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCharacters: () => dispatch(actions.onInitCharacters()),
        fetchFilms: (filmUrl) => dispatch(actions.fetchFilms(filmUrl))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);