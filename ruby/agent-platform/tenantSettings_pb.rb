# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: agent-platform/tenantSettings.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("agent-platform/tenantSettings.proto", :syntax => :proto3) do
    add_message "Agent.RetrieveTenantSettingsRequest" do
      optional :tenant, :string, 1
    end
    add_message "Agent.RetrieveTenantSettingsResponse" do
      optional :chatEnabled, :bool, 1
      optional :isActive, :bool, 2
    end
  end
end

module Agent
  RetrieveTenantSettingsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Agent.RetrieveTenantSettingsRequest").msgclass
  RetrieveTenantSettingsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Agent.RetrieveTenantSettingsResponse").msgclass
end
