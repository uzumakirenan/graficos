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
                    data: [valores(20,1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1),valores(20, 1)],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                        
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

        const polar = document.getElementById("Polar")

        new Chart(polar, {
            type: "polarArea",
            data: dados,
            options: {

                events: ['click','mousemove'],

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
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                    
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
                <canvas id="Polar" width="400" height="400"></canvas>    
                
                <div className="text-center">
                    <input type="button" value="Gerar Dados" onClick={()=>{botao()}}></input>  
                </div> 
                  
                
            </Card>            
        </div>
    )

}