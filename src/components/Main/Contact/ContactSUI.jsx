import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './ContactSUI.css';

class ContactSUI extends Component {
  constructor(props){
    super(props);
    this.state = {
      imie: "",
      nazwisko: "",
      email: "",
      submit: false,
    };
  }

    onNameChange = (event) => {
      const state = event.target;
      state[event.target.imie] = event.target.value;
      this.setState(state);
    }

    onSurnameChange = (e) => {
      const state = this.state
      state[e.target.nazwisko] = e.target.value;
      this.setState(state);
    }

    onEmailChange = (e) => {
      const state = this.state
      state[e.target.email] = e.target.value;
      this.setState(state);
    }

    onBtnChange = (e) => {
      e.preventDefault();
      const { imie, nazwisko, email, submit } = this.state;

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({imie, nazwisko, email, submit}),
        headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
            })
                .then(response => response.json())
                .then((json) => {
                    if(json.id) this.setState({submit: true});
                });
                console.log(this.state);
    };

    render() {
        const { imie, nazwisko, email, submit } = this.state;
        return (

              <Form >
                <Form.Field onChange={this.onNameChange} value={imie}>
                  <label>Imię:</label>
                  <input placeholder='First Name' />
                </Form.Field>

                <Form.Field onChange={this.onSurnameChange} value={nazwisko}>
                  <label>Nazwisko:</label>
                  <input placeholder='Last Name' />
                </Form.Field>

                <Form.Field onChange={this.onEmailChange} value={email}>
                  <label>Adres mailowy:</label>
                  <input placeholder='Last Name' />
                </Form.Field>

                <Form.Field>
                  <Checkbox label='Wyrażam zgodę na przetwarzanie danych osobowych' />
                </Form.Field>
                {submit ? (<p style={{color: 'blue'}}>Thanks,Your contact is confirmed!</p>) : null}
                <Button type='submit' onClick={this.onBtnChange}>Wyślij</Button>
            </Form>
        );
    }
}

export default ContactSUI;