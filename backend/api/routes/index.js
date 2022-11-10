import router from './route.js';

//setting default route 
const routes =(app) =>{
    app.use('/ping',(req,res)=>res.send('ping pong'))
    // app.use('/api/courses',router)
    app.use('/api',router);
}

export default routes;