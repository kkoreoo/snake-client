let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //Terminates game
  const handleUserInput = (data) => {
    if (data === '\u0003') {
      process.exit();
    } 

    //Movement for the snake 'WASD'
    if (data === 'w') {
      conn.write('Move: up');
    } 
    
    if (data === 'a') {
      conn.write('Move: left');
    } 
    
    if (data === 's') {
      conn.write('Move: down');
    } 
    
    if (data === 'd') {
      conn.write('Move: right');
    }
  }

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
}