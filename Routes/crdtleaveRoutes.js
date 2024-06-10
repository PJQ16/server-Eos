const express = require('express');
const router =  express.Router();
const leaveController = require('../Controller/crdtleaveController');

/**
 * @swagger
 * /leaves:
 *   get:
 *     tags: [Leaves API]
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
router.get('/',leaveController.getAllLeaves);

/**
 * @swagger
 * /leaves/:id:
 *   get:
 *     tags: [Leaves API]
 *     summary: Retrieve a single user by ID
 *     description: Retrieve a single user from the database by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The user ID.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The user's name.
 *                   example: John Doe
 *       404:
 *         description: User not found.
 */
router.get('/:id',leaveController.getLeavesById);

module.exports = router;