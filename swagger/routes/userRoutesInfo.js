/**
 * @swagger
 * tags:
 * - name: "Users"
 *   description: "Get, Edit user information."
 * paths:
 *  /api/user/getUsers:
 *   get:
 *    tags:
 *     - "Users"
 *    summary: "Get users"
 *    consumes:
 *     - application/x-www-form-urlencoded
 *    produces:
 *     - application/json
 *    requestBody:
 *     content:
 *       application/x-www-form-urlencoded:
 *        required: true
 *        schema:
 *         type: object
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      500:
 *        description: Internal Server Error
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 * 
 * /api/user/getUserById:
 *   get:
 *    tags:
 *     - "Users"
 *    summary: "Get user by user Id"
 *    consumes:
 *     - application/x-www-form-urlencoded
 *    produces:
 *     - application/json
 *    requestBody:
 *     content:
 *       application/x-www-form-urlencoded:
 *        required: true
 *        schema:
 *         type: object
 *         properties:
 *          userId:
 *           type: string
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      404:
 *       description: User with this Id does not exist
 *       content: 
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ResponseString'
 *      500:
 *        description: Internal Server Error
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 * 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ResponseString:
 *      properties:
 *        success:
 *         type: boolean
 *        message: 
 *         type: string
 */