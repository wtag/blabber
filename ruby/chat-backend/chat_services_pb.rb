# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: chat-backend/chat.proto for package 'ChatService'

require 'grpc'
require 'chat-backend/chat_pb'

module ChatService
  module Chat
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'ChatService.Chat'

      rpc :RetrieveMessages, Room, MessageList
      rpc :SendMessage, Message, SendMessageResponse
    end

    Stub = Service.rpc_stub_class
  end
  module Authentication
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'ChatService.Authentication'

      rpc :RetrieveAccessToken, Model::User, AccessToken
    end

    Stub = Service.rpc_stub_class
  end
end