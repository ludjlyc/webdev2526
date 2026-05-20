//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card( cardInfo ){
  let build = " ";
  build = `<div class = "fitted card">
                <h3> Summons#: ${card.Info.summons_number}</h3>
                <hr>
                <p>Plate: ${card.Info.summons_number}</p>
                <p>License Type: ${card.Info.license_type}</p>
                <hr>
                <p>Issued On: ${card.Info.issue_date}</p>
                <hr>
                <p>Issued On: ${card.Info.issuisng_agency}</p>
                </div>

    return build;

`

}