import React from 'react'
import './UpdateUser.css';

import { withRouter  } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'

class UpdateUser extends React.Component{

    state = {
        id: 0,
        name : '',
        email: '',
        username: '', 
        password: '',
    }

    componentDidMount(){
        const params = this.props.match.params;
        const id = params.id;
        this.findById(id);
    }

    update = () => {
        axios.put(`http://localhost:8080/api/user/${this.state.id}`, 
            {
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
        ).then( response => 
            {
                this.props.history.push('/viewUsers');
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

    findById = (userId) => {
        axios.get(`http://localhost:8080/api/user?id=${userId}`)
        .then( response => 
            {
                const user = response.data[0];
                const id = user.id;
                const username = user.username;
                const name = user.name;
                const email = user.email;

                this.setState({id, username, name, email});
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }

    render(){
        return (
            <div className='container'>
                <Card title="Atualização de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Id: *" htmlFor="inputId">
                                    <input type="text" 
                                        id="inputId" 
                                        disabled={true}
                                        className="form-control"
                                        value={this.state.id}
                                        name="name"
                                        onChange={e => this.setState({id: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Nome: *" htmlFor="inputname">
                                    <input type="text" 
                                        id="inputname" 
                                        className="form-control"
                                        value={this.state.name}
                                        name="name"
                                        onChange={e => this.setState({name: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Username: *" htmlFor="inputUsername">
                                    <input type="text" 
                                        id="inputUsername"
                                        className="form-control"
                                        value={this.state.username}
                                        name="username"
                                        onChange={e => this.setState({username: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" 
                                        id="inputEmail"
                                        className="form-control"
                                        value={this.state.email}
                                        name="email"
                                        onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputpassword">
                                    <input type="password" 
                                        id="inputpassword"
                                        className="form-control"
                                        value={this.state.password}
                                        name="password"
                                        onChange={e => this.setState({password: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.update} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Atualizar
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

export default withRouter(UpdateUser);