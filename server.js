const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const  {lostItemsRouter}= require('./routes/lostItemsRoutes');
const { generateOTPRouter } = require('./routes/generateOTPRoute');
const { authenticateRouter } = require('./routes/authenticationRoute');

app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', lostItemsRouter);
app.use('/api', authenticateRouter);
app.use('/api', generateOTPRouter);



app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});