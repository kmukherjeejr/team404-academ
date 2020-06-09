const {google} = require('googleapis');
const keys= require('./keys.json');

//http:/developers.google.com/sheets/api/quickstart/nodejs
//console.developers.google.com
//http:/developers.google.com/identity/protocols/googlescopes

const client= new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err,tokens){

    if(err){
        console.log(err);
        return;
    }else
    {
        console.log('connected');
        gsrun(client)  
    }

});

async function gsrun(cl){
    const gsapi= google.sheets({version:'v4',auth: cl})
    const opt = {
        spreadsheetId:'1phhNGoB-a1OzlGhvRar-63cuoH9AFji7NeYwrZSjyaQ',
        range:'Maths'
    }
   var data= await gsapi.spreadsheets.values.get(opt);
   var dataArray=data.data.values;
   let newDataArray = dataArray.map(function(r){
    r.push(r[0]+'*'+r[2]);   
    return r;

   });
   //
   const updateOptions = {
    spreadsheetId:'1phhNGoB-a1OzlGhvRar-63cuoH9AFji7NeYwrZSjyaQ',
    range:'Maths',
    valueInputOption: 'USER-ENTERED',
    resource:{values: newDataArray}
}
let res=await gsapi.spreadsheets.values.update(updateOptions);
console.log(res);
}
   