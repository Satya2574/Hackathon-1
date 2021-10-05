//Creating big  container to hold all the things
let box=document.createElement('div');
box.classList.add ("container")
let heading=document.createElement('h1')
heading.classList.add('header')
heading.innerHTML="NATIONALITY FINDER";
box.append(heading)
document.body.append(box)
let container=document.createElement('div');
container.setAttribute('class','bigcontainer');

let innercontainer=document.createElement('div');
innercontainer.setAttribute('class','innercontainer');
innercontainer.classList.add("container");


let searchContainer=document.createElement('div');
searchContainer.setAttribute('class','search');
searchContainer.innerHTML=`
<input type="text" class="form-control col-4" id="inputText" placeholder="Enter The Name">
<button type="button" onclick="search()" class="btn btn-primary searchBtn col-2">Search</button>`;
searchContainer.classList.add("col-12")

//appending things
innercontainer.append(searchContainer);
container.append(innercontainer);
document.body.append(container);

// Creating outer container to hold display results(two cards) 
let outercontainer=document.createElement("div");
outercontainer.setAttribute('class','display');

//fetching data from nationalize api with the search value
async function search(){
    outercontainer.innerHTML="";
    try{
        let name1=document.getElementById("inputText").value;
        let data =await fetch(`https://api.nationalize.io/?name=${name1}`);
        let orginaldata=await data.json();
        displayData(orginaldata);
    }
    catch{
        console.log("Page Not found");
        alert("Please Enter Valid Name)");
       
    }
}

 function  displayData(values){
     //storing isocodes and probability values from API data
    let id1=values.country[0].country_id;
    let id2=values.country[1].country_id;
    let probability1=values.country[0].probability;
    let probability2=values.country[1].probability;
    //Creating card1 with country flag at top and country name and nationality ,probability
        var card1=document.createElement('div');
        card1.setAttribute('class','card');
        card1.classList.add("card1");
        var body1=document.createElement('div');
         body1.setAttribute('class','card-body');
         var title1=document.createElement('h4');
         title1.setAttribute('class','card-title');
         title1.innerHTML="Country:"+id1;
         var title2=document.createElement('h5');
         title2.setAttribute('class','card-title');
         title2.innerHTML="Probability:"+probability1.toFixed(5);
         body1.append(title1,title2);
         card1.append(body1);
         outercontainer.append(card1)
 //Creating card2 with country flag at top and country name and nationality ,probability
 var card2=document.createElement('div');
card2.setAttribute('class','card');
 card2.classList.add("card2");
 var body2=document.createElement('div');
  body2.setAttribute('class','card-body');
  var title3=document.createElement('h4');
  title3.setAttribute('class','card-title');
  title3.innerHTML="Country:"+id2;
  var title4=document.createElement('h5');
  title4.setAttribute('class','card-title');
  title4.innerHTML="Probability:"+probability2.toFixed(5);
  body2.append(title3,title4);
  card2.append(body2);
  outercontainer.append(card2)
          container.append(outercontainer);
          document.body.append(container);
}
