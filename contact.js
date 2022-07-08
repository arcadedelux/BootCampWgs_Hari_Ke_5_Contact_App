const fs =require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  //membuat folder data apabila tidak ada
  const dirPath='./data'
  if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
  }
//membuat filecontacts.json jika belum ada
  const dataPath='./data/contacts.json'
  if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
  }

  //fungsi Menanyakan Data
  const questions=(ask)=>{
    return new Promise((resolve)=>{
        rl.question(ask,(data)=>{
            resolve(data)
        })
    })
  }

 const saveData =(name,phone,email)=>{
    const contact = {name,phone,email}
    const file = fs.readFileSync('data/contacts.json','utf-8')
        const contacts=JSON.parse(file)
        contacts.push(contact)
        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
        console.log('terimakasih sudah menginput data!')
        rl.close()
}

module.exports={questions,saveData}