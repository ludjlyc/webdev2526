// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */

function area(){
  let 1 = parseFloat(document.getElementById("length").value);
  let w = parseFloat(document.getElementById("width").value);
  let output = document.getElementById("output");
  if (1 <= 0 || w <= 0){
    message = "Inappropriate measurements";
  }else{
    let A = 1 * w;
    message = Area of rectangle with width ${w} and length ${1} is ${A} sq.units.;
  }

  output.innerHTML = message;
  //output.innerHTML = '${message}';
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function calcArea(){
  let l = parseFloat(document.getElementById("length").value);
  let w = parseFloat(document.getElementById("width").value);
  let op = document.getElementById("output");
  let A = l * w
  let message = ""

  if (l <= 0 || w <= 0){
      message = ("Invalid Answer")
  }else{
      message = A
  }
  op.innerHTML = `${message}`
}