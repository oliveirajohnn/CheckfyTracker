var app={
	inicio: function(){
		
		this.iniciaFastClick();
		this.qrcode();
		
	},
	iniciaFastClick: function(){
		FastClick.attach(document.body);
		
		
	},
  iniciaBotones: function() {
    var novo = document.querySelector('#new');


    novo.addEventListener('click' ,this.mostrar ,false);

  },

  mostrar: function() {

    document.getElementById("bt").style.display = "block";

  },
qrcode: function(){
	$('#scan').click( function() 
        {
          cordova.plugins.barcodeScanner.scan(
          function (result) {
          
                  var x = result.text;
				  
				   var codebatch = [ "SF170903R001.TRREGL50","SF170903R003.TRREGL50","SF170903R004.TRREGL50","SF170903R005.TRREGL50","SF170903R007.TRREGL50","SF170903R008.TRREGL50","SF170903R009.TRREGL50","SF170903R010.TRREGL50","SF170903R013.TRREGL50","SF170903R015.TRREGL50","SF170903R021.TRREGL50","SF170903R023.TRREGL50","SF170903R024.TRREGL50","SF170903R025.TRREGL50","SF170903R027.TRREGL50","SF170903R028.TRREGL50","SF170903R029.TRREGL50","SF170903R030.TRREGL50","SF170903R031.TRREGL50","SF170903R032.TRREGL50","SF170903R033.TRREGL50","SF170903R035.TRREGL50","SF170903R036.TRREGL50","SF170903R037.TRREGL50","SF170903R039.TRREGL50","SF170903R042.TRREGL50","SF170903R043.TRREGL50","SF170903R044.TRREGL50","SF170903R046.TRREGL50","SF170903R049.TRREGL50","SF170903R050.TRREGL50","SF170903R053.TRREGL50","SF170903R055.TRREGL50","SF170903R056.TRREGL50",
"SF170903R057.TRREGL50",
"SF170903R058.TRREGL50",
"SF170903R059.TRREGL50",
"SF170903R060.TRREGL50",
"SF170903R061.TRREGL50",
"SF170903R065.TRREGL50",
"SF170903R066.TRREGL50",
"SF170903R069.TRREGL50",
"SF170903R075.TRREGL50",
"SF170903R076.TRREGL50",
"SF170903R077.TRREGL50",
"SF170903R078.TRREGL50",
"SF170903R081.TRREGL50",
"SF170903R082.TRREGL50",
"SF170903R084.TRREGL50",
"SF170903R085.TRREGL50",
"SF170903R086.TRREGL50",
"SF170903R087.TRREGL50",
"SF170903R088.TRREGL50",
"SF170903R089.TRREGL50",
"SF170903R090.TRREGL50",
"SF170903R091.TRREGL50",
"SF170903R093.TRREGL50",
"SF170903R094.TRREGL50",
"SF170903R095.TRREGL50",
"SF170903R097.TRREGL50",
"SF170903R099.TRREGL50",
"SF170903R100.TRREGL50",
"SF170903R101.TRREGL50",
"SF170903R104.TRREGL50",
"SF170903R105.TRREGL50",
"SF170903R106.TRREGL50",
"SF170903R107.TRREGL50",
"SF170903R108.TRREGL50",
"SF170903R109.TRREGL50",
"SF170903R110.TRREGL50",
"SF170903R112.TRREGL50",
"SF170903R113.TRREGL50",
"SF170903R114.TRREGL50",
"SF170903R115.TRREGL50",
"SF170903R116.TRREGL50",
"SF170903R117.TRREGL50",
"SF170903R118.TRREGL50",
"SF170903R119.TRREGL50",
"SF170903R120.TRREGL50",
"SF170903R121.TRREGL50",
"SF170903R122.TRREGL50",
"SF170903R123.TRREGL50",
"SF170903R124.TRREGL50",
"SF170903R125.TRREGL50",
"SF170903R128.TRREGL50",
"SF170903R130.TRREGL50",
"SF170903R131.TRREGL50",
"SF170903R132.TRREGL50",
"SF170903R133.TRREGL50",
"SF170903R134.TRREGL50",
"SF170903R136.TRREGL50",
"SF170903R137.TRREGL50",
"SF170903R138.TRREGL50",
"SF170903R139.TRREGL50",
"SF170903R140.TRREGL50",
"SF170903R144.TRREGL50",
"SF170903R152.TRREGL50",
"SF170903R153.TRREGL50",
"SF170903R154.TRREGL50",
"SF170903R156.TRREGL50",
"SF170903R157.TRREGL50",
"SF170903R159.TRREGL50",
"SF170903R162.TRREGL50",
"SF170903R164.TRREGL50",
"SF170903R166.TRREGL50",
"SF170903R167.TRREGL50",
"SF170903R168.TRREGL50",
"SF170903R169.TRREGL50",
"SF170903R170.TRREGL50",
"SF170903R171.TRREGL50",
"SF170903R172.TRREGL50",
"SF170903R173.TRREGL50",
"SF170903R175.TRREGL50",
"SF170903R176.TRREGL50",
"SF170903R177.TRREGL50",
"SF170903R178.TRREGL50",
"SF170903R181.TRREGL50",
"SF170903R183.TRREGL50",
"SF170903R184.TRREGL50",
"SF170903R185.TRREGL50",
"SF170903R189.TRREGL50",
"SF170903R190.TRREGL50",
"SF170903R191.TRREGL50",
"SF170903R192.TRREGL50",
"SF170903R193.TRREGL50",
"SF170903R195.TRREGL50",
"SF170903R196.TRREGL50",
"SF170903R197.TRREGL50",
"SF170903R198.TRREGL50",
"SF170903R199.TRREGL50",
"SF170903R200.TRREGL50",
"SF170903R201.TRREGL50",
"SF170903R202.TRREGL50",
"SF170903R203.TRREGL50",
"SF170903R204.TRREGL50",
"SF170903R205.TRREGL50",
"SF170903R206.TRREGL50",
"SF170903R207.TRREGL50",
"SF170903R208.TRREGL50",
"SF170903R209.TRREGL50",
"SF170903R211.TRREGL50",
"SF170903R212.TRREGL50",
"SF170903R213.TRREGL50",
"SF170903R215.TRREGL50",
"SF170903R216.TRREGL50",
"SF170903R217.TRREGL50",
"SF170903R218.TRREGL50",
"SF170903R220.TRREGL50",
"SF170903R221.TRREGL50",
"SF170903R222.TRREGL50",
"SF170903R223.TRREGL50",
"SF170903R225.TRREGL50",
"SF170903R226.TRREGL50",
"SF170903R227.TRREGL50",
"SF170903R228.TRREGL50",
"SF170903R229.TRREGL50",
"SF170903R230.TRREGL50",
"SF170903R231.TRREGL50",
"SF170903R232.TRREGL50",
"SF170903R233.TRREGL50",
"SF170903R234.TRREGL50",
"SF170903R235.TRREGL50",
"SF170903R237.TRREGL50",
"SF170903R238.TRREGL50",
"SF170903R239.TRREGL50",
"SF170903R240.TRREGL50",
"SF170903R242.TRREGL50",
"SF170903R243.TRREGL50",
"SF170903R244.TRREGL50",
"SF170903R245.TRREGL50",
"SF170903R246.TRREGL50",
"SF170903R247.TRREGL50",
"SF170903R248.TRREGL50",
"SF170903R249.TRREGL50",
"SF170903R250.TRREGL50",
"SF170903R251.TRREGL50",
"SF170903R253.TRREGL50",
"SF170903R254.TRREGL50",
"SF170903R258.TRREGL50",
"SF170903R259.TRREGL50",
"SF170903R260.TRREGL50",
"SF170903R261.TRREGL50",
"SF170903R262.TRREGL50",
"SF170903R263.TRREGL50",
"SF170903R264.TRREGL50",
"SF170903R265.TRREGL50",
"SF170903R266.TRREGL50",
"SF170903R267.TRREGL50",
"SF170903R268.TRREGL50",
"SF170903R269.TRREGL50",
"SF170903R270.TRREGL50",
"SF170903R271.TRREGL50",
"SF170903R272.TRREGL50",
"SF170903R273.TRREGL50",
"SF170903R274.TRREGL50",
"SF170903R276.TRREGL50",
"SF170903R277.TRREGL50",
"SF170903R278.TRREGL50",
"SF170903R279.TRREGL50",
"SF170903R280.TRREGL50",
"SF170903R281.TRREGL50",
"SF170903R283.TRREGL50",
"SF170903R284.TRREGL50",
"SF170903R285.TRREGL50",
"SF170903R286.TRREGL50",
"SF170903R287.TRREGL50",
"SF170903R288.TRREGL50",
"SF170903R289.TRREGL50",
"SF170903R290.TRREGL50",
"SF170903R291.TRREGL50",
"SF170903R292.TRREGL50",
"SF170903R294.TRREGL50",
"SF170903R295.TRREGL50",
"SF170903R296.TRREGL50",
"SF170903R297.TRREGL50",
"SF170903R298.TRREGL50",
"SF170903R300.TRREGL50",
"SF170903R301.TRREGL50",
"SF170903R302.TRREGL50",
"SF170903R310.TRREGL50",
"SF170903R314.TRREGL50",
"SF170903R315.TRREGL50",
"SF170903R316.TRREGL50",
"SF170903R317.TRREGL50",
"SF170903R318.TRREGL50",
"SF170903R320.TRREGL50",
"SF170903R321.TRREGL50",
"SF170903R322.TRREGL50",
"SF170903R323.TRREGL50",
"SF170903R324.TRREGL50",
"SF170903R325.TRREGL50",
"SF170903R326.TRREGL50",
"SF170903R327.TRREGL50",
"SF170903R328.TRREGL50",
"SF170903R329.TRREGL50",
"SF170903R330.TRREGL50",
"SF170903R331.TRREGL50",
"SF170903R332.TRREGL50",
"SF170903R333.TRREGL50",
"SF170903R334.TRREGL50",
"SF170903R336.TRREGL50",
"SF170903R337.TRREGL50",
"SF170903R338.TRREGL50",
"SF170903R340.TRREGL50",
"SF170903R341.TRREGL50",
"SF170903R342.TRREGL50",
"SF170903R343.TRREGL50",
"SF170903R344.TRREGL50",
"SF170903R345.TRREGL50",
"SF170903R346.TRREGL50",
"SF170903R347.TRREGL50",
"SF170903R348.TRREGL50",
"SF170903R349.TRREGL50",
"SF170903R350.TRREGL50",
"SF170903R351.TRREGL50",
"SF170903R354.TRREGL50",
"SF170903R355.TRREGL50",
"SF170903R356.TRREGL50",
"SF170903R357.TRREGL50",
"SF170903R358.TRREGL50",
"SF170903R359.TRREGL50",
"SF170903R360.TRREGL50",
"SF170903R361.TRREGL50",
"SF170903R362.TRREGL50",
"SF170903R363.TRREGL50",
"SF170903R364.TRREGL50",
"SF170903R365.TRREGL50",
"SF170903R366.TRREGL50",
"SF170903R367.TRREGL50",
"SF170903R368.TRREGL50",
"SF170903R370.TRREGL50",
"SF170903R371.TRREGL50",
"SF170903R373.TRREGL50",
"SF170903R374.TRREGL50",
"SF170903R377.TRREGL50",
"SF170903R378.TRREGL50",
"SF170903R380.TRREGL50",
"SF170903R381.TRREGL50",
"SF170903R382.TRREGL50",
"SF170903R383.TRREGL50",
"SF170903R384.TRREGL50",
"SF170903R385.TRREGL50",
"SF170903R387.TRREGL50",
"SF170903R388.TRREGL50",
"SF170903R390.TRREGL50",
"SF170903R391.TRREGL50",
"SF170903R395.TRREGL50",
"SF170903R396.TRREGL50",
"SF170903R397.TRREGL50",
"SF170903R398.TRREGL50",
"SF170903R400.TRREGL50",
"SF170903R401.TRREGL50",
"SF170903R402.TRREGL50",
"SF170903R403.TRREGL50",
"SF170903R404.TRREGL50",
"SF170903R406.TRREGL50",
"SF170903R408.TRREGL50",
"SF170903R411.TRREGL50",
"SF170903R412.TRREGL50",
"SF170903R419.TRREGL50",
"SF170903R420.TRREGL50",
"SF170903R421.TRREGL50",
"SF170903R422.TRREGL50",
"SF170903R423.TRREGL50",
"SF170903R424.TRREGL50",
"SF170903R425.TRREGL50",
"SF170903R426.TRREGL50",
"SF170903R427.TRREGL50",
"SF170903R428.TRREGL50",
"SF170903R429.TRREGL50",
"SF170903R430.TRREGL50",
"SF170903R431.TRREGL50",
"SF170903R432.TRREGL50",
"SF170903R433.TRREGL50",
"SF170903R434.TRREGL50",
"SF170903R435.TRREGL50",
"SF170903R436.TRREGL50",
"SF170903R437.TRREGL50",
"SF170903R438.TRREGL50",
"SF170903R439.TRREGL50",
"SF170903R440.TRREGL50",
"SF170903R441.TRREGL50",
"SF170903R442.TRREGL50",
"SF170903R443.TRREGL50",
"SF170903R444.TRREGL50",
"SF170903R446.TRREGL50",
"SF170903R448.TRREGL50",
"SF170903R449.TRREGL50",
"SF170903R450.TRREGL50",
"SF170903R451.TRREGL50",
"SF170903R452.TRREGL50",
"SF170903R453.TRREGL50",
"SF170903R454.TRREGL50",
"SF170903R455.TRREGL50",
"SF170903R456.TRREGL50",
"SF170903R458.TRREGL50",
"SF170903R459.TRREGL50",
"SF170903R461.TRREGL50",
"SF170903R462.TRREGL50"
 ];
	if (codebatch.indexOf(x) > -1) {
    alert("!!!BATCH 7!!!");
	
  } else {
    alert("Outro Batch");
	
  }		 
				  
				  
				  


				

 		
          }, 
          function (error) {
              alert("Scanning failed: " + error);
          });
        }
     );


},
     

		
};
if('addEventListener' in document){
	document.addEventListener('DOMContentLoaded',function(){
		FastClick.attach(document.body);
		app.inicio();
		
	},false);
	
			
			
		}
		