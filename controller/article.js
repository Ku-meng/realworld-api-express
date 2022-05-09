// List Articles
exports.getArticles = async (req, res, next) => {
  try {
    res.send('get ')
  } catch (error) {
    next(error)
  }
}

// Feed Articles
exports.getFeedArticles = async (req, res, next) => {
  try {
    res.send('get /feed')
  } catch (error) {
    next(error)
  }
}

// Get Article
exports.getArticle = async (req, res, next) => {
  try {
    res.send('get /:slug')
  } catch (error) {
    next(error)
  }
}

// Create Article
exports.createArticle = async (req, res, next) => {
  try {
    res.send('post ')
  } catch (error) {
    next(error)
  }
}

// Update Article
exports.updateArticle = async (req, res, next) => {
  try {
    res.send('put /:slug')
  } catch (error) {
    next(error)
  }
}

// Delete Article
exports.updateArticle = async (req, res, next) => {
  try {
    res.send('delete /:slug')
  } catch (error) {
    next(error)
  }
}

// Add Comments to an Article
exports.addCommentsToAnArticle = async (req, res, next) => {
  try {
    res.send('post /:slug/comments')
  } catch (error) {
    next(error)
  }
}

// Get Comments from an Article
exports.getCommentsFromAnArticle = async (req, res, next) => {
  try {
    res.send('get /:slug/comments')
  } catch (error) {
    next(error)
  }
}

// Delete Comment
exports.deleteCommentArticle = async (req, res, next) => {
  try {
    res.send('delete /:slug/comments/:id')
  } catch (error) {
    next(error)
  }
}

// Favorite Article
exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('post /:slug/favorite')
  } catch (error) {
    next(error)
  }
}

// Unfavorite Article
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send('delete /:slug/favorite')
  } catch (error) {
    next(error)
  }
}
