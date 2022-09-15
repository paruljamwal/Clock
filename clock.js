

let hr=document.getElementById("hr");
let mn=document.getElementById("mn");
let sc=document.getElementById("sc");


setInterval(() => {
    let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*6;
    let ss=day.getSeconds()*6;
    
    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${mm}deg)`;
    sc.style.transform=`rotateZ(${ss}deg)`; 
}, );



console.log(hh,"day",mm,"min",ss,"sc");
