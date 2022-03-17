import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  constructor (private configService: ConfigService) {
  }

  getMyVar (): string {
    return this.configService.get('MY_VAR')
  }
}
