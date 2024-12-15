import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'NATS_CLIENT',
              transport: Transport.NATS,
              options: {
                servers: ['nats://nats:4222']
              }
            }
          ]),
    ],
    exports: [
        ClientsModule.register([
            {
              name: 'NATS_CLIENT',
              transport: Transport.NATS,
              options: {
                servers: ['nats://nats:4222']
              }
            }
          ]),
    ],
})
export class NatsClintModule {}