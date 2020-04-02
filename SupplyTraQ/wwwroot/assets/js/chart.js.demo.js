/* Charts */
$('document').ready(function() {

/* Vertical Bar Chart */

// get the bar chart canvas
var trial = $("#barChart");

// bar chart data
var trialData1 = {
  labels: ["Celgene", "Bluebied Bio", "Autolus Limited", "Bellicum", "Cellectis"],
  datasets: [
    {
      label: "Phase 1",
      barPercentage: 0.5,
      data: [30, 50, 65, 70, 60],
      backgroundColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 2",
      barPercentage: 0.5,
      data: [20, 35, 40, 60, 50],
      backgroundColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 3",
      barPercentage: 0.5,
      data: [5, 15, 30, 30, 20],
      backgroundColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderWidth: 0
    }
  ]
};

// bar chart data
var trialData2 = {
  labels: [" CSG-GPC3", "JWCAR029", "AMG-119", "JNJ-4528", "BPX-601"],
  datasets: [
    {
      label: "Phase 1",
      barPercentage: 0.5,
      data: [3, 5, 6, 7, 6],
      backgroundColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 2",
      barPercentage: 0.5,
      data: [2, 3, 4, 6, 5],
      backgroundColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 3",
      barPercentage: 0.5,
      data: [5, 1, 3, 4, 2],
      backgroundColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderWidth: 0
    }
  ]
};

// options
var trialOptions1 = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Bar Graph",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 80,
        min: 0,
        stepSize: 10,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  }
};

//options
var trialOptions2 = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Bar Graph",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 8,
        min: 0,
        stepSize: 1,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  }
};

// create Chart class object
var trialChart = new Chart(trial, {
  type: "bar",
  data: trialData1,
  options: trialOptions1
});

$('#trialType').selectpicker('val', 'trialCompany');
$('#trialOption').selectpicker('val', 'trialPhase');

// Update Bar Chart
$('#trialType').change(function() {
if ($(this).val() === 'trialCompany') {
  trialChart.data = trialData1;
  trialChart.options = trialOptions1;
  trialChart.update();
  }
});
$('#trialType').change(function() {
if ($(this).val() === 'trialAsset') {
  trialChart.data = trialData2;
  trialChart.options = trialOptions2;
  trialChart.update();
  }
});

/* Chart Filters */
$('#trialOption').change(function() {
if ($(this).val() === 'trialPhase') {
  trialChart.data.datasets[0].label = ["Phase 1"];
  trialChart.data.datasets[1].label = ["Phase 2"];
  trialChart.data.datasets[2].label = ["Phase 3"];
  trialChart.update();
  }
});
$('#trialOption').change(function() {
if ($(this).val() === 'trialTarget') {
  trialChart.data.datasets[0].label = ["BCMA"];
  trialChart.data.datasets[1].label = ["B7-H3"];
  trialChart.data.datasets[2].label = ["CD19"];
  trialChart.update();
  }
});

$('#changePivot').change(function() {
    if($(this).is('input:checked')) {
      trialChart.getDatasetMeta(0).hidden=true;
      trialChart.getDatasetMeta(1).hidden=true;
  }
  else{
    trialChart.getDatasetMeta(0).hidden=false;
    trialChart.getDatasetMeta(1).hidden=false;
     }
    trialChart.update();
});



/* Horizontal Bar Chart */

// get the bar chart canvas
var horizontalBar = $("#horizontalBarChart");

// bar chart data
var horizontalBarData = {
  labels: ["Celgene", "Bluebied Bio", "Autolus Limited"],
  datasets: [
    {
      label: "Phase 1",
      barPercentage: 0.75,
      data: [30, 50, 65],
      backgroundColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 2",
      barPercentage: 0.75,
      data: [20, 35, 40],
      backgroundColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 3",
      barPercentage: 0.75,
      data: [5, 15, 30],
      backgroundColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderWidth: 0
    }
  ]
};

// options
var horizontalBarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Horizontal Bar Chart",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 80,
        min: 0,
        stepSize: 10,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  }
};


