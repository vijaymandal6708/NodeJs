const homePage = (req, res)=>{
   res.render("home");
}

const aboutPage = (req, res)=>{
    res.render("about");
}

module.exports = {
    homePage,
    aboutPage
}