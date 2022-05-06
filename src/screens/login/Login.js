import React from 'react';
import './Login.css';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

export default class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  login = () => {
    console.log('Email: ', this.state.email);
    console.log('Password: ', this.state.password);
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
                        <FormGroup label='Email: *'>
                          <input type='email' className='form-control' id='inputEmail' 
                            area-aria-describedby='emailHelp' placeholder='Digite o email'
                            value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                        </FormGroup>
                        <FormGroup label='Senha: *'>
                          <input type='password' className='form-control' id='inputPassword' 
                            placeholder='Digite a Senha'
                            value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        </FormGroup>
                        <button className='btn btn-success' onClick={this.login}>Entrar</button>
                        <button className='btn btn-danger'>Cadastrar</button>
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