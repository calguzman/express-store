const db = require('mongoose');

db.Promise = global.Promise;  // Para que Mongoose use las promesas nativas de JavaScript.

async function connect (url){
  try {
      await db.connect(url,{
      useNewUrlParser:true,
      useUnifiedTopology: true
    })
    console.log('[SERVER:] DB IS CONNECTED SUCCESS FULL');
  } catch (error) {
    console.error("ERROR CONNECTING TO DB: "+error);
  }
}
module.exports = connect;

