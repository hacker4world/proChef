const twitch = require('twitch-api-v5')
twitch.clientID = 'v4p7octo4gsw6cygjiyv3jbihvmsbe';

twitch.search.channels({query: 'Ninja'} , async (err , res) => {
    console.log(res)
    setTimeout(() => {

    }, 100000)
})