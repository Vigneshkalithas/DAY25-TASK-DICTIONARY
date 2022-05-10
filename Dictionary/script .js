const clickButton = document.getElementById('result');
const result = document.getElementById('form');

//getting data from api.

function getAnswers(){
var words=document.getElementById("form").value;
const para= document.querySelector("#answers");

var e = document.querySelector("#answers");
        
        //e.firstElementChild can be used.
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
  .then((data)=>(data.json()))
  .then((data1)=>{
    for (let i = 0; i < data1.length; i++){
      var title= document.getElementById("title-card");
      var phonetic= document.getElementById("phonetic");
      title.innerHTML=`Word: ${data1[i].word}`;
      phonetic.innerHTML=`phonetic: ${data1[i].phonetic}`;
      for (let item=0 ; item< data1[i].meanings.length; item++) {
       
        for (const answers of data1[i].meanings[item].definitions)
        { 
         var p=document.createElement("p");
         p.setAttribute("id","mean");
         p.innerHTML=`Meaning: ${answers.definition}`;
         para.append(p)
       }
      }     
    }
 })
  .catch((error)=>{
       document.getElementById("mean").innerHTML="Sorry data  not found";
  
         console.log(error);
      
   })
}

//Event listner when clickk a button do some operations

clickButton.addEventListener('click', getAnswers)