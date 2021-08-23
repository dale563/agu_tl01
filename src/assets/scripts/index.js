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

//Graphique 3 - BarHorizontal

const dessinerMaBarHorizontal = () => {
    //
    // This the function that builds and returns the
    // correct tooltip based on the group ID that is
    // passed to it
    function getTooltip(group)
    {
        var results = [
            [86,'The "Ordinateur portable<br />majority with a total of 408 seats.'],
            [81, 'The "Téléphone intelligent" campaign fought valiantly<br />but, alas, it was to no avail.']
            [59, 'The "Tablette électronique" campaign fought valiantly<br />but, alas, it was to no avail.']
            [21, 'The "Montre intelligent" campaign fought valiantly<br />but, alas, it was to no avail.']
        ];

        return 'Seats: <b>{1}</b><br /><span style="color: #ccc">{2}</span>'.format(
            results[group][0],
            results[group][1],
            results[group][2],
            results[group][3]
        );
    }

    // A pretty standard Horizontal Bar chart which has two bars that are
    // showing the results of the 2016 UK Europe referendum/disaster. The
    // tooltips have HTML in them which is fine because tooltips are
    // actually just <div> tags.
    new RGraph.HBar({
        id: 'barhorizontal',
        data: [86,81,59,21],
        options: {
            xaxisLabelsSize: 8,
            yaxisLabels: ['Ordinateur portable','Téléphone intelligent', 'Tablette électronique', 'Montre intelligent'],
            marginTop: 100,
            xaxis: false,
            yaxisColor: '#ccc',
            textColor: '#666',
            backgroundGridBorder: false,
            backgroundGridHlines: false,
            backgroundGridVlinesCount: 18,
            labelsAbove: true,
            tooltips: '%{function:getTooltip(%{dataset})}',
            tooltipsCss: {
                fontFamily: 'Arial',
                fontSize: '14pt'
            },
            
            // Use the newer highlight inverting so that the bars that aren't highlighted
            // are faded out.
            highlightStyle: 'invert',
            highlightFill: 'rgba(255,255,255,0.85)',

            title: 'Adoption des Appareils Électroniques\r\npars les Adultes Québecois en 2020',
            titleBold: true,
            titleY: '-30',
            titleHalign: 'center',
            titleColor: 'black'
        }

    // Use the grow() animation effect
    }).grow().responsive([
        {maxWidth: null, width: 600,height: 275,options: {titleSize: 18,textSize: 14,marginInner: 25,xaxisLabelsCount: 18},css:{'float':'none'}},
        {maxWidth: 700, width: 400,height: 225,options: {titleSize: 14,textSize: 12,marginInner: 15,xaxisLabelsCount: 9},css:{'float':'none'}}
    
    ])
    
    // This is a way to specify CSS values for the tooltips. You
    // should use the JavaScript versions of the CSS names (ie
    // hyphens are replaced with capital letters as shown below).
    // A few names are significantly different (eg "float"
    // becomes "cssFloat")
    RGraph.tooltips.style.textAlign = 'center';
}

//Graphique 4 - SemiCircularProgress

const dessinerMaSemiCircularProgress = () => {
    new RGraph.SVG.SemiCircularProgress({
        id: 'semicirculaire',
        min: 0,
        max: 100,
        value:30,
        options: {
            labelsCenterDecimals: 1,
            tooltips: 'Progress: %{value}%',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).draw();   
}

//Graphique 5 - Thermomètre

const dessinerMaThermometer = () => {
    new RGraph.Thermometer({
        id: 'canvasThermometre',
        min: 0,
        max: 100,
        value: 80,
        options: {
            marginLeft: 40,
            marginRight: 40,
            tooltips: '<span style="font-size: 14pt">Todays temperature</span><br/>%{key}',
            colors: ['red'],
            tooltipsFormattedKeyLabels: ['London'],
            tooltipsFormattedUnitsPost: '°',
            tooltipsCss: {
                fontSize: '18pt',
                textAlign: 'left'
            }
        }
    }).draw();
}

//Graphique 6

const main = () => {
    dessinerMaTartre();
    dessinerMaBarVerticale();
    dessinerMaBarHorizontal();
    dessinerMaSemiCircularProgress();
    dessinerMaThermometer();
}

main();
