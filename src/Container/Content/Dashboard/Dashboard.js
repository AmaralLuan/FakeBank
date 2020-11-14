import React from 'react';
import Card from '../../../Components/Card/Card';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <h4 className="Dashboard__title">Dashboard</h4>

            <div className="Dashboard__warn">
                <span>Por favor <a href="/">clique aqui</a> para entrar no canal do Telegram sobre informações do fundo.</span>
            </div>

            <div className="Dashboard__cards">
                <Card title="Saldo disponível" value="0.00"/>
                <Card title="Investimento ativo" value="0.00"/>
            </div>

        </div>
    )
}

export default Dashboard;