const dessinerMaTartre = () => {
     // A basic configuration for a Pie chart with just the labels
    // separated out into their own array. This is because the same
    // array is used for both the labels and the tooltips so
    // doing this makes for less upkeep when the time comes to
    // change things around.
    //
    // Also note that the stroke color has been set to transparent so
    // that there's no separation between the segments
    //
    labels = [ 'Tomates', 'Choux', 'Brocoli', 'Chou-fleur', 'Friday', 'Saturday', 'Sunday'];

    new RGraph.Pie({
        id: 'canvasTartre',
        data: [20,1,1,1,1,1,1],
        options: {
            
            // This is the tooltip property using formatted tooltips
            tooltips: '%{property:myDaynames[%{index}]}<br /><span style="font-weight: bold; font-size:26pt">%{value_formatted}</span>',
            
            // The units that are appended to the %{value_formatted} value
            tooltipsFormattedUnitsPost: '%',
            
            // Turn the little triangular pointer off
            tooltipsPointer: false,
            
            // Turn fixed positioning off
            tooltipsPositionStatic: false,
            
            // Some CSS values that are set on the tooltips so that you can customise them
            tooltipsCss: {
                backgroundColor: 'white',
                color: 'black',
                border: '3px solid black'
            },

            // A custom property - the formatted tooltips can then
            // access this to use the data inside the tooltip
            myDaynames: labels,

            shadow: false,
            colorsStroke: 'transparent',
            keyPositionGraphBoxed: false,
            
        }
    // Draw the chart and add responsive capabilities. On smaller screens the width
    // is reduced and the labels are changed to a key. This takes up less space.
    }).draw().responsive([
        {maxWidth: null,width:550,height:250,options: {centerx: null,key: [],labels: labels},css:{'float':'right'}},
        {maxWidth: 600,width:420,height:250,options: {centerx: 150,key:labels, labels: []},css:{'float':'none'}}
    ]);
}

const dessinerMaBarVerticale = () => {
    // This Bar chart becomes the background of the progress bar
    new RGraph.SVG.Bar({
        id: 'chart-container',
        data: [100],
        options: {
            colors: ['Gradient(#eee:white)'],
            marginLeft: 45,
            marginRight: 5,
            backgroundGrid: true,
            colorsStroke: '#ccc',
            marginInner: 10,
            yaxis: false,
            yaxisScale: false,
            xaxis: false,
            linewidth: .5,
            shadow: true,
            shadowOpacity: .1
        }
    }).draw();

    // This Bar chart becomes the inner bar of the progress bar
    new RGraph.SVG.Bar({
        id: 'chart-container',
        data: [73],
        options: {
            yaxisScaleMax: 100,
            yaxisScaleUnitsPost: '%',
            yaxisTextColor: '#666',
            yaxis: false,
            xaxis: false,
            shadow: true,
            shadowOffsetx: 1,
            shadowOffsety: 1,
            shadowBlur: 1,
            titleColor: '#666',
            colors: ['Gradient(red:#fcc)'],
            backgroundGrid: false,
            tooltips: ['Monday was an average day'],
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            },
            marginLeft: 45,
            marginRight: 5,
            marginInner: 15
        }
    }).grow();
}

dessinerMaTartre();
dessinerMaBarVerticale();