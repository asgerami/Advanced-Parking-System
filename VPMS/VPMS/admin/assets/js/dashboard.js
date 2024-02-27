( function ( $ ) {
  "use strict";

 $.plot("#flotBar1", [{
  data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6]],
  bars: {
    show: true,
    lineWidth: 0,
    fillColor: '#85c988'          
  }
}], {
  grid: {
    show: false,
    hoverable: true
  }
});


 $.plot("#flotBar2", [{
  data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6]],
  bars: {
    show: true,
    lineWidth: 0,
    fillColor: '#f58f8d'
  }
}], {
  grid: {
    show: false
  }
});



 var plot = $.plot($('#flotLine1'),[{
  data: [[0, 1], [1, 3], [2,6], [3, 5], [4, 7], [5, 8], [6, 10]],
  color: '#fff'
}],
{
  series: {
    lines: {
      show: false
    },
    splines: {
      show: true,
      tension: 0.4,
      lineWidth: 2
        //fill: 0.4
      },
      shadowSize: 0
    },
    points: {
      show: false,
    },
    legend: {
      noColumns: 1,
      position: 'nw'
    },
    grid: {
      hoverable: true,
      clickable: true,
      show: false
    },
    yaxis: {
      min: 0,
      max: 10,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });


 var plot = $.plot($('#flotLine2'),[{
  data: [[0, 8], [1, 5], [2,7], [3, 8], [4, 7], [5, 10], [6, 8], [7, 5], [8, 8], [9, 6], [10, 4]],
  label: 'New Data Flow',
  color: '#42a5f5'
}],
{
  series: {
    lines: {
      show: false
    },
    splines: {
      show: true,
      tension: 0.4,
      lineWidth: 1,
      fill: 0.25
    },
    shadowSize: 0
  },
  points: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  }
});

 var plot = $.plot($('#flotLine3'),[{
  data: [[0, 8], [1, 5], [2,7], [3, 8], [4, 7], [5, 10], [6, 8], [7, 5], [8, 8], [9, 6], [10, 4]],
  label: 'New Data Flow',
  color: '#ffa726'
}],
{
  series: {
    lines: {
      show: false
    },
    splines: {
      show: true,
      tension: 0.4,
      lineWidth: 1,
      fill: 0.25
    },
    shadowSize: 0
  },
  points: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  }
});

 var plot = $.plot($('#flotLine4'),[{
  data: [[0, 8], [1, 5], [2,7], [3, 8], [4, 7], [5, 10], [6, 8], [7, 5], [8, 8], [9, 6], [10, 4]],
  label: 'New Data Flow',
  color: '#5c6bc0'
}],
{
  series: {
    lines: {
      show: false
    },
    splines: {
      show: true,
      tension: 0.4,
      lineWidth: 1,
      fill: 0.25
    },
    shadowSize: 0
  },
  points: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  }
});


 var newCust = [[0, 3], [1, 5], [2,4], [3, 7], [4, 9], [5, 3], [6, 6], [7, 4], [8, 10]];

 var plot = $.plot($('#flotLine5'),[{
  data: newCust,
  label: 'New Data Flow',
  color: '#fff'
}],
{
  series: {
    lines: {
      show: true,
      lineColor: '#fff',
      lineWidth: 1
    },
    points: {
      show: true,
      fill: true,
      fillColor: "#ffffff",
      symbol: "circle",
      radius: 3
    },
    shadowSize: 0
  },
  points: {
    show: true,
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  }
});

 var piedata = [
 { label: "Desktop visits", data: [[1,32]], color: '#5c6bc0'},
 { label: "Tab visits", data: [[1,33]], color: '#ef5350'},
 { label: "Mobile visits", data: [[1,35]], color: '#66bb6a'}
 ];

 $.plot('#flotPie1', piedata, {
  series: {
    pie: {
      show: true,
      radius: 1,
      innerRadius: 0.4,
      label: {
        show: true,
        radius: 2/3,
        threshold: 1
      },
      stroke: { 
        width: 0.1
      }
    }
  },
  grid: {
    hoverable: true,
    clickable: true
  }
});

var data = [], totalPoints = 50;

