import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    if (event.target.value.match(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{7,}/)) {
        this.setState({message:'MOT DE PASSE TROP FORT'});
    } else if (event.target.value.match (/(?=.*?[A-Z])(?=.*?[a-z]).{7,}/)) {
        this.setState({message:'MOT DE PASSE MOYEN'});
    } else  {
        this.setState({message:'MOT DE PASSE FAIBLE'});
    }
};

  handleSubmit(event) {
      if (this.state.value.match(/(?=.*?[A-Z])(?=.*?[a-z]).{7,}/)) {
        alert('A password was submitted: ' + this.state.value);
      } else {
          event.preventDefault();
          alert('Votre Fuuuucking mot de passe est trop faible');
      }
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.message}</p>
      </form>
   );
  }
}

export default Password;