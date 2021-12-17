
const ctx1 = document.getElementById('chart1');
const myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
        datasets: [{
            
            data: [100000, 87000, 49000, 47000, 44000, 36000],
            backgroundColor: [
            'rgb(65,191,153)'
            ],
           
            borderWidth: 1
        }]
    },
    options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid : {
                        display : false,
                    },
                    ticks : {
                        color : "#000000"
                    }
                },
                x : {
                    title : {
                        display : true,
                        text : '$',
                        color : '#000000',
                        font : {
                            weight : 'bold'
                        }
                    },
                    ticks : {
                        color : '#000000',
                    }
                    
                }
            },
            categoryPercentage : 1,
            barPercentage : .5,
            indexAxis : 'y',
            plugins: {
                title: {
                    position : "bottom",
                    text : 'Revenue for November 2019',
                    display  : true,
                    color : '#000000'
                },
                legend : {
                    display : false,
                }
            }
        }
    });
    //here is the second chart
const ctx2= document.getElementById('chart2');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance','Material Sale'],
        datasets: [{
            label: '# of Votes',
            data: [200000, 130000, 87000, 85000, 48000, 45000,4000],
            backgroundColor: [
            'rgb(65,191,153)'
            ],
           
            borderWidth: 1
        }]
    },
    options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid : {
                        display : false,
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                x : {
                    title : {
                        display : true,
                        text : '$',
                        color : "#000000",
                        font : {
                            weight : 'bold'
                        }

                    },
                    ticks : {
                        color : '#000000',
                    }
                }
            },
            categoryPercentage : 1,
            barPercentage : .5,
            indexAxis : 'y',
            plugins: {
                title: {
                    position : "bottom",
                    text : 'Revenue for November 2019',
                    display  : true,
                    color : '#000000'
                },
                legend : {
                    display : false,
                }
            }
        }
    });
