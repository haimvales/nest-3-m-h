// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import { UsersService } from '../../users/users.service';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
    
    
//     use(req: any, res: any, next: () => void){}

//     const len = usersService.findAll().length


//     //  {
        
    
//     if(req.body.password === "1234"){
//       req.body.role = 'Soldier';
//       console.log(req.body)
//       console.log(1)
//       next()
//     }else  if(req.body.password === "2468"){
//       req.body.role = 'commander';
//       console.log(2)
//       console.log(req.body)
//       next()
//     }else{
//       console.log(3)
//       console.log(req.body)   
//       return res.json({err:'password false'})
//     }
//   }
// }