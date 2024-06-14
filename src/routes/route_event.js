const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/event');

router.get('/create', eventsController.getCreateEventPage);
router.post('/create', eventsController.createEvent);
router.get('/', eventsController.getEventsDate);
router.get('/event/:eventId', eventsController.getEvent);
router.post('/event/:eventId', eventsController.subscribeToEvent);

module.exports = router;