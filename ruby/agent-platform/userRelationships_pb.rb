# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: agent-platform/userRelationships.proto

require 'google/protobuf'

require 'model/user_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
    add_message "Agent.UserRelationsCustomer" do
      repeated :agents, :message, 1, "Model.User"
      repeated :travelArrangers, :message, 2, "Model.User"
      repeated :colleagues, :message, 3, "Model.User"
      repeated :travelArrangementClients, :message, 4, "Model.User"
    end
end

module Agent
  UserRelationsCustomer = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Agent.UserRelationsCustomer").msgclass
end
