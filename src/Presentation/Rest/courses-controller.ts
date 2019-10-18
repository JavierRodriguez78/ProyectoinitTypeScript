import { Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
//import {injectable} from "inversify";
//import * as HTTP_CODES from 'http-status-codes';
//import { logger } from '../../utils/logger';
//import { CustomerApplicationService } from '../../application/customer/customer-application-service';
//import { RegisterCustomerCommand } from '../../application/customer/commands/register-customer-command';
import {Logger} from "../../Shared/Infraestructure/Logging/Logger-Service"

@controller('/api')
export class CoursesController {

    constructor(){}

    @httpGet('/courses')
    public getCourses(request: any, response: Response){
      Logger.info("Se lanzaprueba");
        response.send("Es una prueba");
    }

}
