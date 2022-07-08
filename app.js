const {questions,saveData} = require('./contact')

const run = async () => {
    const name =  await questions('Whats is your name?')
    const phone =  await questions('Whats is your mobile phone number?')
    const email=  await questions('Whats is your email address?')

    saveData(name,phone,email)
}

run()

// rl.question('Whats is your name?',(name)=>{
//     rl.question('Your Mobile Phone Number',(phone)=>{
//         const contact ={name,phone}
//         const file = fs.readFileSync('data/contacts.json','utf-8')
//         const contacts=JSON.parse(file)
//         contacts.push(contact)
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//         console.log('terimakasih sudah menginput data!')
//         rl.close()
//     })
// })