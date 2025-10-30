const homePage = (req, res) => {
    res.render("homepage");
};

const datasavePage = async (req, res) => {
    console.log("Data received:", req.body);
    res.render("datasave", { data: req.body });
    
};

module.exports = {
    homePage,
    datasavePage,
};
