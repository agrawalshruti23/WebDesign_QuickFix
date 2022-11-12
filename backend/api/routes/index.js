import router from './route.js';
import coursesRouter from './coursesRouter.js';
import userTypeRouter from './userTypeRouter.js';

//setting default route 
const routes =(app) =>{
    app.use('/ping',(req,res)=>res.send('ping pong'))
    app.use('/api/courses',coursesRouter);
    app.use('/api/userType',userTypeRouter);
    app.use('/api',router);
   
}

export default routes;