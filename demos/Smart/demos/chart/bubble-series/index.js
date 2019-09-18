const sampleData = [
    { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
    { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
    { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
    { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
    { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
    { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
    { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
];

Smart('#chart', class {
    get properties() {
        return {
            animation: 'none',
            caption: 'Sales by City in Q1 and Q2, and YoY sales growth',
            description: '(the size of the circles represents relative YoY growth)',
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            colorScheme: 'scheme32',
            xAxis:
            {
                dataField: 'City',
                valuesOnTicks: false
            },
            valueAxis:
            {
                unitInterval: 50000,
                minValue: 50000,
                maxValue: 350000,
                title: { text: 'Sales ($)<br>' },
                labels: {
                    formatSettings: { prefix: '$', thousandsSeparator: ',' },
                    horizontalAlignment: 'right'
                }
            },
            seriesGroups:
                [
                    {
                        type: 'bubble',
                        useGradientColors: true,
                        series: [
                            { dataField: 'SalesQ1', radiusDataField: 'YoYGrowthQ1', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q1' },
                            { dataField: 'SalesQ2', radiusDataField: 'YoYGrowthQ2', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q2' }
                        ]
                    }
                ]
        };
    }
});

window.onload = function () {
    const chart = document.getElementById('chart');

    document.getElementById('dropDownSerie1Symbol').addEventListener('change', function (event) {
        chart.seriesGroups[0].series[0].symbolType = event.detail.value;
        chart.refresh();
    });
    document.getElementById('dropDownSerie2Symbol').addEventListener('change', function (event) {
        chart.seriesGroups[0].series[1].symbolType = event.detail.value;
        chart.refresh();
    });
};
