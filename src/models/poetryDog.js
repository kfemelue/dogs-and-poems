class DogWithPoem {
    contructor(imgLink, title, author, lines){
        /**
         * @param {String} imgLink A link to an image of a dog to render in html
         * @param {String} title The title of the poem
         * @param {String} author The author of the poem
         * @param {Array} lines The text of the poem as an array of lines
         */
        this.img = imgLink;
        this.title = title;
        this.author = author;
        this.lines = lines;
    }
    getImg = () => {
        return String(this.img);
    }
    getTitle =()=> {
        return String(this.title);
    }
    getAuthor = () =>{
        return String(this.author);
    }
    getLines = () => {
        return this.lines;
    }
}

module.exports = DogWithPoem;
