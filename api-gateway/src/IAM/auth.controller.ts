import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  /**
   * @function signUp
   * @description Add new user to customer databases and Provide User name and Password
   * @Body Payload as json data of User information
   * @returns Newly added User confimartion
   */
  @Post('/signup')
  signUpNewUser(@Body() createCustomerDto: CreateCustomerDto) {
    return this.appService.signUp(createCustomerDto);
  }

  /**
   * @function signIn
   * @description Login to user and send JWT Token
   * @Body Payload as Username and Password
   * @returns User Request Auth
   */
  @Post('/login')
  signIn(@Body() loginDetails: Record<string, string>) {
    return this.appService.signIn(loginDetails);
  }
}
