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
 * /api/forgot-password:
 *   post:
 *    tags:
 *     - "Authorization"
 *    summary: "Request to reset password by email"
 *    consumes:
 *     - application/x-www-form-urlencoded
 *    produces:
 *     - application/json
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "User email"
 *      required: true
 *      schema:
 *       $ref: '#/components/schemas/ForgotPassword'
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
 *   parameters:
 *   - in: "body"
 *     name: "body"
 *     description: "New user's password"
 *     required: true
 *     schema:
 *      $ref: '#/components/schemas/ResetPassword'
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
 *        success:
 *         type: boolean
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
 *     ForgotPassword:
 *      required:
 *      - email
 *      properties:
 *       email:
 *        type: string
 *      ResetPassword:
 *       required:
 *       - newPassword
 *       properties:
 *        newPassword:
 *         type: string
 *  
 */