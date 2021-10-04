import React,{useState,useEffect} from 'react';
import axios from "axios";
import Header from './Header'
import { Link  } from 'react-router-dom';

function UserRecipePage() {
const [res,setRes]=useState([]);
   useEffect(()=>{
       async function fetches()
       {
          let   result=await axios.get('http://localhost:3001/userRecipe');
         
         let    y=result.data;
          setRes(y);
       }
       fetches();
   },[]);
    return (
        <div>
            <Header/>
            {res.map((item,i)=>(
                 <div key={i} className="cards">
            {/* <img width="260" height="260" src={itemss.image} alt="..." /> */}

      <img width="260" height="260" src={process.env.PUBLIC_URL+"/"+item.image} alt="" />
      <h2 style={{textAlign: 'center',fontWeight: '1100',color: 'brown'}}>{item.recipetitle}</h2>
      <Link to={`users/${item._id}`}>  <button style={{cursor:'pointer',display:'block',margin:'4px auto',fontWeight: 'bolder',fontSize: '20px', padding:'1px'}} ><i class="fas fa-eye"></i> View </button></Link>
    </div> ))}
                    
            
            
         
        </div>
    )
}

export default UserRecipePage
