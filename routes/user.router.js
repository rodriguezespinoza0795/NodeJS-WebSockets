const express = require('express');
const multer = require('multer')

const UserService = require('../services/user.service');
// const validatorHandler = require('./../middlewares/validator.handler');
// const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

const storage  = multer.diskStorage({
  destination : "public/files",
  filename : function (req, pathImage, cb) {
      cb(null, Date.now() + pathImage.originalname)
  }
})

const upload = multer({ storage: storage });


router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post('/', 
  upload.single('pathImage'),
  // validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const pathImage = req.file?.path ? req.file.path : 'src/image'
      const newUser = await service.create({...body, pathImage: pathImage });
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

// router.get('/:id',
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const category = await service.findOne(id);
//       res.json(category);
//     } catch (error) {
//       next(error);
//     }
//   }
// );


// router.patch('/:id',
//   validatorHandler(getUserSchema, 'params'),
//   validatorHandler(updateUserSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const category = await service.update(id, body);
//       res.json(category);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/:id',
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(201).json({id});
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;