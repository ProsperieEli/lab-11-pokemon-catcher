import { getPokedex } from "../poke-times.js";


const pokeData = getPokedex();

const arrayOfCaught = pokeData
    .filter(pokemon => pokemon.caught > 0)
    .map(({ caught }) => caught);

const arrayOfName = pokeData
    .filter(pokemon => pokemon.caught > 0)
    .map(pokemon => pokemon.name);

const arrayofSeen = pokeData
    .filter(pokemon => pokemon.caught > 0)
    .map(({ seen })=> seen);

console.log(arrayOfName);

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx,
        //eslint-disable-line
    {
        type: 'bar',
        data: {
            labels: arrayOfName,
            datasets: [{
                label: 'pokeName',
                data: arrayOfCaught,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, 
            {
                label: 'pokeSeen',
                data: arrayofSeen,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
            
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    