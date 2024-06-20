const Skills = require('../models/skill');

const index = (req, res) => {
    res.render('skills/index', { 
        skills: Skills.getAll() 
    });
};

const show = (req, res) => {
    const skill = Skills.getOne(req.params.id); // TODO: we might need to handle strings in getOne
    res.render('skills/show', { skill });
};

module.exports = {
    index,
    show
};
