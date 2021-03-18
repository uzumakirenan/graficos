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
                        {x: valores(20, 1), y: valores(20, 1)},
                        {x: valores(20, 1), y: valores(20, 1)},
                        {x: valores(20, 1), y: valores(20, 1)},
                        {x: valores(20, 1), y: valores(20, 1)},
                        {x: valores(20, 1), y: valores(20, 1)},
                        {x: valores(20, 1), y: valores(20, 1)},
                        {x: valores(20, 1), y: valores(20, 1)},
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

        const scatter = document.getElementById("Scatter")

        new Chart(scatter, {
            type: "scatter",
            data: dados,
            options: {

                events: ['click','mousemove'],

                legend: {
                    display: props.legenda
                },

                title: {
                    display: true,
                    text: props.titulo
                },
                
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
                    {x: valores(20, 1), y: valores(20, 1)},
                    {x: valores(20, 1), y: valores(20, 1)},
                    {x: valores(20, 1), y: valores(20, 1)},
                    {x: valores(20, 1), y: valores(20, 1)},
                    {x: valores(20, 1), y: valores(20, 1)},
                    {x: valores(20, 1), y: valores(20, 1)},
                    {x: valores(20, 1), y: valores(20, 1)},
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
                <canvas id="Scatter" width="400" height="400"></canvas>    
                
                <div className="text-center">
                    <input type="button" value="Gerar Dados" onClick={()=>{botao()}}></input>  
                </div> 
                  
                
            </Card>            
        </div>
    )

}