import React from 'react'
import { Pie } from 'react-chartjs-2'
import '../css/pichart.css'
function Piechart({nutrientsData}) {
    const {fats, carbs, protein} = nutrientsData;
    return (
        <div className="piechart-container">
            <Pie 
                height={600}
                width={600}
                data={{
                    labels: ['Fats', 'Carbs', 'Protein'],
                    datasets: [
                        {
                            label: 'Nutrition Chart',
                            data:[fats,carbs,protein],
                            backgroundColor: ['red', 'blue', 'yellow']
                        }
                    ]
                }}
            />
        </div>
    )
}

export default Piechart
