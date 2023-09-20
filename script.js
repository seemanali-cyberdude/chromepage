setting_btn = document.getElementById("setting");
let seet = document.getElementById("button-container");
setting_btn.addEventListener("click" , ()=>{
   seet.classList.toggle("buttonopacitysetter");
   setting_btn.classList.toggle("setting-rotate")
});

//for changing theme color

colorselector = document.querySelectorAll("button");
for(items of colorselector){
    items.addEventListener('click' ,  (e)=>{
    
        localStorage.setItem("colorscheme" , e.target.value);
        setcolor();
    })
}

function setcolor(){
    colorcontiner = localStorage.getItem("colorscheme");
    document.body.style.background = colorcontiner;
}
setcolor();

//time to show in the bottom of the site




function manipulateTime(){
    let date = new Date();
    let h1 = date.getHours();
    m1 =  date.getMinutes();
    s1 = date.getSeconds();
    
    // console.log(h1 , m1 , s1);
        if(h1>12){
            document.querySelector('#hours').innerHTML= "0"+`${h1 - 12}`;
            document.querySelector('#Timeinterval').innerHTML = "PM";
           
          
        }
        else{
            document.getElementById('hours').innerHTML  = h1;
            document.querySelector('#Timeinterval').innerText = "AM";
        }
        if(m1 <10){
            document.getElementById('minutes').innerHTML  = "0"+m1;
        }
        else{
            document.getElementById('minutes').innerHTML  = m1;
        }
        if(s1 < 10){
            document.getElementById('seconds').innerHTML  = "0"+s1;
        }
        else{
            document.getElementById('seconds').innerHTML  = s1;
        }
}
setInterval(manipulateTime , 1000);

//love heading manipulation
    lovely  =document.getElementById("lovely");

    lovely.addEventListener("keyup",  ()=>{
        localStorage.setItem("editableContent" , lovely.innerHTML)
    });

    function loadeditableHEading(){
        heading  =  localStorage.getItem("editableContent");
        lovely.innerHTML = heading;
    }
    loadeditableHEading();

//about page load

let aboutopener  = document.getElementById("about");
aboutopener.addEventListener("click",  ()=>{
    let about = document.getElementById("aboutcontiner");
    about.classList.toggle("aboutload")
});

let closeabout = document.getElementById("aboutclose");
closeabout.addEventListener("click" , ()=>{
    aboutcontiner.style.margin = "-80vh auto"
});


//https://api.themotivate365.com/stoic-quote

async function loadqoute(){
    let url = "https://api.themotivate365.com/stoic-quote";
    let resopnse = await fetch(url);
    let data = await resopnse.json();
    // console.log(data)
    let finder = data.quote;
    // console.log(finder.length)
    if(finder.length >150){
        location.reload();
    }
    document.getElementById("quote").innerHTML = data.quote;
    document.getElementById("author").innerHTML = " - " +data.author;
}
loadqoute();

//to do list
let liscontainer = document.getElementById('liscontainer');
function saveData(){
    localStorage.setItem('todolistofchrome', liscontainer.innerHTML);
  }
  
  function TakeData(){
      
      liscontainer.innerHTML =localStorage.getItem('todolistofchrome');
  }
      TakeData();

let addbtn = document.getElementById("addtask");
let input = document.getElementById("input");

addbtn.addEventListener("click" , ()=>{
    let newtask =  document.createElement("li");
    newtask.innerHTML=input.value;
    liscontainer.appendChild(newtask);
    saveData();
    input.value=""
   
});
liscontainer.addEventListener("click" ,  (e)=>{
    if(e.target.tagName=="LI"){
      e.target.remove();
     saveData();
        }})


  