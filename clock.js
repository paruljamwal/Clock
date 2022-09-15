

let hr=document.getElementById("hr");
let mn=document.getElementById("mn");
let sc=document.getElementById("sc");

let audio1=document.getElementById("audio");
let duration=0;

const minutes=2.5;
let sec=minutes*60;

setInterval(() => {
    let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*6;
    let ss=day.getSeconds()*6;
    
    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${mm}deg)`;
    sc.style.transform=`rotateZ(${ss}deg)`; 



    // digital clock
    let hours=document.getElementById("hour");
    let min=document.getElementById("minutes");
    let sec=document.getElementById("seconds");
    let ampm=document.getElementById("ampm");
    
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    // console.log(s=='55');
    if(m=='59' && m=="60"){
       audio1.play(); 
    }

    let am=h>=12 ? "PM" :"AM";
    
    //if single digit add 0
    h=(h<10) ? "0"+h : h
    m=(m<10) ? "0"+m : m
    s=(s<10) ? "0"+s : s
    
    
    // convert 24hr clock to 12hr 
    if(h > 12){
        h=h-12;
    }

    
    hours.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s
    ampm.innerHTML=am
    
    
});


// audio1.play();

audio1.addEventListener("loadeddata",(e)=>{
    duration=audio1.duration;
    // console.log(duration);
})


