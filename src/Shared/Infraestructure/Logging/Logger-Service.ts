import * as winston from 'winston';


const Logger = winston.createLogger({
  level:'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new (winston.transports.File)({
     filename: 'logs/info.log',
      handleExceptions: true,
      maxsize: 10242880, //10MB
      maxFiles: 5,
      })
  ]
});

export { Logger };
