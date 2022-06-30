import React from 'react';
import './ViewUsers.css';

import { withRouter } from 'react-router-dom';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import UsersTable from '../../components/UsersTable';

import UserApiService from '../../services/UserApiService';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../../components/Toastr';

class ViewUsers extends React.Component {

    state = {
        name: '',
        email: '',
        id: '',
        users : []
    }

    constructor(){
        super();
        this.service = new UserApiService();
    }

    componentDidMount(){
        this.find();
    }

    find = () => {
        var params = '?';

        if(this.state.id != ''){
            if(params != '?'){
                params = `${params}&`;
            }

            params = `${params}id=${this.state.id}`;
        }

        if(this.state.name != ''){
            if(params != '?'){
                params = `${params}&`;
            }

            params = `${params}name=${this.state.name}`;
        }

        if(this.state.email != ''){
            if(params != '?'){
                params = `${params}&`;
            }

            params = `${params}email=${this.state.email}`;
        }

        this.service.find(params)
        .then( response => 
            {
                const users = response.data;
                this.setState({users});
                console.log(users);
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }

    delete = (userId) => {
        this.service.delete(userId
        ).then( response => 
            {
                showSuccessMessage(`Usuário ${userId} deletado com sucesso`);
                this.find();
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }

    edit = (userId) => {
        this.props.history.push(`/updateUser/${userId}`);
    }

    render(){
        return (
            <div className='container'>
                <Card title="Consulta Usuários">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bs-component">
                                <FormGroup htmlFor="inputId" label="Id:">
                                    <input type="text" 
                                        className="form-control" 
                                        id="inputId" 
                                        value={this.state.id}
                                        onChange={e => this.setState({id: e.target.value})}
                                        placeholder="Digite o Id" />
                                </FormGroup>

                                <FormGroup htmlFor="inputName" label="Name:">
                                    <input type="text" 
                                        className="form-control" 
                                        id="inputName" 
                                        value={this.state.name}
                                        onChange={e => this.setState({name: e.target.value})}
                                        placeholder="Digite o Nome" />
                                </FormGroup>

                                <FormGroup htmlFor="inputEmail" label="Email:">
                                    <input type="text" 
                                        className="form-control" 
                                        id="inputEmail" 
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.target.value})}
                                        placeholder="Digite o Email" />
                                </FormGroup>

                                <button onClick={this.find} 
                                        type="button" 
                                        className="btn btn-success">
                                        <i className="pi pi-search"></i> Buscar
                                </button>

                            </div>
                            
                        </div>
                    </div>   
                    <br/ >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bs-component">
                                <UsersTable users={this.state.users} 
                                    delete={this.delete}
                                    edit={this.edit} />
                            </div>
                        </div>  
                    </div>          
                </Card>
            </div>

        )
    }
}

export default withRouter(ViewUsers);