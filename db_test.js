const mysql = require('mysql2');
// console.log(id);
// import mysql from './node_modules/mysql';

// id = 'dadada';
// pass = 'dda';
// adre = 'dada';

// let insert = `insert into users(id,pass,adress) values('${id}','${pass}','${adre}')`;
// console.log(insert)
//관습상 대문자로 쿼리구문 작성

const connection = mysql.createConnection({
  host: '192.168.0.177',
  //상호유기적 서로가 호스트면서 클라이언트
  port:3306,
  user: 'test',
  password: '1234',
  database: 'testdb'
})

connection.connect();

connection.query('show databases', (error, result, field) => {
  if (error) {
    console.error('안돼네');
  }
  console.log(result)
})
connection.query('use testdb', (error, result, field) => {
  if (error) {
    console.error('안돼네');
  }
  console.log(result)
})
// connection.query('use testdb', (error, result, field) => {
//   if (error) {
//     console.error('안돼네');
//   }
//   console.log(result)
// })

connection.end();