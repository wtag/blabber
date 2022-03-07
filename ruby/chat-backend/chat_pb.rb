# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: chat-backend/chat.proto

require 'google/protobuf'

require 'model/user_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("chat-backend/chat.proto", :syntax => :proto3) do
    add_message "ChatService.Message" do
      optional :id, :int64, 1
      optional :timestamp, :string, 2
      optional :tenant, :string, 3
      optional :roomUid, :string, 4
      optional :text, :string, 5
      repeated :users, :message, 6, "Model.User"
      repeated :mentionedUsers, :message, 7, "Model.User"
      optional :messageType, :string, 8
      optional :quotedMessage, :message, 9, "ChatService.Message"
      optional :sender, :message, 10, "Model.User"
    end
    add_message "ChatService.MessageList" do
      repeated :messages, :message, 1, "ChatService.Message"
    end
    add_message "ChatService.SendMessageResponse" do
      optional :sent, :bool, 1
      optional :messageId, :int64, 2
    end
    add_message "ChatService.Room" do
      optional :id, :int64, 1
      optional :uid, :string, 2
      optional :type, :string, 3
      optional :title, :string, 4
      optional :tenant, :string, 5
      repeated :users, :message, 6, "Model.User"
      optional :lastSeenMessageTimestamp, :string, 7
      repeated :messageSeens, :message, 8, "ChatService.MessageSeen"
      repeated :mentions, :message, 9, "ChatService.Mention"
      optional :lastMessage, :string, 10
      optional :lastMessageTimestamp, :string, 11
      optional :lastMessageType, :string, 12
      optional :roomCategoryTitle, :string, 13
    end
    add_message "ChatService.RoomCategory" do
      optional :title, :string, 1
      optional :type, :string, 2
      repeated :rooms, :message, 3, "ChatService.Room"
    end
    add_message "ChatService.Empty" do
    end
    add_message "ChatService.AccessToken" do
      optional :token, :string, 1
    end
    add_message "ChatService.Mention" do
      optional :id, :int64, 1
      optional :messageId, :int64, 2
      optional :roomUid, :string, 3
      optional :userId, :int64, 4
      optional :status, :string, 5
      optional :tenant, :string, 6
    end
    add_message "ChatService.MessageSeen" do
      optional :id, :int64, 1
      optional :messageId, :int64, 2
      optional :roomUid, :string, 3
      optional :userId, :int64, 4
      optional :tenant, :string, 5
      optional :status, :string, 6
      optional :timestamp, :string, 7
    end
    add_message "ChatService.RemoveMentionRequest" do
      optional :tenant, :string, 1
      optional :roomUid, :string, 2
      optional :user, :message, 3, "Model.User"
      optional :mentionId, :int64, 4
      optional :messageId, :int64, 5
    end
    add_message "ChatService.RemoveMessageSeenRequest" do
      optional :tenant, :string, 1
      optional :roomUid, :string, 2
      optional :user, :message, 3, "Model.User"
      optional :messageSeenId, :int64, 4
      optional :messageId, :int64, 5
    end
    add_message "ChatService.RemoveMentionAndSeenResponse" do
      optional :response, :string, 1
    end
    add_message "ChatService.Tenant" do
      optional :identifier, :string, 1
    end
    add_message "ChatService.MessageSeenStatusRequest" do
      optional :messageId, :int64, 1
      optional :user, :message, 2, "Model.User"
    end
    add_message "ChatService.MessageSeenStatusResponse" do
      optional :seen, :bool, 1
    end
    add_message "ChatService.MarkMessageSeenForUserRequest" do
      optional :messageId, :int64, 1
      optional :userId, :int64, 2
      optional :isCustomer, :bool, 3
    end
    add_message "ChatService.SendAutomatedMessageRequest" do
      optional :tenant, :string, 1
      optional :text, :string, 2
      optional :senderName, :string, 3
      optional :messageType, :string, 4
      optional :receiver, :message, 5, "Model.User"
    end
    add_message "ChatService.SendAutomatedMessageResponse" do
      optional :success, :bool, 1
    end
    add_message "ChatService.RetrieveRoomUsersRequest" do
      optional :roomId, :string, 1
      optional :tenant, :string, 2
      optional :user, :message, 3, "Model.User"
    end
    add_message "ChatService.RetrieveMessagesRequest" do
      optional :roomUid, :string, 1
      optional :tenant, :string, 2
      optional :timestampUpperBound, :string, 3
      optional :timestampLowerBound, :string, 4
    end
  end
end

module ChatService
  Message = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.Message").msgclass
  MessageList = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.MessageList").msgclass
  SendMessageResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.SendMessageResponse").msgclass
  Room = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.Room").msgclass
  RoomCategory = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.RoomCategory").msgclass
  Empty = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.Empty").msgclass
  AccessToken = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.AccessToken").msgclass
  Mention = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.Mention").msgclass
  MessageSeen = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.MessageSeen").msgclass
  RemoveMentionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.RemoveMentionRequest").msgclass
  RemoveMessageSeenRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.RemoveMessageSeenRequest").msgclass
  RemoveMentionAndSeenResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.RemoveMentionAndSeenResponse").msgclass
  Tenant = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.Tenant").msgclass
  MessageSeenStatusRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.MessageSeenStatusRequest").msgclass
  MessageSeenStatusResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.MessageSeenStatusResponse").msgclass
  MarkMessageSeenForUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.MarkMessageSeenForUserRequest").msgclass
  SendAutomatedMessageRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.SendAutomatedMessageRequest").msgclass
  SendAutomatedMessageResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.SendAutomatedMessageResponse").msgclass
  RetrieveRoomUsersRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.RetrieveRoomUsersRequest").msgclass
  RetrieveMessagesRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ChatService.RetrieveMessagesRequest").msgclass
end
