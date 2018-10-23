// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var userRelationships_pb = require('./userRelationships_pb.js');

function serialize_GrpcAgentPlatform_User(arg) {
  if (!(arg instanceof userRelationships_pb.User)) {
    throw new Error('Expected argument of type GrpcAgentPlatform.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcAgentPlatform_User(buffer_arg) {
  return userRelationships_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrpcAgentPlatform_UserRelationsAgent(arg) {
  if (!(arg instanceof userRelationships_pb.UserRelationsAgent)) {
    throw new Error('Expected argument of type GrpcAgentPlatform.UserRelationsAgent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcAgentPlatform_UserRelationsAgent(buffer_arg) {
  return userRelationships_pb.UserRelationsAgent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrpcAgentPlatform_UserRelationsCustomer(arg) {
  if (!(arg instanceof userRelationships_pb.UserRelationsCustomer)) {
    throw new Error('Expected argument of type GrpcAgentPlatform.UserRelationsCustomer');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcAgentPlatform_UserRelationsCustomer(buffer_arg) {
  return userRelationships_pb.UserRelationsCustomer.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserRelationshipsService = exports.UserRelationshipsService = {
  retrieveCustomerRelations: {
    path: '/GrpcAgentPlatform.UserRelationships/RetrieveCustomerRelations',
    requestStream: false,
    responseStream: false,
    requestType: userRelationships_pb.User,
    responseType: userRelationships_pb.UserRelationsCustomer,
    requestSerialize: serialize_GrpcAgentPlatform_User,
    requestDeserialize: deserialize_GrpcAgentPlatform_User,
    responseSerialize: serialize_GrpcAgentPlatform_UserRelationsCustomer,
    responseDeserialize: deserialize_GrpcAgentPlatform_UserRelationsCustomer,
  },
  retrieveAgentRelations: {
    path: '/GrpcAgentPlatform.UserRelationships/RetrieveAgentRelations',
    requestStream: false,
    responseStream: false,
    requestType: userRelationships_pb.User,
    responseType: userRelationships_pb.UserRelationsAgent,
    requestSerialize: serialize_GrpcAgentPlatform_User,
    requestDeserialize: deserialize_GrpcAgentPlatform_User,
    responseSerialize: serialize_GrpcAgentPlatform_UserRelationsAgent,
    responseDeserialize: deserialize_GrpcAgentPlatform_UserRelationsAgent,
  },
};

exports.UserRelationshipsClient = grpc.makeGenericClientConstructor(UserRelationshipsService);
