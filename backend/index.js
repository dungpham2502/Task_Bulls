const express = require('express');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoute');
const userRoutes = require('./routes/userRoute');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();

//connect to database
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/jobs/', jobRoutes);
app.use('/api/user/', userRoutes);

app.listen(3000, () => {
    console.log('App listened on PORT 3000');
})