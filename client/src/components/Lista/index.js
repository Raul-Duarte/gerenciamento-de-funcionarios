import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'

import {
  Container,
  Table
} from 'react-bootstrap';

function Lista() {
  const [funcionario, setFuncionario] = useState([])

  useEffect(()=>{
    async function loadFuncionario(){
      const response = await api.get('funcionario')

      const data = response.data
      setFuncionario(data)
    }
    loadFuncionario()
  },[])



  return (
    <Container className="containerLista">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>

        {funcionario.map(funcionario=>(
  
      
          <tr>
            <td>{funcionario.id}</td>
            <td>{funcionario.name}</td>
            <td>{funcionario.email}</td>
            <td>Cargo tal</td>
            <td>Cargo tal</td>
            <td>Cargo tal</td>
          </tr>  

          ))}

        </tbody>
      </Table>
    </Container>
  )
}

export default Lista;