import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';

const app = express();
// annotate the PORT var (ie adding a type)
const PORT: number = 3000;

// mongoose connection
mongoose
  .connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo client'));

// bodyparser setup
app.use(express.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
