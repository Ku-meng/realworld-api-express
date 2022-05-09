const express = require('express')

const router = express.Router()

// 用户
router.use(require('./user'))

// 用户资料
router.use('/profiles', require('./profile'))

// 文章列表
router.use('/articles', require('./article'))

// 标签
router.use('/tags', require('./tag'))

module.exports = router