const mysql = require('mysql');
// console.log(id);
// import mysql from './node_modules/mysql';

id = 'dadada';
pass = 'dda';
adre = 'dada';

let insert = `insert into users(id,pass,adress) values('${id}','${pass}','${adre}')`;
console.log(insert)
//관습상 대문자로 쿼리구문 작성

const connection = mysql.createConnection({
  host: 'localhost',
  //상호유기적 서로가 호스트면서 클라이언트
  user: 'root',
  password: 'root',
  database: 'tester'
})

connection.connect();

connection.query(insert, (error, result, field) => {
  if (error) {
    console.error('안돼네');
  }
  console.log(result)
})

connection.end();