
  var a;
    function check() {
        q1elem = document.getElementById('r12');

        if (q1elem.checked==true) alert('Da');
        
    }
	
        
     

  
	
	
	
	
	
	
	function checkk() {
//alert('hi');
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c1_elem.style.display='none';
c2_elem.style.display='none';
c3_elem.style.display='none';
c4_elem.style.display='block';

}
    
function show_pic(){
//alert('hi');
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c1_elem.style.display='none';
c2_elem.style.display='block';
c3_elem.style.display='none';
c4_elem.style.display='none';
}
function show_text(){
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c1_elem.style.display = 'block';
c2_elem.style.display='none';
c3_elem.style.display='none';
c4_elem.style.display='none';
}
function show_pic1() {
    //alert('hi');
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c1_elem.style.display='none';
c2_elem.style.display='none';
c3_elem.style.display='block';
c4_elem.style.display='none';
}
var map = new ymaps.Map("�2", {
    center: [55.76, 37.64],
    zoom: 7
});