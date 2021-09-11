

const http = require("http");
const fs = require("fs");
//TODO: Search About How To Convert JSON to String
const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

const myList = JSON.stringify(todos);

//  /todos => [todos]

// /todoApp => todo task

const server = http.createServer((req, res) => {
    const url = req.url;

    let data;

    if (url === '/about') {
        data = fs.readFileSync('./views/about.html')
    } else if (url === '/contact') {
        data = fs.readFileSync("./views/contact.html");
    } else if (url === '/') {
        data = fs.readFileSync("./views/index.html");
    }  else if (url === '/todos') {
        data = myList
    }else if (url === '/todoapp') {
      data = fs.readFileSync("./views/todoApp.html");
    }else if (url === '/todojs') {
      data = fs.readFileSync("./views/todoapp.js");
    }else if (url === '/todocss') {
      data = fs.readFileSync("./views/styles.css");
    }else {
        data = fs.readFileSync("./views/404.html");
    }
    res.end(data);

})

server.listen(5000, () => console.log('Server Is Running On Port 5000'))
