import { useEffect, useState } from "react"
import axios from "axios"
import { CircularProgress, Paper } from '@mui/material';
import {ListGroup} from "react-bootstrap"
import { Link } from "react-router-dom";

const ListUsers=()=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setUsers(res.data))
        .then(()=>setLoading(true)).catch((err)=>console.log(err))
    },[])
    return(
        <div>
            {
                loading ?  users.map(el=> <ListGroup>
                    <ListGroup.Item className="ListUser"><Link to ={`/users/${el.id}`}>{el.name}</Link> </ListGroup.Item>
                    </ListGroup>): <CircularProgress />
            }
        </div>
    )
}
export default ListUsers