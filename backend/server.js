
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { port } = require('./config/config');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const prebookingRoutes = require('./routes/prebookingRoutes'); 

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://stupendous-meringue-b0b27a.netlify.app'
}));

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/auth', authRoutes);
app.use('/api/prebooking', prebookingRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});