# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: chat-backend/chat.proto for package 'ChatService'

require 'grpc'
require 'chat-backend/chat_pb'

module ChatService
  module Chat
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'ChatService.Chat'

      rpc :RetrieveMessages, ::ChatService::Room, ::ChatService::MessageList
      rpc :SendMessage, ::ChatService::Message, ::ChatService::SendMessageResponse
      rpc :RetrieveAvailableCustomerRooms, ::Model::User, stream(::ChatService::Room)
      rpc :RetrieveAvailableAgentRooms, ::Model::User, stream(::ChatService::RoomCategory)
      rpc :MarkMessageAsSeen, ::ChatService::RemoveMessageSeenRequest, ::ChatService::RemoveMentionAndSeenResponse
      rpc :MarkMentionAsSeen, ::ChatService::RemoveMentionRequest, ::ChatService::RemoveMentionAndSeenResponse
      rpc :GetAllTenants, ::ChatService::Empty, stream(::ChatService::Tenant)
      rpc :MessageSeenStatus, ::ChatService::MessageSeenStatusRequest, ::ChatService::MessageSeenStatusResponse
      rpc :MarkMessageSeenForUser, ::ChatService::MarkMessageSeenForUserRequest, ::ChatService::RemoveMentionAndSeenResponse
      rpc :SendAutomatedMessageToTraveller, ::ChatService::SendAutomatedMessageRequest, ::ChatService::SendAutomatedMessageResponse
    end

    Stub = Service.rpc_stub_class
  end
  module Authentication
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'ChatService.Authentication'

      rpc :RetrieveAccessToken, ::Model::User, ::ChatService::AccessToken
    end

    Stub = Service.rpc_stub_class
  end
end
