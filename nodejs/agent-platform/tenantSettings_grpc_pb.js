// GENERATED CODE -- DO NOT EDIT!

'use strict';
var agent$platform_tenantSettings_pb = require('../agent-platform/tenantSettings_pb.js');

function serialize_Agent_RetrieveTenantSettingsRequest(arg) {
  if (!(arg instanceof agent$platform_tenantSettings_pb.RetrieveTenantSettingsRequest)) {
    throw new Error('Expected argument of type Agent.RetrieveTenantSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_RetrieveTenantSettingsRequest(buffer_arg) {
  return agent$platform_tenantSettings_pb.RetrieveTenantSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Agent_RetrieveTenantSettingsResponse(arg) {
  if (!(arg instanceof agent$platform_tenantSettings_pb.RetrieveTenantSettingsResponse)) {
    throw new Error('Expected argument of type Agent.RetrieveTenantSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_RetrieveTenantSettingsResponse(buffer_arg) {
  return agent$platform_tenantSettings_pb.RetrieveTenantSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TenantSettingsService = exports['Agent.TenantSettings'] = {
  retrieveTenantSettings: {
    path: '/Agent.TenantSettings/RetrieveTenantSettings',
    requestStream: false,
    responseStream: false,
    requestType: agent$platform_tenantSettings_pb.RetrieveTenantSettingsRequest,
    responseType: agent$platform_tenantSettings_pb.RetrieveTenantSettingsResponse,
    requestSerialize: serialize_Agent_RetrieveTenantSettingsRequest,
    requestDeserialize: deserialize_Agent_RetrieveTenantSettingsRequest,
    responseSerialize: serialize_Agent_RetrieveTenantSettingsResponse,
    responseDeserialize: deserialize_Agent_RetrieveTenantSettingsResponse,
  },
};

