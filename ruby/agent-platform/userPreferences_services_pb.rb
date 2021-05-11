# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: agent-platform/userPreferences.proto for package 'Agent'

require 'grpc'
require 'agent-platform/userPreferences_pb'

module Agent
  module UserPreferences
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'Agent.UserPreferences'

      rpc :RetrieveChatPreferences, ::Model::User, ::Agent::ChatPreferences
    end

    Stub = Service.rpc_stub_class
  end
end
