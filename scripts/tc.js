const axios = require('axios')
const ora = require('ora')
const spinner = ora().start()
try{
    let response = axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b79600ddb57b4752b567cfd0a2d707bb')
    .then(function(response){
        spinner.stop()
        const articles = response.data.articles;
        console.log('The top headlines from Tech Crunch are :\n')        
        for(article of articles){
            console.log(article.title)
            console.log('\n')
        }
    })
}
catch(err){
    spinner.stop()
    console.log(err)
}