/**
 * @swagger
 * tags:
 * - name: "Articles"
 *   description: "Create, Delete, Edit, Get articles."
 * paths:
 *  /api/article/create:
 *   post:
 *    tags:
 *     - "Articles"
 *    summary: "Create new article"
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
 *          articleName:
 *           type: string
 *          articleText:
 *           type: string
 *          articleImg:
 *           type: string
 *          articleAuthorId:
 *           type: string
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
 * /api/article/getArticles:
 *   get:
 *    tags:
 *     - "Articles"
 *    summary: "Get all articles"
 *    consumes:
 *     - application/x-www-form-urlencoded
 *    produces:
 *     - application/json
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
 * /api/article/getArticleById:
 *   get:
 *    tags:
 *     - "Articles"
 *    summary: "Get article by article Id"
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
 *          articleId:
 *           type: string
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      404:
 *       description: Article with this Id does not exist
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
 * /api/article/getArticlesByAuthorId:
 *  get:
 *   tags:
 *    - "Articles"
 *   summary: "Get articles by author Id"
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
 *          authorId:
 *           type: string
 *   responses:
 *     200:
 *       description: A succcessful response
 *       content: 
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/ResponseString'
 *     404:
 *      description: Articles or user doesn't exist
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
 * 
 * /api/article/deleteArticleById:
 *   delete:
 *    tags:
 *     - "Articles"
 *    summary: "Delete article by article Id"
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
 *          articleId:
 *           type: string
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