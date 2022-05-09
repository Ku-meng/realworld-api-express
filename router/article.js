const express = require('express')
const articlesCurl = require('../controller/article')

const router = express.Router()

// List Articles
router.get('', articlesCurl.getArticles)

// Feed Articles
router.get('/feed', articlesCurl.getFeedArticles)

// Get Article
router.get('/:slug', articlesCurl.getArticle)

// Create Article
router.post('', articlesCurl.createArticle)

// Update Article
router.put('/:slug', articlesCurl.updateArticle)

// Delete Article
router.delete('/:slug', articlesCurl.updateArticle)

// Add Comments to an Article
router.post('/:slug/comments', articlesCurl.addCommentsToAnArticle)

// Get Comments from an Article
router.get('/:slug/comments', articlesCurl.getCommentsFromAnArticle)

// Delete Comment
router.delete('/:slug/comments/:id', articlesCurl.deleteCommentArticle)

// Favorite Article
router.post('/:slug/favorite', articlesCurl.favoriteArticle)

// Unfavorite Article
router.delete('/:slug/favorite', articlesCurl.unfavoriteArticle)

module.exports = router