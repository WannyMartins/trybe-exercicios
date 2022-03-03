import React from 'react';

class FormDataDisplay extends React.Component {
    render(){
        const {
            estadoAtual: {
                nome, email, cpf,
                endereco, cidade, estado,
                tipo, resumo, cargo, descricaoCargo,
            }
        } = this.props;
        return(
            <div>
                <h2>Dados Enviados</h2>
                <h3>Pessoal</h3>
                    <div> Nome: { nome }</div>
                    <div> Email: { email }</div>
                    <div> CPF: { cpf }</div>
                    <div> Endereço: { endereco }</div>
                    <div> Cidade: { cidade }</div>
                    <div> Estado: { estado }</div>
                    <div> Tipo de residência: { tipo }</div>
                <h3>Profissional</h3>
                    <div> Resumo do Currículo: { resumo }</div>
                    <div> Cargo: { cargo }</div>
                    <div> Descrição do Cargo: { descricaoCargo }</div>
            </div>
        )
    }
}

export default FormDataDisplay