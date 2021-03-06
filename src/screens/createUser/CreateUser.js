import React from 'react'
import './CreateUser.css';

import { withRouter  } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../../components/Toastr';

class CreateUser extends React.Component{

    state = {
        name : '',
        email: '', 
        password: '',
        passwordRepeat : '',
    }

    create = () => {
        const errors = this.validate();

        if(errors.length > 0){
            errors.forEach( (message, index) => {
                showErrorMessage(message);
            } );
            return false;
        }

        axios.post('http://localhost:8080/api/user', 
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        ).then( response => 
            {
                showSuccessMessage("Usuário criado com sucesso!");
                this.props.history.push("/login");
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }

    cancel = () => {
        this.props.history.push('/');
    }

    validate = () => {
        const errors = [];

        if(!this.state.name){
            errors.push('Campo Nome é obrigatório!');
        }

        if(!this.state.email){
            errors.push('Campo Email é obrigatório!');
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            errors.push('Informe um email válido!');
        }

        if(!this.state.password){
            errors.push('Campo Senha é obrigatório!');
        }else if(this.state.password !== this.state.passwordRepeat){
            errors.push('As senhas não batem!');
        }

        return errors;
    }

    render(){
        return (
            <div className='container'>
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputname">
                                    <input type="text" 
                                        id="inputname" 
                                        className="form-control"
                                        name="name"
                                        onChange={e => this.setState({name: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" 
                                        id="inputEmail"
                                        className="form-control"
                                        name="email"
                                        onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputpassword">
                                    <input type="password" 
                                        id="inputpassword"
                                        className="form-control"
                                        name="password"
                                        onChange={e => this.setState({password: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlFor="inpuPasswordRepeat">
                                    <input type="password" 
                                        id="inpuPasswordRepeat"
                                        className="form-control"
                                        name="password"
                                        onChange={e => this.setState({passwordRepeat: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.create} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
                                </button>
                                <button onClick={this.cancel} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(CreateUser);