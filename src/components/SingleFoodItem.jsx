import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Piechart from './Piechart'
import  '../css/single.css';
const api_ID='cdb2a86f';
const api_KEY='18c123593182cf4fbc5230aa15e2c375'
var url;

function SingleFoodItem() {
    const {name} = useParams();
    console.log(name);
    const [foodItem,setFoodItem] = React.useState({});
    url = `https://api.edamam.com/search?q=${name}&app_id=${api_ID}&app_key=${api_KEY}`

    const fetchItems = async() => {
        try {
            const responses = await fetch(url);
            const res = await responses.json();
            setFoodItem(res.hits[0].recipe);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(()=>{
        fetchItems();
    }, []);

    const nutrientsData = {
      fats: foodItem.digest && foodItem.digest[0].total,
      carbs: foodItem.digest && foodItem.digest[1].total,
      protein: foodItem.digest && foodItem.digest[2].total
    }
    return (
        <section className="single-item-section">
            <Link to='/search' className="back-to-search">Back to search</Link>

            <div className="single-item-container">

              <div className="pichart-img-container">
                <img src={foodItem.image} alt="food img"/>
                <Piechart nutrientsData={nutrientsData}/>
                <h2 className="chart-label">Nutrition Pie-chart</h2>
              </div>

              <div className="single-item-info">
                <div className="line"></div>
                {/* <div className="stand"></div> */}
                <a className="new-website" href={foodItem.url}>Detailed Recipe</a>
                <div className="inside-single-item-info">
                  <p><span className="single-item-data">name : </span>{foodItem.label}</p>
                  {foodItem.cuisineType && <p><span className="single-item-data">cuisine type : </span>{foodItem.cuisineType[0]}</p>}
                  {foodItem.mealType && <p><span className="single-item-data">meal type : </span>{foodItem.mealType[0]}</p>}
                  {foodItem.dishType && <p><span className="single-item-data">dish type : </span>{foodItem.dishType[0]}</p>}
                  {foodItem.dietLabels ? <p><span className="single-item-data">diet label : </span>{
                    foodItem.dietLabels.map((item,index)=>{
                      return <span key={index}>{item}</span>
                    })
                  }</p> : <p><span className="single-item-data">diet label : </span>not given</p>}
                  {foodItem.healthLabels && <p><span className="single-item-data">health label : </span>{
                    foodItem.healthLabels.filter((item,index)=>{
                      return index<5 && <span key={index}>{item}</span>
                    })
                  }</p>}
                  {foodItem.ingredientLines && <p><span className="single-item-data">ingredients : </span>{
                    foodItem.ingredientLines.map((item,index)=>{
                      return <span key={index}>{item}</span>
                    })
                  }</p>}
                </div>
              </div>

            </div>

        </section>
    )
}

export default SingleFoodItem
