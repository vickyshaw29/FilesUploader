require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const uploadRoutes=require('./routes/uploads')
const morgan=require('morgan')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(morgan('dev'))
app.use('/public', express.static('public'));

app.use('/api', uploadRoutes)

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(process.env.PORT,()=>console.log('running on port 8000')))
.catch(err=>console.log(err))


















// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname,'/build')))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname, 'build','index.html'))
//     }) 
// }else{
//     app.get('/',(req,res)=>{
//         res.send('API is running')
//     })
// }
// if(process.env.NODE_ENV=='development'){
//     app.use(cors({origin:`${process.env.CLIENT_URL}`}))
// }


