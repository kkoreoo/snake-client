const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('You have connected to the server!');
  });
  
  conn.on('data', (data) => {
    console.log(`you afk for too long, server says: ${data}`);
  });

  return conn;
};

module.exports = {
  connect,
}
