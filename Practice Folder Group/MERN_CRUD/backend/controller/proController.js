const proModel = require('../models/proModel');

const homePg = (req, res) => {
    res.send('home page of server');
}

const saveData = async (req, res) => {
    console.log(req.body)
    const { pname, pcolor, psize, pprice } = req.body;
    const prodata = await proModel.create({
        pname: pname,
        pcolor: pcolor,
        psize: psize,
        pprice: pprice,
    })
    res.send("data save Successfully...");
}

const dataDisplay = async (req, res) => {
    const alldata = await proModel.find();
    console.log(alldata);
    res.send(alldata);
}

const dataSearch = async (req, res) => {
    const { pname } = req.body;
    const oneData = await proModel.find({ pname: pname });
    console.log(oneData);
    res.send(oneData);
}

const dataUpdate = async (req, res) => {
    const data = await proModel.find();
    res.send(data)
    console.log(data)
}

const deleteUpdate = async (req, res) => {
    const { id } = req.query
    const data = await proModel.findByIdAndDelete(id);
    console.log(`data of key ${id} delete successfully`)
    res.send({ msg: `data of key ${id} delete successfully` });
}

const editUpdate = async (req, res) => {
    const { id } = req.params;
    const onedata = await proModel.findById(id);
    console.log(onedata);
    res.send(onedata);
}

const editSave = async (req, res) => { 
    const { _id, pname, pcolor, psize, pprice } = req.body;
    const data = await proModel.findByIdAndUpdate(_id, {
        pname: pname,
        pcolor: pcolor,
        psize: psize,
        pprice: pprice,
    })
    console.log(data);
    res.send(data);  
}

module.exports = {
    homePg,
    saveData,
    dataDisplay,
    dataSearch,
    dataUpdate,
    deleteUpdate,
    editUpdate,
    editSave,

}
