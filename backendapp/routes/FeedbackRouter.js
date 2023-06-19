const express = require("express");
const feedbackCtrl = require("../controllers/FeedbackController");
const router = express.Router();


// récupérer la liste de toutes les feedbacks
router.get('/feedback', feedbackCtrl.getAllfeedbacks);

//récupérer les infos sur un seul feedback 
router.get('/feedback/:id', feedbackCtrl.getFeedback);

//création d'un nouveau feedback
router.post('/feedback', feedbackCtrl.createFeedback);

//Update d'un feedback
router.put('/feedback/:id', feedbackCtrl.updateFeedback);

//suppression d'un feedback 
router.delete('/feedback/:id', feedbackCtrl.deleteFeedback);

module.exports = router;