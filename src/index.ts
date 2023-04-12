import express, {Application} from 'express';
const app: Application = express();
import cors from 'cors';
import homeRouter from './routes/home';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

app.get('/', homeRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});