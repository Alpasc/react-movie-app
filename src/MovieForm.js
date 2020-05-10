import React, { Component } from 'react';
import axios from 'axios';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url= 'https://post-a-form.herokuapp.com/api/movies/';
    axios.post(url, this.state)
    .then(res => res.data)
    .then(res => {
      alert(`Ton film a été ajouté avec la référence n° ${res.id}`)
    })
    .catch(e => {
      console.log(e);
      alert(`Erreur lors de l'ajout de to film : ${e.message}`);
    });
  }

  render() {
    return (
      <div className="MovieForm">
        <h1>Saisie de ton film préféré</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Dis-nous tout !</legend>
            <div className='form-data'>
              <label htmlFor='title'>Titre</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className='form-data'>
              <label htmlFor='poster'>Affiche</label>
              <input 
                type='url'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
            <div className='form-data'>
              <label htmlFor='comment'>Commentaire</label>
              <input 
                type='text'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Envoyer'/>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default MovieForm;