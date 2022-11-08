import router from './route.js';

//setting default route 
const routes =(app) =>{
    app.use('/api/',router);
}

export default routes;