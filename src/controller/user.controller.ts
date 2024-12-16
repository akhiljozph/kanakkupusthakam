import { Response, Request } from "koa";

import logger from "../common/logger/logger";
import { HttpCodesEnum } from "../common/enum/enum";

export function createUserHandler(request: Request, response: Response) {
    logger.info(`CreateUserHandler: ${request.url} has requested!`);

    let userDetails = request.body;
    let responseStatus: number = HttpCodesEnum.NO_CONTENT;
    let responseMessage: string = "Request pending!";

    try {
        if (!!userDetails) {
            throw({message: "Request body is undefined!"})
        } else {
            responseStatus = HttpCodesEnum.CREATED;
            responseMessage = "User has been created!"
        }
    } catch (error: any) {
        responseStatus = HttpCodesEnum.BAD_REQUEST;
        responseMessage = error.message;
    } finally {
        response.status = responseStatus;
        response.message = responseMessage;
    }
}