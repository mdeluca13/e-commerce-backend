const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const response = await Category.findAll({
    include: [{model: Product}],
  });
  return res.json(response);
});

router.get('/:id', async (req, res) => {
  const response = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
  });
  return res.json(response);
});

router.post('/', async (req, res) => {
  const response = await Category.create(req.body);
  return res.json(response);
});

router.put('/:id', async (req, res) => {
  const response = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        category_id: req.params.id,
      },
    }
  );
  return res.json(`Category has been Updated`);
});

router.delete('/:id', async (req, res) => {
  const response = await Category.destroy({
    where: {
      category_id: req.params.id,
    },
  });
  return res.json(`Category has been Deleted`);
});

module.exports = router;
