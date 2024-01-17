const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Succesfully connected to game server!');
  });
  
  conn.on('connect', () => {
    conn.write('Name: ATL');
  })
  
  //move up
  conn.on('connect', () => {
  })
  //move down
  conn.on('connect', () => {
  })
  
  //move left
  conn.on('data', () => {
    
  })
  //move right
  conn.on('data', () => {
    
  })

  // if we afk
  conn.on('data', (data) => {
    console.log(`you afk for too long, server says: ${data}`);
  });

  return conn;
};

module.exports = {
  connect,
}
