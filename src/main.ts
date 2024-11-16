import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(process.env.PORT);
  logger.log(`
  
 ****     **                   **        **  ********
/**/**   /**                  /**       /** **////// 
/**//**  /**  *****   ****** ******     /**/**       
/** //** /** **///** **//// ///**/      /**/*********
/**  //**/**/*******//*****   /**       /**////////**
/**   //****/**////  /////**  /**   **  /**       /**
/**    //***//****** ******   //** //*****  ******** 
//      ///  ////// //////     //   /////  ////////  

`);

  logger.log(`Application listening on port ${process.env.PORT}`);
}
bootstrap();
