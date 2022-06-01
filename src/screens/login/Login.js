import React from 'react';
import './Login.css';

import { withRouter  } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../../components/Toastr';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  login = () => {
        axios.post('http://localhost:8080/api/login', 
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then( response => 
            {
              localStorage.setItem('loggedUser', JSON.stringify(response.data));
              showSuccessMessage('Bem vindo!');
              this.props.history.push('/viewUsers');
            }
        ).catch( error => 
            {
                showErrorMessage('Login inválido!');
                console.log(error.response);
            }
        );
  }

  createUser = () => {
    this.props.history.push('/createUser');
  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' style={this.styles.colMd6} >
            <div className='bs-docs-section'>
              <Card title='Login'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='bs-component'>
                      <fieldset>
                        <FormGroup label='Usuário: *' htmlFor='inputUsername'>
                          <input type='text' className='form-control' id='inputUsername' 
                            area-aria-describedby='emailHelp' placeholder='Digite o usuário'
                            value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                        </FormGroup>
                        <FormGroup label='Senha: *' htmlFor='inputPassword'>
                          <input type='password' className='form-control' id='inputPassword' 
                            placeholder='Digite a Senha'
                            value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        </FormGroup>
                        <button className='btn btn-success' onClick={this.login}>Entrar</button>
                        <button className='btn btn-danger' onClick={this.createUser}>Cadastrar</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  styles = {
    colMd6 : {
      position: 'relative',
      left: '300px'
    }
  };

}

export default withRouter (Login);