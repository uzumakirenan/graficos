import React, { useEffect, useState } from 'react'
import { Card, Button } from 'reactstrap'
import Chart from 'chart.js'

export default function Line(props) {

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
                        data: [valores(20,1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1)],
                        backgroundColor: [
                            'rgba(0, 0, 0, 0)'
                            
                        ],
                        borderColor: [
                            'rgba(0,0,0,0.1)'
                        ],
                        borderWidth: 3,
        
                        pointBackgroundColor:[
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)'
                        ],

                        pointRadius: 5
                        }
                ]
            }
        )
    }
    
    
    useEffect(() => {        

        const line = document.getElementById("Line")

        new Chart(line, {
            type: "line",
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
                    data: [valores(20,1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1)],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                        
                    ],
                    borderColor: [
                        'rgba(0,0,0,0.1)'
                    ],
                    borderWidth: 3,

                    pointBackgroundColor:[
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)'
                    ],

                    pointRadius: 5
                }
            ]
        }
    );

    return(
        <div className="col-12 col-sm-6 col-md-4">    
            <Card className="p-2 mt-3">               
                <canvas id="Line" width="400" height="400"></canvas>    
                <Button color="primary mt-3" onClick={()=>{botao()}}>Randomizar Dados</Button>
            </Card>            
        </div>
    )

}