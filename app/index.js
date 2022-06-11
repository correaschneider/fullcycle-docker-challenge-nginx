const app = require('express')()
const random = require('generate-random-data')
const userServices = require('./services/mysql')

app.get('/', async (req, res) => {

    await userServices.createUser({name: random.int(0,1) === 0 ? random.maleFirstName() : random.femaleFirstName() })
    const users = await userServices.getUsers()

    html = '<h1>Full Cycle Rocks!</h1>'

    html += '<ul>'

    users.forEach(user => {
        html += `<li>${user.name}</li>`
    });

    html += '</ul>'

    res.send(html)

})

app.listen(3000, () => {
    console.log('Rodando...');
})