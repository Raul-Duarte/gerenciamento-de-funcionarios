import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'

import {
  Container,
  Table,
  Button,
} from 'react-bootstrap';

function Lista() {
  const [funcionario, setFuncionario] = useState([])

  useEffect(()=>{
    async function loadFuncionario(){
      const response = await api.get('funcionario')

      const data = response.data
      // console.log(data)
      setFuncionario(data)
    }
    loadFuncionario()
  },[])

  const editFuncionario = (data) =>{
   console.log(data)
  }


  return (
    <Container className="containerLista">
          <h1>Lista de Funcionarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data de Nascimento</th>
            <th>Salário</th>
            <th>Cargo</th>
            <th>Excluir</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>

        {funcionario.map(funcionario=>(
  
      
          <tr key={funcionario.id}>
            <td>{funcionario.id}</td>
            <td>{funcionario.name}</td>
            <td>{funcionario.surname}</td>
            <td>{funcionario.date}</td>
            <td>{funcionario.salary}</td>
            <td>{funcionario.cargo_id}</td>
            <td>
            <Button variant="primary" type="submit" onChange={editFuncionario}>
                    Submit
                 </Button>
            </td>
            <td>
            <Button variant="danger" type="submit">
                    Excluir
                 </Button>
            </td>
          </tr>  

          ))}

        </tbody>
      </Table>
    </Container>
  )
}

export default Lista;