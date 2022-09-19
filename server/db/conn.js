
const mongoose = require("mongoose")


const db ="mongodb+srv://anjan:anjan123@cluster0.l3uaxnd.mongodb.net/Amazonwebs?retryWrites=true&w=majority";

mongoose.connect(db).then(() => {
    console.log(`Database is Connected`);
}).catch((e) => console.log(`Sorry No connection`));
