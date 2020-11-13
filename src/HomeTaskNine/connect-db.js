const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://Artur:54ak25SGI76@cluster0.tdsae.mongodb.net/products?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}
  );