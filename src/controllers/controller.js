const DogWithPoem = require("../models/poetryDog");
const dogPoem = require("../models/poetryDog");

const getDogPoem = () => {
    let dogLink = fetchDog();
    let poem = fetchPoem();
    let DogPoem = new DogWithPoem(dogLink, poem.title, poem.author, poem.text)
    console.log(DogPoem)
}


async function fetchDog() {
    let request = "https://dog.ceo/api/breeds/image/random";
    await fetch(request)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.json().message);
                return response.json().message;
            } else {
                throw new Error("Something went wrong with the Dog API server");
            }
        })
        .then((response) => {
            console.debug(response);
        })
        .catch((error) => {
            console.error(error);
        });
}


async function fetchPoem() {
    let request = "https://poetrydb.org/title/dog/title,author,lines,linecount.json";
    let poems = [];
    //select a random poem to return
    let poem;
    await fetch(request)
        .then((response) => {
            if (response.status === 200) {
                //fetch all poems about dogs, then filter by line count
                poems = response.filter((item) => {
                    Number(item.linecount) <= 25;
                });
            } else {
                throw new Error("Something Went wrong with the Poetry API server");
            }
        })
        .then((response)=>{
            console.debug(response);
        })
        .catch((error)=>{
            console.error(error);
        });
    
    poem = poems[Math.floor(Math.random()*items.length)];
    return poem;
}

module.exports = getDogPoem;
