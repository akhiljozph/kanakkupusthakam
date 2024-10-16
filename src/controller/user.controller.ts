import { Response, Request } from "koa";

import log from "../common/logger/logger";
import { HttpCodesEnum } from "../common/enum/enum";
import logger from "../common/logger/logger";

export function createUserHandler(request: Request, response: Response) {
    log.info(`CreateUserHandler: ${request.url} has requested!`);

    let userDetails = request.body;
    let responseStatus: number = HttpCodesEnum.NO_CONTENT;

    try {
        if (userDetails) {
            responseStatus = HttpCodesEnum.CREATED;
        } else {
            throw("Request body is undefined!")
        }
    } catch (error) {
        responseStatus = HttpCodesEnum.BAD_REQUEST;
    } finally {
        response.status = responseStatus;
    }
}