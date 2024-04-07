import { Module } from '@nestjs/common';
import { RoomService } from './services/room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room, ConnectedUser, Message, RoomParticipantsUser } from './entities';
import { UserModule } from '../user/user.module';
import { ConnectedUserService } from './services/connected-user.service';
import { MessageService } from './services/message.service';

@Module({
  providers: [RoomService, ConnectedUserService, MessageService],
  imports: [
    TypeOrmModule.forFeature([
      Room,
      ConnectedUser,
      Message,
      RoomParticipantsUser,
    ]),
    UserModule,
  ],
})
export class ChatModule {}
