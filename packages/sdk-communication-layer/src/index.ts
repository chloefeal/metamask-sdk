import { ECIES, ECIESProps } from './ECIES';
import { RemoteCommunication } from './RemoteCommunication';
import { SocketService } from './SocketService';
import { CommunicationLayerPreference } from './types/CommunicationLayerPreference';
import { MessageType } from './types/MessageType';
import { WebRTCLib } from './types/WebRTCLib';
import { DappMetadata } from './types/DappMetadata';
import { CommunicationLayerMessage } from './types/CommunicationLayerMessage';
import { OriginatorInfo } from './types/OriginatorInfo';
import { WalletInfo } from './types/WalletInfo';
import { ConnectionStatus } from './types/ConnectionStatus';
import { ChannelConfig } from './types/ChannelConfig';
import { KeyInfo } from './types/KeyInfo';

export type {
  WebRTCLib,
  KeyInfo,
  WalletInfo,
  DappMetadata,
  ChannelConfig,
  CommunicationLayerMessage,
  OriginatorInfo,
  ECIESProps,
};

export {
  RemoteCommunication,
  ConnectionStatus,
  SocketService,
  ECIES,
  MessageType,
  CommunicationLayerPreference,
};
