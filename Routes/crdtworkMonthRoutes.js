const express = require('express');
const router =  express.Router();
const workSumController = require('../Controller/crdtworkMonthController');
/**
 * @swagger
 * /worksum:
 *   get:
 *     tags: [เวลาเข้างานรายเดือน API]
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                     example: John Doe
 */
router.get('/:id',workSumController.getSumWorkMonthById);

module.exports = router;