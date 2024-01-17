const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Client outputs a message when succesfully connected to the game server
  conn.on('connect', () => {
    console.log('Succesfully connected to game server!');
  });
  
  //Name of Snake
  conn.on('connect', () => {
    conn.write('Name: BUB');
  });
  
  // Receives server message
  conn.on('data', (data) => {
    console.log(`${data}`);
  });

  return conn;
};

module.exports = {
  connect,
}
