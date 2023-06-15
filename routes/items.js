const router = require('express').Router()
const { addItem, getItems, upgradeItem, downgradeItem, deleteItem } = require('../controllers/items')
const ensureAuth = require('../middleware/ensureAuth')

router.post('/addItem', ensureAuth, addItem)

router.get('/', ensureAuth, getItems)

router.put('/upgrade', ensureAuth, upgradeItem)

router.put('/downgrade', ensureAuth, downgradeItem)

router.delete('/delete/:id', ensureAuth, deleteItem)

module.exports = router