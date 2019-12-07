const fs=require('fs')
const configFile ='./config.json'
var conf=null

const getConfig=section =>{
    if(conf ==null){
        if(fx.existSync(configFile)){
            var json =fs.readFileSync(configFile)
            conf =JSON.parse (json)
        }
        else {
            console.error('Couldn find config file')
        }
    }
    return conf[section ]
}
module.exports={
    getConfig
}