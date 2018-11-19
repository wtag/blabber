// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat$backend_chat_pb = require('./../chat-backend/chat_pb.js');
var Model_user_pb = require('./../Model/user_pb.js');

function serialize_ChatService_AccessToken(arg) {
  if (!(arg instanceof chat$backend_chat_pb.AccessToken)) {
    throw new Error('Expected argument of type ChatService.AccessToken');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ChatService_AccessToken(buffer_arg) {
  return chat$backend_chat_pb.AccessToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChatService_Message(arg) {
  if (!(arg instanceof chat$backend_chat_pb.Message)) {
    throw new Error('Expected argument of type ChatService.Message');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ChatService_Message(buffer_arg) {
  return chat$backend_chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChatService_MessageList(arg) {
  if (!(arg instanceof chat$backend_chat_pb.MessageList)) {
    throw new Error('Expected argument of type ChatService.MessageList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ChatService_MessageList(buffer_arg) {
  return chat$backend_chat_pb.MessageList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChatService_Room(arg) {
  if (!(arg instanceof chat$backend_chat_pb.Room)) {
    throw new Error('Expected argument of type ChatService.Room');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ChatService_Room(buffer_arg) {
  return chat$backend_chat_pb.Room.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChatService_SendMessageResponse(arg) {
  if (!(arg instanceof chat$backend_chat_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type ChatService.SendMessageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ChatService_SendMessageResponse(buffer_arg) {
  return chat$backend_chat_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Model_User(arg) {
  if (!(arg instanceof Model_user_pb.User)) {
    throw new Error('Expected argument of type Model.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Model_User(buffer_arg) {
  return Model_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  retrieveMessages: {
    path: '/ChatService.Chat/RetrieveMessages',
    requestStream: false,
    responseStream: false,
    requestType: chat$backend_chat_pb.Room,
    responseType: chat$backend_chat_pb.MessageList,
    requestSerialize: serialize_ChatService_Room,
    requestDeserialize: deserialize_ChatService_Room,
    responseSerialize: serialize_ChatService_MessageList,
    responseDeserialize: deserialize_ChatService_MessageList,
  },
  sendMessage: {
    path: '/ChatService.Chat/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat$backend_chat_pb.Message,
    responseType: chat$backend_chat_pb.SendMessageResponse,
    requestSerialize: serialize_ChatService_Message,
    requestDeserialize: deserialize_ChatService_Message,
    responseSerialize: serialize_ChatService_SendMessageResponse,
    responseDeserialize: deserialize_ChatService_SendMessageResponse,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
var AuthenticationService = exports.AuthenticationService = {
  retrieveAccessToken: {
    path: '/ChatService.Authentication/RetrieveAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: Model_user_pb.User,
    responseType: chat$backend_chat_pb.AccessToken,
    requestSerialize: serialize_Model_User,
    requestDeserialize: deserialize_Model_User,
    responseSerialize: serialize_ChatService_AccessToken,
    responseDeserialize: deserialize_ChatService_AccessToken,
  },
};

exports.AuthenticationClient = grpc.makeGenericClientConstructor(AuthenticationService);
