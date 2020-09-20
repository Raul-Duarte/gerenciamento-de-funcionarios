import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'

import {
  Container,
  Table,
  Button,
} from 'react-bootstrap';

function ListaCargo() {
  const [cargo, setCargo] = useState([])

  useEffect(()=>{
    async function loadcargo(){
      const response = await api.get('cargo')

      const data = response.data
      // console.log(data)
      setCargo(data)
    }
    loadcargo()
  },[])

  const editcargo = (data) =>{
   console.log(data)
  }


  return (
    <Container className="containerListaCargo">
          <h1>Lista de cargos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Excluir</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>

        {cargo.map(cargo=>(
  
      
          <tr key={cargo.id}>
            <td>{cargo.id}</td>
            <td>{cargo.name}</td>
            <td>
            <Button variant="primary" type="submit" onChange={editcargo}>
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

export default ListaCargo;