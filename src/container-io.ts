//import { interfaces, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';

import './Presentation/Rest/courses-controller';



let container = new Container();

//Courses
//container.bind<interfaces.Controller>(TYPE.Controller).to(CoursesController).inSingletonScope().whenTargetNamed('CoursesController');



export default container;