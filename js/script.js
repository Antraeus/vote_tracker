$(function(){

var randomDossier = [];

function MyThunderDome(docket1_vitae, docket2_vitae) {

  var data = [
    {
      value: docket1_vitae,
      color:"#F7464A",
      highlight: "#6fa809",
      label: "Red"
    },
    {
      value: docket2_vitae,
      color: "#46BFBD",
      highlight: "#C781a8",
      label: "Green"
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

//stageNewContestants
/* Create function to stage new contestants by rendering elements */

function stageNewContestants(dossierArray) {
  var $clearArena = $('.contestants').empty();
  var selectContender1 = Math.floor(Math.random() * dossierArray.length);
  var selectContender2 = Math.floor(Math.random() * dossierArray.length);

  while(selectContender1 === selectContender2) {
    selectContender2 = Math.floor(Math.random() * dossierArray.length);
  }
  var docket1 = dossierArray[selectContender1];
  var docket2 = dossierArray[selectContender2];
//Creates <img> elements from the compiled list of entrants
  var img1 = $('<img>').addClass('cat-contender', 'litter-box').attr(
    {
      id: 'imgOne',
      src: docket1.imgUrl
    }
  );
  var img2 = $('<img>').addClass('cat-contender', 'litter-box').attr(
    {
      id: 'imgTwo',
      src: docket2.imgUrl
    }
  );
/*Append cat images onto .contestants class, which was cleared(), and use the ids
created in the img1/2 variables */


/* Create function to stage new contestants by rendering elements */

}());
