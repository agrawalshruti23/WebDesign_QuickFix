import app from './api/app.js';

//setting port for local host to 4000
const port =4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});