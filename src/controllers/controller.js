const { response } = require("express");
const DogWithPoem = require("../models/poetryDog");

let resultObj = {}

function getDogPoem (req, res, next) {
    const dogAndPoem = new DogWithPoem(resultObj.img, resultObj.title, resultObj.author, resultObj.lines);
    fetchDog();
    fetchPoem();
    res.status(200).render("index", { resultObj: resultObj });
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
        resultObj.img = "https://media.istockphoto.com/id/486150666/photo/404-error.jpg?s=612x612&w=0&k=20&c=0gyIrlpbS04D0S0d9ED_2tjE3-L5lMnVamyuohZ8TKQ="
        console.error("Something Went wrong with the Dog Image API. Error: ", error);
    });
}

async function fetchPoem() {
    let request = "https://poetrydb.org/title/dog/title,author,lines,linecount.json";
    await fetch(request)
    .then(response => response.json())
    .then(data => {
        //filter poems by linecount with a maximum of 100 lines
        data = data.filter((item)=> Number(item.linecount)<=100)
        //select a random poem
        const poem = data[Math.floor(Math.random()*data.length)];
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
