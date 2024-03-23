const mongoose = require('mongoose')
const url = 'mongodb+srv://rohitsharma9169:Rohit270398@cluster0.eduz3fh.mongodb.net/ReactUIHub?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url)

.then((result) => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;