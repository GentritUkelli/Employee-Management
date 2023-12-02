//import json-server library 
const jsonServer = require("json-server");
const jsonServerPort = 8095;

//start json server
const server = jsonServer.create();//create server
const middlewares = jsonServer.defaults();// takes default middlewares from json
server.use(jsonServer.bodyParser);// server ready bodyParser
server.use(middlewares);//takes all middlewares json server has  

const departmentsRoutes = require("./routes/departments");
//const employeesRoutes = require("./routes/employees");
//const tasksRoutes = require("./routes/tasks");

//use routes handlers for json data
departmentsRoutes(server);
//employeesRoutes(server);
//tasksRoutes(server);

//start json server on port 8095
server.listen(jsonServerPort,() => {
  console.log(`JSon server running on port ${jsonServerPort}`);
});