// create Chart class object
var chart = new Chart(horizontalBar, {
  type: "horizontalBar",
  data: horizontalBarData,
  options: horizontalBarOptions
});



/* Stacked Bar Chart */

// get the stacked bar chart canvas
var search = $("#stackedBarChart");

// stacked bar chart data
var searchData = {
  labels: ["Allife", "Amgen", "Autolus", "Beijing", "Bellicum", "Bluebied", "BoYuan", "CARsgen", "CASI", "Celgene", "Cellectis", "Celyad", "Immunotech", "Fapon", "Formula", "Gilead", "iCarTAB", "Janssen", "JW"],
  datasets: [
    {
      label: "Phase 1",
      barPercentage: 0.5,
      data: [30, 50, 65, 70, 60, 30, 50, 65, 70, 60, 30, 50, 65, 70, 60, 30, 50, 65, 70],
      backgroundColor: [
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)',
        'rgba(0, 112, 120, 1)'
      ],
      borderColor: [
        'rgba(0, 112, 120, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 2",
      barPercentage: 0.5,
      data: [20, 35, 40, 60, 50, 20, 35, 40, 60, 50, 20, 35, 40, 60, 50, 20, 35, 40, 60],
      backgroundColor: [
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)',
        'rgba(107, 143, 0, 1)'
      ],
      borderColor: [
        'rgba(107, 143, 0, 1)'
      ],
      borderWidth: 0
    },
    {
      label: "Phase 3",
      barPercentage: 0.5,
      data: [5, 15, 30, 30, 20, 5, 15, 30, 30, 20, 5, 15, 30, 30, 20, 5, 15, 30, 30],
      backgroundColor: [
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)',
        'rgba(201, 122, 0, 1)'
      ],
      borderColor: [
        'rgba(201, 122, 0, 1)'
      ],
      borderWidth: 0
    }
  ]
};

//options
var searchOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Bar Graph",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20
    }
  },
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 180,
        min: 0,
        stepSize: 20,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      stacked: true,
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  }
};

// create Stacked Chart class object
var searchChart = new Chart(search, {
  type: "bar",
  data: searchData,
  options: searchOptions
});



/* Line Chart */

//get the line chart canvas
var pivotal = $("#lineChart");

//line chart data
var pivotalData1 = {
  labels: ["2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "CD 19",
      data: [10, 50, 25, 70, 40],
      backgroundColor: "rgba(0, 112, 120, 1)",
      borderColor: "rgba(0, 112, 120, 1)",
      fill: false,
      lineTension: 0,
      radius: 5
    },
    {
      label: "BCMA",
      data: [20, 35, 40, 60, 50],
      backgroundColor: "rgba(107, 143, 0, 1)",
      borderColor: "rgba(107, 143, 0, 1)",
      fill: false,
      lineTension: 0,
      radius: 5
    },
    {
      label: "Other",
      data: [15, 25, 30, 50, 60],
      backgroundColor: "rgba(201, 122, 0, 1)",
      borderColor: "rgba(201, 122, 0, 1)",
      fill: false,
      lineTension: 0,
      radius: 5
    }
  ]
};

// line chart data 2.
var pivotalData2 = {
  labels: ["2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "CD 19",
      data: [10, 35, 25, 60, 50],
      backgroundColor: "rgba(0, 112, 120, .1)",
      borderColor: "rgba(0, 112, 120, 1)",
      pointBackgroundColor: "rgba(0, 112, 120, 1)",
      fill: true,
      lineTension: 0.2,
      radius: 5
    },
    {
      label: "BCMA",
      data: [20, 60, 35, 40, 70],
      backgroundColor: "rgba(107, 143, 0, .1)",
      borderColor: "rgba(107, 143, 0, 1)",
      pointBackgroundColor: "rgba(107, 143, 0, 1)",
      fill: true,
      lineTension: 0.2,
      radius: 5
    },
    {
      label: "Other",
      data: [5, 25, 15, 70, 40],
      backgroundColor: "rgba(201, 122, 0, .1)",
      borderColor: "rgba(201, 122, 0, 1)",
      pointBackgroundColor: "rgba(201, 122, 0, 1)",
      fill: true,
      lineTension: 0.2,
      radius: 5
    }
  ]
};

