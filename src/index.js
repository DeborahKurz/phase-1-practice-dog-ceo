console.log('%c HI', 'color: firebrick')
//Challenge 1:
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function getDogs() {
    fetch ('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json())
        .then(function (data) {
            const div = document.getElementById("dog-image-container");
            for (const imageUrl of data.message){
                const img = document.createElement("img");
                img.src = imageUrl;
                div.appendChild(img);
            }
        })
}
getDogs()

//Challenge 2:
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch ("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then(function(data){
        const ul = document.getElementById("dog-breeds")
        for(const breed in data.message){
            const li = document.createElement("li");
            li.textContent = breed;
            ul.appendChild(li);
            // console.log(li)
        }
        addEventListenersToLiElements();
    })

//Challenge 3:
function addEventListenersToLiElements() {
    let liList = document.querySelectorAll("li");
    console.log(liList)
    liList.forEach(function(item) {
      item.addEventListener("click", function() {
        // console.log("Clicked on an li element");
        this.style.color = "pink";
      });
    });
  }
  
//Challenge 4:
function filterBreeds() {
    const selectedLetter = document.getElementById("breed-dropdown").value;
    const breedList = document.getElementById("dog-breeds");
    const breedItems = breedList.getElementsByTagName("li");
  
    for (let i = 0; i < breedItems.length; i++) {
      const breed = breedItems[i].textContent.toLowerCase();
      if (selectedLetter === "" || breed.startsWith(selectedLetter)) {
        breedItems[i].style.display = "block";
      } else {
        breedItems[i].style.display = "none";
      }
    }
  }
  document.getElementById("breed-dropdown").addEventListener("change", filterBreeds);