# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: agent-platform/userRelationships.proto for package 'Agent'

require 'grpc'
require 'agent-platform/userRelationships_pb'

module Agent
  module UserRelationships
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'Agent.UserRelationships'

      rpc :RetrieveCustomerRelations, ::Model::User, ::Agent::UserRelationsCustomer
      rpc :RetrieveAgentCustomerRelations, ::Model::User, stream(::Model::User)
      rpc :RetrieveAgentColleagueRelations, ::Model::User, stream(::Model::User)
      rpc :RetrieveAvailableAgents, ::Agent::AvailableAgentsRequest, stream(::Model::User)
    end

    Stub = Service.rpc_stub_class
  end
end