// options 1.
var pivotalOptions1 = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Line Graph",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20,
      usePointStyle: true,
      boxWidth: 11
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 80,
        min: 0,
        stepSize: 10,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  },
};

// options 2.
var pivotalOptions2 = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Line Graph",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20,
      usePointStyle: true,
      boxWidth: 11
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 80,
        min: 0,
        stepSize: 10,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  },
};

//create Chart class object
var pivotalGraph = new Chart(pivotal, {
  type: "line",
  data: pivotalData1,
  options: pivotalOptions1
});

$('#pivotalType').selectpicker('val', 'pivotalTarget');
$('#pivotalDate').selectpicker('val', 'pivotalYear');

// Update Bar Chart
$('#pivotalType').change(function() {
if ($(this).val() === 'pivotalTarget') {
  pivotalGraph.data = pivotalData1;
  pivotalGraph.options = pivotalOptions1;
  pivotalGraph.update();
  }
});
$('#pivotalType').change(function() {
if ($(this).val() === 'pivotalTimeline') {
  pivotalGraph.data = pivotalData2;
  pivotalGraph.options = pivotalOptions2;
  pivotalGraph.update();
  }
});

$('#pivotalDate').change(function() {
if ($(this).val() === 'pivotalYear') {
  pivotalGraph.data.labels = ["2015", "2016", "2017", "2018", "2019"];
  pivotalGraph.config.options.scales.yAxes[0].ticks.max = 80,
  pivotalGraph.update();
  }
});
$('#pivotalDate').change(function() {
if ($(this).val() === 'pivotalMonth') {
  pivotalGraph.data.labels = ["Aug", "Sept", "Oct", "Nov", "Dec"];
  pivotalGraph.config.options.scales.yAxes[0].ticks.max = 100,
  pivotalGraph.update();
  }
});

/*
$('#pivotalDate').change(function() {
if ($(this).val() === 'pivotalMonth') {
  var pivotalGraph = new Chart(pivotal, {
    type: "line",
    data: pivotalData3,
    options: pivotalOptions3
  });
  pivotalGraph.config.data = pivotalData3;
  pivotalGraph.update();
}
});

function destroyChart() {
  if (pivotalGraph)
    pivotalGraph.destroy();
}
*/


/* Area Chart */

//  chart canvas
var areaChart = $("#areaChart");

// chart data
var areaChartData = {
  labels: ["2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "CD 19",
      data: [10, 50, 25, 70, 40],
      backgroundColor: "rgba(0, 112, 120, 0.1)",
      borderColor: "rgba(0, 112, 120, 1)",
      pointBackgroundColor: "rgba(0, 112, 120, 1)",
      fill: true,
      lineTension: 0.4,
      radius: 5
    },
    {
      label: "BCMA",
      data: [20, 35, 40, 60, 50],
      backgroundColor: "rgba(107, 143, 0, 0.1)",
      borderColor: "rgba(107, 143, 0, 1)",
      pointBackgroundColor: "rgba(107, 143, 0, 1)",
      fill: true,
      lineTension: 0.4,
      radius: 5
    },
    {
      label: "Other",
      data: [15, 25, 30, 50, 60],
      backgroundColor: "rgba(201, 122, 0, 0.1)",
      borderColor: "rgba(201, 122, 0, 1)",
      pointBackgroundColor: "rgba(201, 122, 0, 1)",
      fill: true,
      lineTension: 0.4,
      radius: 5
    }
  ]
};

// options
var areaChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    position: "top",
    text: "Line Graph",
    fontSize: 16,
    fontColor: "#666"
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#999",
      fontSize: 14,
      padding: 20,
      usePointStyle: true,
      boxWidth: 11
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
        max: 80,
        min: 0,
        stepSize: 10,
        fontColor: "#888"
      }
  }],
    xAxes: [{
      gridLines: {
        color: "#eee",
        zeroLineColor: '#eee'
      },
      ticks: {
            fontColor: "#888"
        }
    }]
  },
};

