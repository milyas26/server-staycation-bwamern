const router = require('express').Router();
const adminController = require('../controllers/adminController');
const {uploadSingle, uploadMultiple} = require('../middlewares/multer')

router.get('/dashboard', adminController.viewDashboard);
//ENDPOINT CATEGORY
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);
//END CATEGORY

//ENDPOINT BANK
router.get('/bank', adminController.viewBank);
router.post('/bank', uploadSingle, adminController.addBank);
router.put('/bank', uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);
//END BANK

//ENDPOINT ITEM
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

//END ITEM

router.get('/booking', adminController.viewBooking);

module.exports = router;