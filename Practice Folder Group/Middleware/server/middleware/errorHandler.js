const errorHandler = (err, req, res, next)=>{
   res.status(400).send(err.message);
   console.log("this is my error");
}

module.exports = errorHandler;
