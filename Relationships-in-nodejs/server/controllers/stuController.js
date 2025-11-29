const dataSave=(req,res)=>{
    console.log(req.body);
    res.send("okk");
};

module.exports = {
    dataSave,
}