
//const fs = requre('fs');
//const book = {
    //title: 'Ego is the enemy',
    //author: 'Ryan Holiday'
//}

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', BookJSON)

//const dataBuffer = fs.readFileSync('1-json.json')
//const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON);
//console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON);

user.naem = 'Gunther';
user.age = 54;

const userJSON = JOSN.stringify(user)
fs.writerFileSync('1-json.json', userJSON);


