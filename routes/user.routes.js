const express = require('express')
const router = express.Router()

const userController = require('../controller/users.controller')

router.get('/', userController.list)
router.get('/search', userController.search)
router.get('/create', userController.createGet)
router.post('/create', userController.createPost)
router.get('/:id', userController.detail)

module.exports = router