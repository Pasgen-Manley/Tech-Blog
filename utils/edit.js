const { Blog } = require('../models');

const authorEdit = async (req, res, next) => {
  const blogData = await Blog.findByPk(req.params.id);
  if (req.session.user_id !== blogData.user_id) {

    res.status(401).json('Not found!');
    return;

  }

  next();

};

module.exports = authorEdit;