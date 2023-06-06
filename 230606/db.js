import http from 'http'
import mysql from 'mysql2'

const db = mysql.createConnection({
  host: '121.184.34.150',
  port: 3306,
  user: 'tester',
  password: 'tester',
  database: 'IA'
})

db.connect(()=>{
  console.log('db connect')
})

const server = http.createServer((req,res)=>{
  if(req.url==='/'&&req.method==='GET'){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('웅!')
    res.end()
  }else if(req.method==='POST'&&req.url==='/home'){
    let datas = ""
    req.on('data', (data)=>{
      datas +=data
    })
    req.on('end',()=>{
      console.log(JSON.parse(datas))
      // console.log(typeof datas)
      const jsondats = JSON.parse(datas)
      
      res.writeHead(200, {'Content-Type':'application/json'})
      res.write(JSON.stringify(jsondats))
      res.end()
    })
  }
}
).listen(2080)


// db.query('show tables',(result, err)=>{
//   console.log(result)
// })