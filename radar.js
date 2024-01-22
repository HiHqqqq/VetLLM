option = {
 color:[  '#FF917C','#56A3F1'],
  title: {
    text: ' '
  },
  legend: {
    data: ['Baseline', 'VetLLM'],
    
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Toxicity', max: 0.7 },
      { name: 'Bias', max: 0.7 },
      { name: 'Health', max:0.7 },
      { name: 'Morality', max: 0.7},

    ],
    axisName: {
       color: '#000000',
       fontSize:15
      }
  },
  series: [
    {
      name: 'Baseline',
      type: 'radar',
      
      data: [
        {
          value: [0.125,0.161,0.098,0.178],
          name: 'Allocated Budget',
          
          areaStyle: {opacity: 0.3},
          label: { show: true,},
          title: {
    text: ' heello'
  },
           
          
          
          
        },
        {
          value: [0.481,0.483,0.445,0.514],
          symbol: 'rect',
          symbolSize: 12,
          lineStyle: {
            type: 'dashed'
          },
          areaStyle: {opacity: 0.1},
          name: 'VetLLM',
          label: { show: true}
        }
      ]
    }
  ]
};