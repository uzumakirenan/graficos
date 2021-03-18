import React, { useEffect, useState } from 'react'
import { Card } from 'reactstrap'
import Chart from 'chart.js'

export default (props) => {

    const valores = (max, min) => {    
        const vl = Math.floor(Math.random() * (max - min) + min)
    
        return(
            vl
        )
    }
   
    const botao = () => {
        setDados(
            {              
                labels: ["Verm.", "Azul", "Amar.", "Verde", "Roxo", "Laran.","Cinza"],
                datasets: [
                    {
                    label: "# of Votes",
                    data: [
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                        {x: valores(20, 1), y: valores(20, 1), r: valores(20, 10)},
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)'
                    ],
                    borderWidth: 1
                    }
                ]
            }
        )
    }
    
    
    useEffect(() => {        

        const bubble = document.getElementById("Bubble")

        new Chart(bubble, {
            type: "bubble",
            data: dados,
            options: {

                events: ['click'],

                legend: {
                    display: props.legenda
                },

                title: {
                    display: true,
                    text: props.titulo
                }
            }
        })

    })

    const [dados, setDados] = useState(
        {              
            labels: ["Verm.", "Azul", "Amar.", "Verde", "Roxo", "Laran.","Cinza"],
            datasets: [
                {
                label: "# of Votes",
                data: [
                    {x: 5, y:5, r:10},
                    {x: 10, y:10, r:20},
                    {x: 20, y:20, r:14},
                    {x: 7, y:16, r:20},
                    {x: 18, y:8, r:10},
                    {x: 8, y:12, r:16},
                    {x: 14, y:14, r:18},
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderWidth: 1
                }
            ]
        }
    );

    return(
        <div className="col-12 col-sm-6 col-md-4">    
            <Card className="p-2 mt-3">               
                <canvas id="Bubble" width="400" height="400"></canvas>    
                
                <div className="text-center">
                    <input type="button" value="Gerar Dados" onClick={()=>{botao()}}></input>  
                </div> 
                  
                
            </Card>            
        </div>
    )

}