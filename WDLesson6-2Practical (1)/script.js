function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  output.innerHTML = `
    <div class="card">
      <h2>${school.name}</h2>
      <img src="${school.image}" alt="${school.name}" width="300">
      <p>${school.address}</p>
    </div>
  `;
}

function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Michael Jackson",
    "image":"https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg",
    "album":"Thriller",
    "url":"https://www.michaeljackson.com/"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  output.innerHTML = `
    <div class="card">
      <h2>${artist.name}</h2>
      <a href="${artist.url}" target="_blank">
        <img src="${artist.image}" alt="${artist.name}" width="300">
      </a>
      <p>Popular Album: ${artist.album}</p>
    </div>
  `;
}



