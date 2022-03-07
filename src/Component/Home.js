import { Button } from "react-bootstrap"
import { Link } from "@mui/material"

const Home =()=>{
    return(
        <div className="home">
           <h1>WELCOME IN OUR WEBSITE</h1>
           
           <h1 className="green">WHAT IS AN API ?</h1>  
           <br/><br/>
           <p>
               The term “API” stands for Application Programming Interface. If you break that down word by word, you can get a pretty good grasp of what it means.
            An API is an interface that can be used to develop software that interacts with an existing application.
            In practice, an API is “a set of functions and procedures” that allows you to access and build upon the data and functionality of an existing application.
            </p>
            <Button variant="success">Get Started</Button>
        </div>
    )
}
export default Home
