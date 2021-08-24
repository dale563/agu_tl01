
//Graphique 1 - Semi Circulaire

const dessinerGraphiqueSemiCirculaire = () => {
    new RGraph.SemiCircularProgress({
        id: 'semi-circulaire',
        min: 0,
        max: 100,
        value: 44,
        options: {
            tooltips: '%{key}',
            tooltipsFormattedKeyColors: ['red'],
            tooltipsFormattedKeyLabels: ['Johns progress'],
            tooltipsFormattedUnitsPost: 'kg',
            tooltipsCss: {
                fontSize: '16pt',
                boxShadow: '',
                textAlign: 'left'
            },
            colors: ['Gradient(#faa:red)'],
            labelsMinSize: 16,
            labelsMaxSize: 16,
            labelsCenterSize: 40,
            labelsCenterUnitsPost: 'kg',
            colorsStroke: 'rgba(0,0,0,0)'
        }
    }).draw();
}

//Graphique 2 - Lignes pleines flotantes 

const dessinerGraphiqueLignesPleinesFlotantes = () => {
    // Create the Line chart and give it all of the data that's to be shown
    // on the chart. There's four datasets but so that the lines appear to
    // be 'floating' the first dataset has a transparent color. The first
    // line is the bottom edge of the set of lines.
    new RGraph.SVG.Line({
        id: 'lignes-pleines-flotantes',
        data: [
            [84,65,3,15,12,22,95,5,35,45,85,85,23,45,62,52,45,31,53,66],
            [64,12,56,25,20,80,85,61,81,56,45,32,91,52,86,23,45,56,51,48],
            [48,5,23,12,16,36,49,130,52,95,45,21,65,35,28,75,59,74,86,23],
            [95,65,32,12,100,8,152,63,52,54,85,45,12,13,15,32,64,84,54,66]
        ],
        options: {
            filled: true,
            filledAccumulative: true,
            
            // Here's the colors being set - note the first is transparent
            // so we don't see it.
            colors: ['transparent', '#FDA354', '#C4D6ED', '#609EC8'],

            spline: true,

            // Turn off the background grid vertical lines and its border
            backgroundGridVlines: false,
            backgroundGridBorder: false,

            xaxis: false,
            yaxis: false,
            textSize: 10,
            xaxisLabels: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20']
        }
    
    // Animate the chart with the trace() effect and add some responsive capability to
    // accommodate both large and small screens
    }).trace().responsive([
        {maxWidth:null,width:600,height:250,css:{'float':'right'}},
        {maxWidth:800, width:450,height:200,css:{'float':'none'}}
    ]);
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

            title: 'Adoption des Appareils Électroniques en %\r\npar les Adultes Québecois en 2020',
            titleBold: true,
            titleY: '-30',
            titleX: '-75',
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

//Graphique 4 - A faire ( avec données,  normal =/ SVG)

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

//Graphique 6 - Lignes et barres 

const dessinerGraphiqueLignesEtBarres = () => {
    // This is the data for the red angled Line. A single array
    // of lots of datapoints.
    data = [
        1,3,2,5,4,2,3,5,6,5,
        4,6,7,5,6,8,7,5,8,6,
        8,9,6,8,7,8,9,10,11,13,
        9,11,10,13,12,11,10,11,13,11
    ];
    
    // Now create the spline array - which is done by looping through
    // the data array and setting the value to 1 less.
    spline = [];
    
    data.forEach (function (v, k, arr)
    {
        spline[k] = v - 1;
    });

    // Create the red angled Line using the original data array.
    // No axes are specified and the labels are set to use the
    // same spacing and positioning as the Scatter chart. The
    // labels are slightly smaller than the default.
    new RGraph.SVG.Line({
        id: 'lignes-et-barres',
        data: data,
        options: {
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            yaxis: false,
            xaxis: false,
            xaxisLabels: ['Q1','Q2','Q3','Q4'],
            xaxisLabelsPosition: 'section',
            xaxisLabelsPositionSectionTickmarksCount: 4,
            textSize: 10,
            yaxisScaleMax: 15
        }
    }).draw();

    // This is the spline chart which shows the data that's generated
    // above. It doesn't have the backgroundGrid, the axes or the
    // yaxisScale enabled.
    new RGraph.SVG.Line({
        id: 'lignes-et-barres',
        data: spline,
        options: {
            colors: ['rgba(0,0,0,0.25)'],
            spline: true,
            backgroundGrid: false,
            xaxis: false,
            yaxis: false,
            yaxisScale: false,
            yaxisScaleMax: 15
        }
    }).draw();
    
    // The Bar chart. The backgroundGrid, the axes and the Y axis
    // scale are disabled. The maximum value, like the Line charts
    // above, is set to 15.
    new RGraph.SVG.Bar({
        id: 'lignes-et-barres',
        data:[
            5,8,6,3,5,4,2,5,8,4,
            4,6,3,5,6,5,2,4,5,8,
            1,9,4,6,8,5,2,3,5,6,
            4,8,6,4,4,3,2,1,5,4,
            7,6,8,5,4,5,9,9,8,6,
            7,6,8,5,4,5,9,9,8,6,
            7,6,8,5,4,5,9,9,8,6,
            1,3,2,5,4,9,1,2,3,5
        ],
        options: {
            marginTop: 125,
            backgroundGrid: false,
            colors: ['rgba(0,0,0,0.25)'],
            xaxis: false,
            yaxis: false,
            yaxisScale: false,
            yaxisScaleMax: 15,
            marginInner: 1
        }
    
    // Draw the chart and add some responsive capability
    }).draw().responsive([
        {maxWidth:null,width:600,height:250,css:{'float':'right'}},
        {maxWidth:900,width:400,height:200,css:{'float':'none'}}
    ]);
}

const main = () => {
    dessinerMaBarHorizontal();
    dessinerMaThermometer();
    dessinerGraphiqueSemiCirculaire();
    dessinerGraphiqueLignesPleinesFlotantes();
    dessinerGraphiqueLignesEtBarres();
}

main();

