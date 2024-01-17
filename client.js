const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
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
