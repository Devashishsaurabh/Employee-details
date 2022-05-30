
import React,{useState,useEffect} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
  } from '@chakra-ui/react'
const TableItem = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/Data")
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
    },[])
    const onDelete=(id)=>{
      let newdata=data.filter(data=>data.id !== id)
      setData(newdata)
    }
  return (
  <div>
 <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Address</Th>
        <Th>Department</Th>
        <Th>Salary</Th>
        <Th>Marital</Th>
        <Th>Profile</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
        {data.map(data=>(
        <Tr key={data.id} onDelete={onDelete} data={data}>
        <Td>{data.name}</Td>
        <Td>{data.age}</Td>
        <Td>{data.address}</Td>
        <Td>{data.department}</Td>
        <Td>{"Rs "+data.salary}</Td>
        <Td>{data.marital}</Td>
        <Td>{data.photo}</Td>
        <Td><Button onClick={()=>onDelete(data.id)}>Delete</Button></Td>
        </Tr>
      ))}
    </Tbody>
   </Table>
  </TableContainer>
  </div>
  )
}

export default TableItem