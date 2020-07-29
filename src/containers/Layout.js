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
        // this.setState({ selectedOption }, function(){
        //     this.props.fetchFilms(this.props.characters[selectedOption.value]["films"])
        // });
        this.setState({ selectedOption });
        this.props.fetchFilms(this.props.characters[selectedOption.value]["films"])

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
                {this.props.films.map(film => {
                    return <li>{film.title}</li>
                })}
                <br />

                {this.props.films.length > 0 ?
                    <div>Name/Year of last Movie<br />
                        {this.props.films.map((film, i) => {
                            const date = film.release_date.split('-');
                            return this.props.films[i + 1] ? null : <div>{film.title} - {date[0]}</div>
                        })}</div>
                    :
                    null}

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