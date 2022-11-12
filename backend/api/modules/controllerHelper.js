export const setResponse =(obj, response) =>{
    response.status(200);
    response.json(obj);
}

export const setError =(err,response) => {
    console.log("Error is here"+err)
    response.status(500);
    response.json(err);
}