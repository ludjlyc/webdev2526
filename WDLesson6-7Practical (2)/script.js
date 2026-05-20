let data, info;

async function init(){   
  let link = "MVC.json"; //let link = "https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>id = ${collision.collision_id}</h3>
                 <hr>
                 <p>${collision.on_street_name}</p>
                 <p>  #injured ${collision.number_of_persons_injured}</p>
                 <hr>
                 <p> #killed  ${collision.number_of_persons_killed}</p>
                 <hr>
                 <p> vehicle type: ${collision.vehicle_type_code1}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.borough == borough){
      build += `<div class="fitted card">
                    <h3>${collision.complaint_type}</h3>
                    <hr>
                    <p>${collision.complaint}</p>
                    <p>${collision.incident_zip}</p>
                    <p>${collision.descriptor}</p>
                    <hr>
                    <p>${collision.street_name}</p>
                    <hr>
                    <p>${collision.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByZip() {
  let output = document.getElementById("output");
  let bourough = document.getElementById("borough").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
      let collision = data[i];

  }

}


// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterByid(){
  let output = document.getElementById("output");
  let kill = document.getElementById("killed").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_pedestrians_killed == kill){
      build += `<div class="fitted card">
                 <h3>id = ${crash.collision_id}</h3>
                 <hr>
                 <p>#killed: ${crash.number_of_persons_killed}</p>
                 <p>#injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>#cartype: ${crash.vehicle_type_code1}</p>
                 <p>#date: ${crash.crash_date}</p>
                 <hr>
                 <p>${crash.on_street_name}</p>
              </div>`        
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}