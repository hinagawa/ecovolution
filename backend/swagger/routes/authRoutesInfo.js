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
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for account creation"
 *      required: true
 *      schema:
 *       $ref: '#/components/schemas/SignUpInput'
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
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for authorization"
 *      required: true
 *      schema:
 *       $ref: '#/components/schemas/SignInInput'
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
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SignUpInput:
 *       required:
 *       - name
 *       - lastname
 *       - email
 *       - password
 *       properties:
 *         name:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         password: 
 *           type: string 
 *     ResponseString:
 *      properties:
 *        message: 
 *         type: string
 *     SignInInput:
 *       required:
 *       - email
 *       - password
 *       properties:
 *         email:
 *           type: string
 *         password: 
 *           type: string   
 *  
 */