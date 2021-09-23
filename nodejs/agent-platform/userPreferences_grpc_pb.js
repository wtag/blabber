// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var agent$platform_userPreferences_pb = require('../agent-platform/userPreferences_pb.js');
var Model_user_pb = require('../Model/user_pb.js');

function serialize_Agent_ChatPreferences(arg) {
  if (!(arg instanceof agent$platform_userPreferences_pb.ChatPreferences)) {
    throw new Error('Expected argument of type Agent.ChatPreferences');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_ChatPreferences(buffer_arg) {
  return agent$platform_userPreferences_pb.ChatPreferences.deserializeBinary(new Uint8Array(buffer_arg));
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


var UserPreferencesService = exports.UserPreferencesService = {
  retrieveChatPreferences: {
    path: '/Agent.UserPreferences/RetrieveChatPreferences',
    requestStream: false,
    responseStream: false,
    requestType: Model_user_pb.User,
    responseType: agent$platform_userPreferences_pb.ChatPreferences,
    requestSerialize: serialize_Model_User,
    requestDeserialize: deserialize_Model_User,
    responseSerialize: serialize_Agent_ChatPreferences,
    responseDeserialize: deserialize_Agent_ChatPreferences,
  },
};

exports.UserPreferencesClient = grpc.makeGenericClientConstructor(UserPreferencesService);
