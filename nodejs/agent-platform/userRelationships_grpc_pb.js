// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var agent$platform_userRelationships_pb = require('../agent-platform/userRelationships_pb.js');
var Model_user_pb = require('../model/user_pb.js');

function serialize_Agent_AvailableAgentsRequest(arg) {
  if (!(arg instanceof agent$platform_userRelationships_pb.AvailableAgentsRequest)) {
    throw new Error('Expected argument of type Agent.AvailableAgentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_AvailableAgentsRequest(buffer_arg) {
  return agent$platform_userRelationships_pb.AvailableAgentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Agent_UserRelationsCustomer(arg) {
  if (!(arg instanceof agent$platform_userRelationships_pb.UserRelationsCustomer)) {
    throw new Error('Expected argument of type Agent.UserRelationsCustomer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_UserRelationsCustomer(buffer_arg) {
  return agent$platform_userRelationships_pb.UserRelationsCustomer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Model_User(arg) {
  if (!(arg instanceof Model_user_pb.User)) {
    throw new Error('Expected argument of type Model.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Model_User(buffer_arg) {
  return Model_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserRelationshipsService = exports.UserRelationshipsService = {
  retrieveCustomerRelations: {
    path: '/Agent.UserRelationships/RetrieveCustomerRelations',
    requestStream: false,
    responseStream: false,
    requestType: Model_user_pb.User,
    responseType: agent$platform_userRelationships_pb.UserRelationsCustomer,
    requestSerialize: serialize_Model_User,
    requestDeserialize: deserialize_Model_User,
    responseSerialize: serialize_Agent_UserRelationsCustomer,
    responseDeserialize: deserialize_Agent_UserRelationsCustomer,
  },
  retrieveAgentCustomerRelations: {
    path: '/Agent.UserRelationships/RetrieveAgentCustomerRelations',
    requestStream: false,
    responseStream: true,
    requestType: Model_user_pb.User,
    responseType: Model_user_pb.User,
    requestSerialize: serialize_Model_User,
    requestDeserialize: deserialize_Model_User,
    responseSerialize: serialize_Model_User,
    responseDeserialize: deserialize_Model_User,
  },
  retrieveAgentColleagueRelations: {
    path: '/Agent.UserRelationships/RetrieveAgentColleagueRelations',
    requestStream: false,
    responseStream: true,
    requestType: Model_user_pb.User,
    responseType: Model_user_pb.User,
    requestSerialize: serialize_Model_User,
    requestDeserialize: deserialize_Model_User,
    responseSerialize: serialize_Model_User,
    responseDeserialize: deserialize_Model_User,
  },
  retrieveAvailableAgents: {
    path: '/Agent.UserRelationships/RetrieveAvailableAgents',
    requestStream: false,
    responseStream: true,
    requestType: agent$platform_userRelationships_pb.AvailableAgentsRequest,
    responseType: Model_user_pb.User,
    requestSerialize: serialize_Agent_AvailableAgentsRequest,
    requestDeserialize: deserialize_Agent_AvailableAgentsRequest,
    responseSerialize: serialize_Model_User,
    responseDeserialize: deserialize_Model_User,
  },
};

exports.UserRelationshipsClient = grpc.makeGenericClientConstructor(UserRelationshipsService);
