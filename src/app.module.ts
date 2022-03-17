import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({
    expandVariables: true,
    ignoreEnvVars: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
