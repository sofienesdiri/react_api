import axios from "axios"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Card } from "react-bootstrap"
import { CircularProgress } from "@mui/material"
const User=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div>
                        {
                loading ? 

                <CircularProgress />

                : 
                
                <Card style={{ width: '18rem' }} className='card'>
            
                    <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>{user.address.city}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                    <Card.Text>{user.website}</Card.Text>
                    <Card.Text>{user.company.name}</Card.Text>
                    
                    </Card.Body>
                </Card>
                
            }

            

        </div>
    )
}
export default User