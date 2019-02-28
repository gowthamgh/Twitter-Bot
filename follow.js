var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'bGlHwihMkfvlh90BCqw0UF8Tc',
    consumer_secret: 'WIo1UAses4mGc6FDIkMm2WOMxRLEWFMhtsBTGe26ywNTAfdVNS',
    access_token_key: '163440698-Xc0s1FYNWHT8SQS81fodIfZkYelYNNDZXbSL0lJk',
    access_token_secret: 'PDlWorCZQyi9PnUoI6fVroX9pMaxqiRFDoASVblNdkRSh'
});

var params = {
    q: '#javascript',
    count: 2,
    result_type: 'recent',
    lang: 'en'
}

client.get('search/tweets', params, function(err, data, response){
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let id =  { id: data.statuses[i].id_str }
            client.post('favorites/create', id, function(err, response){
                if(err){
                    console.log(err[0].message);
                }else{
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
                }
            });
        }
    }else{
        console.log(err);
    }
})
