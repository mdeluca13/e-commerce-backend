const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
// be sure to include its associated Product data
      const response = await Tag.findAll();
      return res.json(response);
  });

router.get('/:id', async (req, res) => {
// be sure to include its associated Product data
      const response = await Tag.findByPk(req.params.tag_id);
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
        tag_id: req.params.tag_id,
      },
    }
  );
  return res.json(response);
});

router.delete('/:id', async (req, res) => {
  const response = await Tag.destroy({
    where: {
      tag_id: req.params.tag_id,
    },
  });
  return res.json(response);
});

module.exports = router;
