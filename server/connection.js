const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mohammedrouamchi:nodereal@cluster0.wrsied8.mongodb.net/all-data?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected on http://localhost:4000')
});