const express = require('express');

// const UserService = require('./../services/user.service');
// const validatorHandler = require('./../middlewares/validator.handler');
// const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
// const service = new UserService();

router.get('/', async (req, res, next) => {
  res.json({
    "body":"User Get ALL"
  });
  // try {
  //   const categories = await service.find();
  //   res.json(categories);
  // } catch (error) {
  //   next(error);
  // }
});

router.get('/:id',
  // validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    res.json({
      "body":"User By id"
    });
    // try {
    //   const { id } = req.params;
    //   const category = await service.findOne(id);
    //   res.json(category);
    // } catch (error) {
    //   next(error);
    // }
  }
);

router.post('/',
  //validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    res.json({
      "body":"User Post"
    });
    // try {
    //   const body = req.body;
    //   const newCategory = await service.create(body);
    //   res.status(201).json(newCategory);
    // } catch (error) {
    //   next(error);
    // }
  }
);

router.patch('/:id',
  // validatorHandler(getUserSchema, 'params'),
  // validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    res.json({
      "body":"User Update"
    });
    // try {
    //   const { id } = req.params;
    //   const body = req.body;
    //   const category = await service.update(id, body);
    //   res.json(category);
    // } catch (error) {
    //   next(error);
    // }
  }
);

router.delete('/:id',
  //validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    res.json({
      "body":"User Delete"
    });
    // try {
    //   const { id } = req.params;
    //   await service.delete(id);
    //   res.status(201).json({id});
    // } catch (error) {
    //   next(error);
    // }
  }
);

module.exports = router;

