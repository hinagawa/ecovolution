/**
 * @swagger
 * tags:
 * - name: "Authorization"
 *   description: "Sign In, Sign Up  in platform and etc."
 * paths:
 *  /api/sign-up:
 *   post:
 *    tags:
 *     - "Authorization"
 *    summary: "Registration on web-application"
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
 *          name:
 *           type: string
 *          lastname:
 *           type: string
 *          email:
 *           type: string
 *          password:
 *           type: string
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      409:
 *       description: User with this email already exist
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
 * /api/sign-in:
 *   post:
 *    tags:
 *     - "Authorization"
 *    summary: "Authentication on web-application"
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
 *          email:
 *           type: string
 *          password:
 *           type: string
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      404:
 *       description: User not found
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
 * /api/forgot-password:
 *   post:
 *    tags:
 *     - "Authorization"
 *    summary: "Request to reset password by email"
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
 *          email:
 *           type: string
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      404:
 *       description: User with this email does not exist
 *       content: 
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ResponseString'
 *      400:
 *       description: Something went wrong
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
 * /api/reset-password:
 *  post:
 *   tags:
 *    - "Authorization"
 *   summary: "Change password"
 *   consumes:
 *    - application/x-www-form-urlencoded
 *   produces:
 *    - application/json
 *   requestBody:
 *     content:
 *       application/x-www-form-urlencoded:
 *        required: true
 *        schema:
 *         type: object
 *         properties:
 *          password:
 *           type: string
 *   responses:
 *     200:
 *       description: A succcessful response
 *       content: 
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ResponseString'
 *     400:
 *      description: Invalid reset token
 *      content: 
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/ResponseString'
 *     500:
 *       description: Internal Server Error
 *       content: 
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ResponseString'
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