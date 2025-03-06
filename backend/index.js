const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./Models/db'); // Connect to MongoDB

const authRoutes = require('./routes/AuthRouter');
const productRoutes = require('./routes/ProductRouter');

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
