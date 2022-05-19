/**
 * @swagger
 * tags:
 * - name: "Places"
 *   description: "Create, Delete, Edit, Get places."
 * paths:
 *  /api/place/create:
 *   post:
 *    tags:
 *     - "Places"
 *    summary: "Create new place"
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
 *          placeName:
 *           type: string
 *          placeDescription:
 *           type: string
 *          placeLocation:
 *           type: string
 *          placeImg:
 *           type: string
 *          placeTags:
 *           type: array
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
 * /api/place/getPlaces:
 *   get:
 *    tags:
 *     - "Places"
 *    summary: "Get all places"
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
 * 
 * /api/place/getPlaceById:
 *   get:
 *    tags:
 *     - "Places"
 *    summary: "Get place by place Id"
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
 *          placeId:
 *           type: string
 *    responses:
 *      200:
 *        description: A succcessful response
 *        content: 
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/ResponseString'
 *      404:
 *       description: Place with this Id does not exist
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
 *          $ref: '#/components/schemas/ResponseString'
 * 
 * /api/place/deletePlaceById:
 *   delete:
 *    tags:
 *     - "Places"
 *    summary: "Delete place by place Id"
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
 *          placeId:
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