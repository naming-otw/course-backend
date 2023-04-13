import express, {Application} from 'express';
import cors from 'cors';
import homeRouter from './routes/home';
import endpointsRouter from './routes/endpoints';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

app.use('/', homeRouter);
app.use('/api', endpointsRouter);

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});