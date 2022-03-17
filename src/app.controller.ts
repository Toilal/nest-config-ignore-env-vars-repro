import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  getMyVar (): string {
    return this.appService.getMyVar()
  }
}
