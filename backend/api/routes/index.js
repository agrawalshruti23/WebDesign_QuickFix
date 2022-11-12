import router from './route.js';
import coursesRouter from './coursesRouter.js';

//setting default route 
const routes =(app) =>{
    app.use('/ping',(req,res)=>res.send('ping pong'))
    // app.use('/api/courses',router)
    app.use('/api',router);
    app.use('/api/courses',coursesRouter);
}

export default routes;