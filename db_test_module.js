import mysql from 'mysql'

const connection = mysql.createConnection({
  host: '192.168.0.177',
  port:3306,
  user: 'test',
  password: '1234',
  database: 'testdb'
});

connection.connect();

connection.query('show databases', (error, result, field) => {
  if (error) {
    console.error('안돼네');
  }
  console.log(result)
})

connection.end();