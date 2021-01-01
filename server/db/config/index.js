const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Mongo DB Connected');
} catch (error) {
  console.log(error);
}
