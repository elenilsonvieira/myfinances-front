import React from 'react'
import './Home.css';

import Card from '../../components/Card';

export default class Home extends React.Component{

    render(){
        return (
            <div className='container'>
                <Card title="DAC - Sitema de Finanças">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <label>Projeto criado para a disciplina de DAC - IFPB Campus Monteiro</label>
                                <br />
                                <label>Prof. Elenilson Vieira - elenilson.vieira@ifpb.edu.br</label>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}