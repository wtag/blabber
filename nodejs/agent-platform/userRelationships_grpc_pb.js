// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var agent$platform_userRelationships_pb = require('../agent-platform/userRelationships_pb.js');
var Model_user_pb = require('../model/user_pb.js');

function serialize_Agent_UserRelationsAgent(arg) {
  if (!(arg instanceof agent$platform_userRelationships_pb.UserRelationsAgent)) {
    throw new Error('Expected argument of type Agent.UserRelationsAgent');
  }
  return new Buffer(arg.serializeBinary())
}

function deserialize_Agent_UserRelationsAgent(buffer_arg) {
  return agent$platform_userRelationships_pb.UserRelationsAgent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Agent_UserRelationsCustomer(arg) {
  if (!(arg instanceof agent$platform_userRelationships_pb.UserRelationsCustomer)) {
    throw new Error('Expected argument of type Agent.UserRelationsCustomer');
  }
  return new Buffer(arg.serializeBinary())
}

function deserialize_Agent_UserRelationsCustomer(buffer_arg) {
  return agent$platform_userRelationships_pb.UserRelationsCustomer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Model_User(arg) {
  if (!(arg instanceof Model_user_pb.User)) {
    throw new Error('Expected argument of type Model.User');
  }
  return new Buffer(arg.serializeBinary())
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
  retrieveAgentRelations: {
    path: '/Agent.UserRelationships/RetrieveAgentRelations',
    requestStream: false,
    responseStream: false,
    requestType: Model_user_pb.User,
    responseType: agent$platform_userRelationships_pb.UserRelationsAgent,
    requestSerialize: serialize_Model_User,
    requestDeserialize: deserialize_Model_User,
    responseSerialize: serialize_Agent_UserRelationsAgent,
    responseDeserialize: deserialize_Agent_UserRelationsAgent,
  },
};

exports.UserRelationshipsClient = grpc.makeGenericClientConstructor(UserRelationshipsService);
