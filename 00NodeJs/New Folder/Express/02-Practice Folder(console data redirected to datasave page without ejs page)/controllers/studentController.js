const homePage = (req, res) => {
    res.render("homepage");
};

const datasavePage = (req, res) => {
    console.log("Data received:", req.body);
    res.send(`<h1>Data saved successfully!</h1><pre>${JSON.stringify(req.body, null, 2)}</pre>`);
};

module.exports = {
    homePage,
    datasavePage,
};
