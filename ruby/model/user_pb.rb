# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: model/user.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
    add_message "Model.User" do
      optional :id, :int64, 1
      optional :name, :string, 2
      optional :tenant, :string, 3
      optional :isCustomer, :bool, 4
      optional :avatarURL, :string, 5
      optional :isOnline, :bool, 6
      repeated :agents, :message, 7, "Model.User"
  end
end

module Model
  User = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Model.User").msgclass
end