// Chart class object
var chart = new Chart(areaChart, {
  type: "line",
  data: areaChartData,
  options: areaChartOptions
});




/* Pie Chart */

// chart canvas
var ctx = $("#pieChart");

// chart data
var data = {
labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
datasets: [
  {
    label: "Data",
    data: [50, 40, 30, 20, 10],
    backgroundColor: [
      "#007078",
      "#6b8f00",
      "#c97a00",
      "#d2451e",
      "#784e90"
    ],
    borderColor: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff"
    ],
    borderWidth: [2, 2, 2, 2, 2]
  }
]
};

// options
var options = {
responsive: true,
maintainAspectRatio: false,
title: {
  display: false,
  position: "top",
  text: "Pie Chart",
  fontSize: 16,
  fontColor: "#666"
},
legend: {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#999",
    fontSize: 14,
    padding: 20
  }
}
};

// Chart class object
var chart = new Chart(ctx, {
type: "pie",
data: data,
options: options
});


/* Doughnut Chart */

// chart canvas
var ctx = $("#doughnutChart");

// chart data
var data = {
labels: ["Sun Pharma", "Novartis", "Pfizer", "Mylan", "Stada"],
datasets: [
  {
    label: "Company",
    data: [7500, 6500, 4500, 3000, 1500],
    backgroundColor: [
      "#007078",
      "#6b8f00",
      "#c97a00",
      "#d2451e",
      "#784e90"
    ],
    borderColor: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff"
    ],
    borderWidth: [2, 2, 2, 2, 2]
  }
]
};

// options
var options = {
responsive: true,
maintainAspectRatio: false,
title: {
  display: false,
  position: "top",
  text: "Doughnut Chart",
  fontSize: 16,
  fontColor: "#666"
},
legend: {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#999",
    fontSize: 14,
    padding: 20
  }
}
};

// Chart class object
var chart = new Chart(ctx, {
type: "doughnut",
data: data,
options: options
});



/* Radar Chart */

// chart canvas
var radar = $("#radarChart");

// chart data
var data = {
labels: ["Phase 0", "Phase 1", "Phase 2", "Phase 3", "Phase 4"],
datasets: [
  {
    label: "Novartis",
    fill: true,
    backgroundColor: "rgba(0, 112, 120, 0.2)",
    borderColor: "rgba(0, 112, 120, 1)",
    pointBorderColor: "#fff",
    pointBackgroundColor: "rgba(0, 112, 120, 1)",
    data: [25, 65, 45, 30, 15]
  }, {
    label: "Pfizer",
    fill: true,
    backgroundColor: "rgba(107, 143, 0, 0.2)",
    borderColor: "rgba(107, 143, 0, 1)",
    pointBorderColor: "#fff",
    pointBackgroundColor: "rgba(107, 143, 0, 1)",
    data: [15, 25, 75, 50, 5]
  }, {
    label: "Mylan",
    fill: true,
    backgroundColor: "rgba(201, 122, 0, 0.2)",
    borderColor: "rgba(201, 122, 0, 1)",
    pointBorderColor: "#fff",
    pointBackgroundColor: "rgba(201, 122, 0, 1)",
    data: [35, 15, 15, 20, 60]
  }
  ]
};


// options
var options = {
responsive: true,
maintainAspectRatio: false,
title: {
  display: false,
  position: "top",
  text: "Radar Chart",
  fontSize: 16,
  fontColor: "#666"
},
legend: {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#999",
    fontSize: 14,
    padding: 20
  }
}
};

// Chart class object
var chart = new Chart(radar, {
type: "radar",
data: data,
options: options
});



/* Polar Chart */

// chart canvas
var polar = $("#polarChart");

