const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
      const response = await Tag.findAll({
        include: [{model: Product}],
      });
      return res.json(response);
  });

router.get('/:id', async (req, res) => {
      const response = await Tag.findByPk(req.params.id, {
        include: [{model: Product}],
      });
      return res.json(response);
  });

router.post('/', async (req, res) => {
  const response = await Tag.create(req.body);
  return res.json(response);
});

router.put('/:id', async (req, res) => {
  const response = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        tag_id: req.params.id,
      },
    }
  );
  return res.json(response);
});

router.delete('/:id', async (req, res) => {
  const response = await Tag.destroy({
    where: {
      tag_id: req.params.id,
    },
  });
  return res.json(response);
});

module.exports = router;