function getRandomData() {
  if (data.length > 0)
    data = data.slice(1);
  while (data.length < totalPoints) {
    var prev = data.length > 0 ? data[data.length - 1] : 50,
    y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }
  var res = [];
  for (var i = 0; i < data.length; ++i) {
    res.push([i, data[i]])
  }
  return res;
}

  var updateInterval = 1000;

  var plot5 = $.plot('#flotRealtime2', [ getRandomData() ], {
    colors: ['#5c6bc0'],

    series: {
      lines: {
        show: true,
        lineWidth: 0,
        fill: 0.9
      },
      shadowSize: 0
    },
    grid: {
      show: false
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });

  function update_plot5() {
    plot5.setData([getRandomData()]);
    plot5.draw();
    setTimeout(update_plot5, updateInterval);
  }

  update_plot5();

  if ($('#traffic-chart').length) {
    var chart = new Chartist.Line('#traffic-chart', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
      [13000, 18000, 35000, 18000, 25000, 26000, 22000, 20000, 18000, 35000, 18000, 25000],
      [15000, 23000, 15000, 30000, 20000, 31000, 15000, 15000, 23000, 15000, 30000, 20000],
      [25000, 15000, 38000, 25500, 15000, 22500, 30000, 25000, 15000, 38000, 25500, 15000]
      ]
    }, {
      low: 0,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: true
      }
    });

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
  }

  var g1;

  document.addEventListener("DOMContentLoaded", function(event) {
    g1 = new JustGage({
      id: "g1",
      value: 72,
      fill: '#ffa726',
      symbol: '%',
      min: 0,
      max: 100,
      donut: true,
      gaugeWidthScale: 0.4,
      counter: true,
      hideInnerShadow: true
    });

  });

  $('#sparklinedash, #sparklinedash6, #sparklinedash11').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
    type: 'bar',
    height: '30',
    barWidth: '5',
    disableHiddenCheck: true,
    resize: true,
    barSpacing: '2',
    barColor: '#42a5f5'
  });
  
  $('#sparklinedash2, #sparklinedash7, #sparklinedash12').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
    type: 'bar',
    height: '30',
    barWidth: '5',
    resize: true,
    barSpacing: '2',
    barColor: '#ef5350'
  });
  $('#sparklinedash3, #sparklinedash8, #sparklinedash13').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
    type: 'bar',
    height: '30',
    barWidth: '5',
    resize: true,
    barSpacing: '2',
    barColor: '#66bb6a'
  });
  $('#sparklinedash4, #sparklinedash9, #sparklinedash14').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
    type: 'bar',
    height: '30',
    barWidth: '5',
    resize: true,
    barSpacing: '2',
    barColor: '#5c6bc0'
  });
  $('#sparklinedash5, #sparklinedash10, #sparklinedash15').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
    type: 'bar',
    height: '30',
    barWidth: '5',
    resize: true,
    barSpacing: '2',
    barColor: '#ffa726'
  });

  var ctx = document.getElementById('area_chart').getContext('2d');

  var chart = new Chart(ctx, {
        type: 'line',

        data: {
          labels: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: '#4fabf5',
            pointBackgroundColor: "#ffffff",
            data: [5000, 2700, 8500, 5500, 4500, 4900, 3000]
          },
          {
            label: "My Second dataset",
            backgroundColor: 'rgba(230,240,244,.5)',
            borderColor: '#6ebe73',
            pointBackgroundColor: "#ffffff",
            data: [5500, 2900, 7000, 3500, 5000, 3300, 4800 ]
          },
          {
            label: "My Third dataset",
            backgroundColor: 'transparent',
            borderColor: '#5c6bc0',
            pointBackgroundColor: "#ffffff",
            data: [2700, 7000, 3500, 6900, 2600, 6500, 2200]
          }]
        },

        // Configuration options go here
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },

          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              gridLines: {
                zeroLineColor: '#e8e9ef',
                color: '#e8e9ef',
                drawBorder: true
              }
            }]

          },
          elements: {
            line: {
              tension: 0.00001,
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4,
              borderWidth: 2
            }
          }
        }
      });




})( jQuery );

if (Gauge) {

  var opts = {
        lines: 12,
        angle: 0,
        lineWidth: 0.05,
        pointer: {
            length: .75,
            strokeWidth: 0.03, 
            color: '#000'
          },
        limitMax: 'true',
        colorStart: '#42a5f5',
        colorStop: '#42a5f5',
        strokeColor: '#fbfbfc',
        generateGradient: true
      };


    var target = document.getElementById('g2'); 
    var gauge = new Gauge(target).setOptions(opts);
    gauge.maxValue = 3000;
    gauge.animationSpeed = 32;
    gauge.set(1150);
    
  }