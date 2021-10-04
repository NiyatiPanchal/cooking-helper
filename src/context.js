import React, { useState, useRef } from 'react'
import axios from 'axios';

const AppContext = React.createContext();

const ContextAPI = ({children})=>{
    const [result,setResult]=useState([]);
    const [totCount,setTotCount] = useState(0);
    const fav_btn = useRef();

    const [bagItems,setbagItems] = useState([])

    async function getRecipes(url){
        var res=  await axios.get(url);
        setResult(res.data.hits);
    }

    const counterFunc = (name,fav_btn)=>{
        result.map((recipes)=>{
            if(recipes.recipe.label === name){
                if(recipes.recipe.yield > 0){
                    setTotCount(totCount+1);
                    bagItems.push(recipes);
                    setbagItems(bagItems);

                    recipes.recipe.yield = -1;
                    //fav_btn.current.style.color = 'red';
                }
                else{
                    //fav_btn.current.style.color = 'black';
                    recipes.recipe.yield = 1;

                    setTotCount(totCount-1);
                    if(totCount <=0){
                        setTotCount(0);
                    }
                    setbagItems(bagItems.filter((items)=>{
                        if(items!==recipes){
                            return items;
                        }
                    }));
                }
            }
            return recipes;
        })
    }

    return (
        <AppContext.Provider
            value={{counterFunc, totCount, getRecipes, result, fav_btn, bagItems, setbagItems}}
            >
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextAPI};