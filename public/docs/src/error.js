/**
 * @apiDefine BadRequestError
 * @apiError  BadRequestError 請求失敗
 * @apiErrorExample {json} BadRequestError
 * HTTP/1.1 401 Bad Request
 * {
 *   error: 'Bad Request'
 * }
 */

/**
 * @apiDefine UnauthorizedError
 * @apiError  UnauthorizedError 授權失敗錯誤
 * @apiErrorExample {json} UnauthorizedError
 * HTTP/1.1 401 Unauthorized
 * {
 *   error: 'Unauthorized'
 * }
 */

/**
 * @apiDefine ForbiddenError
 * @apiError  ForbiddenError 拒絕存取錯誤
 * @apiErrorExample {json} ForbiddenError
 * HTTP/1.1 403 ForbiddenError
 * {
 *   error: 'Permission Deny'
 * }
 */

 /**
 * @apiDefine NotFoundError
 * @apiError  NotFoundError 存取失敗
 * @apiErrorExample {json} NotFoundError
 * HTTP/1.1 404 Not Found
 * {
 *   error: 'Not Found'
 * }
 */

/**
 * @apiDefine UnprocessableError
 * @apiError  UnprocessableError 無法存取
 * @apiErrorExample {json} UnprocessableError
 * HTTP/1.1 422 Unprocessable
 * {
 *   error: 'Unprocessable'
 * }
 */