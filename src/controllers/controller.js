const { response } = require("express");
const DogWithPoem = require("../models/poetryDog");

let resultObj = {}


async function getDogPoem (req, res, next) {
    let obj = {};
    await fetchDog()
    .then(img =>{
    })

    await fetchPoem()
    .then(poem=>{
    })
    //let result = new DogWithPoem(myObj.img, myObj.title, myObj.author, myObj.lines);
    res.status(200).send(resultObj)
}

async function fetchDog() {
    const request = "https://dog.ceo/api/breeds/image/random";
    await fetch(request)
    .then(response => response.json())
    .then(data => {
        let img = data.message;
        resultObj.img = img;
        return img
    }).catch(error => {
        console.error("Something Went wrong with the Dog Image API. Error: ", error);
    });
}

async function fetchPoem() {
    let request = "https://poetrydb.org/title/dog/title,author,lines,linecount.json";
    await fetch(request)
    .then(response => response.json())
    .then(data => {
        //filter poems by linecount with a maximum of 25 lines
        data = data.filter((item)=> Number(item.linecount)<=25)

        //select a random poem
        let poem = data[Math.floor(Math.random()*data.length)];

        resultObj.title = poem.title;
        resultObj.author = poem.author;
        resultObj.lines = poem.lines;

        return poem;
    })
    .catch(error => {
        console.error("Something Went wrong with the Poem API. Error: ", error);
    });
}

module.exports = {getDogPoem, fetchDog, fetchPoem, resultObj};
