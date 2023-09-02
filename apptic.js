let gameboard=document.querySelector("#gameboard");
let info=document.querySelector("#info");

const startcell=[
    "","","","","","","","",""
];

let go="circle";
info.textContent="Circle go first";

function createboard(){
    startcell.forEach((cell,index)=>{
        const cellElement=document.createElement('div')
        cellElement.classList.add("square")
        cellElement.id=index;
        cellElement.addEventListener("click",addgo);
        gameboard.append(cellElement)
    })  
}
createboard(); 

function  addgo(e){
//    console.log(e.target);
   let godisplay=document.createElement("div");
   godisplay.classList.add(go);
   e.target.append(godisplay);
   go= go==="circle"?"cross":"circle";
   info.textContent= "it is now " +go+"'s turn";
e.target.removeEventListener("click",addgo);
checkScore();
}


function checkScore(){
   const allsquare= document.querySelectorAll(".square");
    const wincombo=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    wincombo.forEach(array =>{
        let circlewin=array.every(cell => 
            allsquare[cell].firstChild?.classList.contains("circle"));

            if(circlewin){
                info.textContent="circle wins";
                allsquare.forEach(square =>square.replaceWith(sqaure.cloneNode(true)))
                return 
            }
    })

    wincombo.forEach(array =>{
        let crosswin=array.every(cell => 
            allsquare[cell].firstChild?.classList.contains("cross"));

            if(crosswin){
                info.textContent="cross wins";
                allsquare.forEach(square =>square.replaceWith(sqaure.cloneNode(true)))
                return 
            }
    })

   
}
