const mongooes = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/EmployeeDB';

mongooes.connect(databaseUrl,{useNewUrlParser: true}, (err) => {
   if(!err) {
       console.log('MongoDB Conncetion Sucessded.');
   } 
   else
   {
       console.log('Error in DB Connection : ' + err);
   }
});

require('./employee.model');