// chart data
var data = {
labels: ["Sun Pharma", "Novartis", "Pfizer", "Mylan", "Stada"],
datasets: [
  {
    label: "Company",
    data: [7500, 6500, 4500, 3000, 1500],
    backgroundColor: [
      "#007078",
      "#6b8f00",
      "#c97a00",
      "#d2451e",
      "#784e90"
    ],
    borderColor: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff"
    ],
    borderWidth: [2, 2, 2, 2, 2]
  }
]
};

// options
var options = {
responsive: true,
maintainAspectRatio: false,
title: {
  display: false,
  position: "top",
  text: "Polar Chart",
  fontSize: 16,
  fontColor: "#666"
},
legend: {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#999",
    fontSize: 14,
    padding: 20
  }
}
};

// Chart class object
var chart = new Chart(polar, {
type: "polarArea",
data: data,
options: options
});


/* Bubble Chart */

// chart canvas
var bubble = $("#bubbleChart");

// chart data
var data = {
labels: ["Sun Pharma", "Novartis", "Pfizer", "Mylan", "Stada"],
datasets: [
  {
    label: "Sun Pharma",
    fill: true,
    backgroundColor: "rgba(0, 112, 120, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    data: [{
          x: 2015,
          y: 4,
          r: 10
        }]
  },
  {
    label: "Novartis",
    backgroundColor: "rgba(107, 143, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    data: [{
          x: 2019,
          y: 8,
          r: 30
        }]
  },
  {
    label: "Pfizer",
    fill: true,
    backgroundColor: "rgba(201, 122, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    data: [{
          x: 2016,
          y: 5,
          r: 25
        }]
  },
  {
    label: "Mylan",
    fill: true,
    backgroundColor: "rgba(210, 69, 30, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    data: [{
          x: 2017,
          y: 6,
          r: 20
        }]
  },
  {
    label: "Stada",
    fill: true,
    backgroundColor: "rgba(120, 78, 144, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    data: [{
          x: 2018,
          y: 7,
          r: 15
        }]
  }
  ]
};

// options
var options = {
responsive: true,
maintainAspectRatio: false,
title: {
  display: false,
  position: "top",
  text: "Polar Chart",
  fontSize: 16,
  fontColor: "#666"
},
legend: {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#999",
    fontSize: 14,
    padding: 20
  }
},
scales: {
  yAxes: [{
    ticks: {
      max: 10,
      min: 0,
      stepSize: 1
    }
}],
  xAxes: [{
    ticks: {
      max: 2020,
      min: 2015,
      stepSize: 1
      }
  }]
}
};

// Chart class object
var chart = new Chart(bubble, {
type: "bubble",
data: data,
options: options
});




/* Mixed Chart */

// chart canvas
var mixed = $("#mixedChart");

// chart data
var data = {
labels: ["2015", "2016", "2017", "2018", "2019"],
datasets: [
  {
    label: "Global",
    fill: true,
    type: "line",
    backgroundColor: "rgba(0, 112, 120, 0.2)",
    borderColor: "rgba(0, 112, 120, 1)",
    pointBorderColor: "#fff",
    pointBackgroundColor: "rgba(0, 112, 120, 1)",
    data: [25, 65, 45, 30, 15]
  },
  {
    label: "Pfizer",
    fill: true,
    type: "bar",
    barPercentage: 0.5,
    backgroundColor: "rgba(107, 143, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    pointBorderColor: "#fff",
    pointBackgroundColor: "rgba(107, 143, 0, 1)",
    data: [15, 25, 75, 50, 5]
  },
  {
    label: "Mylan",
    fill: true,
    type: "bar",
    barPercentage: 0.5,
    backgroundColor: "rgba(201, 122, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    pointBorderColor: "#fff",
    pointBackgroundColor: "rgba(201, 122, 0, 1)",
    data: [35, 15, 15, 20, 60]
  }
  ]
};


// options
var options = {
responsive: true,
maintainAspectRatio: false,
title: {
  display: false,
  position: "top",
  text: "Radar Chart",
  fontSize: 16,
  fontColor: "#666"
},
legend: {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#999",
    fontSize: 14,
    padding: 20
  }
}
};

// Chart class object
var chart = new Chart(mixed, {
type: "bar",
data: data,
options: options
});


});
