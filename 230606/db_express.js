import express from 'express'

const app = express();

// app.get('/', (req,res)=>{
//   console.log('connect')
//   res.send('웅?')
// })

app.post('/login', (req,res)=>{
  let datas = ""
  req.on('data', (data)=>{
    datas += data
  })
  req.on('end',()=>{
    console.log(typeof JSON.parse(datas))
    res.json(JSON.parse(datas))
  })
})

app.listen(2080)