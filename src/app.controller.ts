import { Controller, Get, Inject, Param } from '@nestjs/common';
import { of } from 'rxjs';
import { APP_INJECTION_TOKENS } from './tokens/app-injection-tokens.config';

@Controller()
export class AppController {
  constructor(
    @Inject(APP_INJECTION_TOKENS.RANDOM_STRING)
    private getRandomString: () => string
  ) {}

  @Get('cc')
  getHello() {
    return this.getRandomString();
  }
  @Get(':something')
  getSomething(
    @Param('something') something
  ) {
    return something;
  }
  
}
