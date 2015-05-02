(function(){
var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
var buyerData = {
  labels : ["January","February","March","April","May","June"],
  datasets : [
    {
      fillColor : "rgba(172,194,132,0.4)",
      strokeColor : "#ACC26D",
      pointColor : "#fff",
      pointStrokeColor : "#9DB86D",
      data : [203,156,99,251,305,247]
    }
  ]
}






})();









function MyThunderDome(contenderA, contenderB) {

  var data = [
    {
      value: docket1_vitae,
      color:"#F7464A",
      highlight: "#6fa809",
      label: "Purple"
    },
    {
      value: docket2_vitae,
      color: "#46BFBD",
      highlight: "#C781a8",
      label: "Cyan"
    }
            ];
 var params = {
        //Boolean - Whether we should show a stroke on each segment
       segmentShowStroke : true,

       //String - The colour of each segment stroke
       segmentStrokeColor : "#fff",

       //Number - The width of each segment stroke
       segmentStrokeWidth : 2,

       //Number - The percentage of the chart that we cut out of the middle
       percentageInnerCutout : 50, // This is 0 for Pie charts

       //Number - Amount of animation steps
       animationSteps : 100,

       //String - Animation easing effect
       animationEasing : "easeOutBounce",

       //Boolean - Whether we animate the rotation of the Doughnut
       animateRotate : true,

       //Boolean - Whether we animate scaling the Doughnut from the centre
       animateScale : false,

       //String - A legend template
       legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

var ctx = document.getElementById("myThunderDome").getContext("2d");
var myThunderDome = new Chart(ctx).Bar(data,params);
}
