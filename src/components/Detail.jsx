import React,{useEffect,useState} from 'react'; 
import {useParams} from 'react-router-dom';
import axios from 'axios';




export default function Detail() {
    const {id}=useParams();
      const [datas,setDatas] =      useState([]);
      async function fetcher()
      {
          let result= await axios.get('http://localhost:3001/userRecipeClick/',{params:{ids:id}});
    
          setDatas(result.data);
      }
    useEffect(()=>{
      
        fetcher();
    },[]);

    return (
<div>

{datas.map((itemss,i) =>( 
    <div  key={i} style={{width:'30%',margin:'20px auto'}}>
       
        <img width="260" height="260" src ={process.env.PUBLIC_URL+"/"+itemss.image}/>
    <div><h1>Recipe Name:  &nbsp;{itemss.recipetitle}</h1></div>
      
           <div ><h1>Description: &nbsp;&nbsp;&nbsp;  &nbsp;{itemss.recipeContent}</h1></div>
         

           <div ><h1>Origin:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;{itemss.recipeOrigin}</h1></div>
           <div ><h1>Serves:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;{itemss.serves} person</h1></div>
           <div ><h1>Cooking Time: &nbsp;{itemss.cooktime} </h1></div>
           <div ><h1>Ingredients</h1></div>
           {(itemss.ingrid).map((items,is)=>(<h4><li >{items}</li></h4>))}
           <div ><h1>Steps</h1></div>
           {(itemss.steps).map((items,is)=>(<h4><li>{items}</li></h4>))}
  </div>))}
  </div>  
    )
 
}
