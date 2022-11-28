function getCatImage() {
    const image = new Image(400)
    document.body.appendChild(image)
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0].url);
    //   document.getElementById("catImage").src = data[0].url;      
      image.src  = data[0].url;
    });
}

function moreCats(){
    getCatImage()
    const image = document.createElement('img')
    image.src  = "https://api.thecatapi.com/v1/images/search"
}
