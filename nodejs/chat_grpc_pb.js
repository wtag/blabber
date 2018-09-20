// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_GrpcClient_Message(arg) {
  if (!(arg instanceof chat_pb.Message)) {
    throw new Error('Expected argument of type GrpcClient.Message');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcClient_Message(buffer_arg) {
  return chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrpcClient_MessageList(arg) {
  if (!(arg instanceof chat_pb.MessageList)) {
    throw new Error('Expected argument of type GrpcClient.MessageList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcClient_MessageList(buffer_arg) {
  return chat_pb.MessageList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrpcClient_Room(arg) {
  if (!(arg instanceof chat_pb.Room)) {
    throw new Error('Expected argument of type GrpcClient.Room');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcClient_Room(buffer_arg) {
  return chat_pb.Room.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrpcClient_SendMessageResponse(arg) {
  if (!(arg instanceof chat_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type GrpcClient.SendMessageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcClient_SendMessageResponse(buffer_arg) {
  return chat_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  retrieveMessages: {
    path: '/GrpcClient.Chat/RetrieveMessages',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.Room,
    responseType: chat_pb.MessageList,
    requestSerialize: serialize_GrpcClient_Room,
    requestDeserialize: deserialize_GrpcClient_Room,
    responseSerialize: serialize_GrpcClient_MessageList,
    responseDeserialize: deserialize_GrpcClient_MessageList,
  },
  sendMessage: {
    path: '/GrpcClient.Chat/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.Message,
    responseType: chat_pb.SendMessageResponse,
    requestSerialize: serialize_GrpcClient_Message,
    requestDeserialize: deserialize_GrpcClient_Message,
    responseSerialize: serialize_GrpcClient_SendMessageResponse,
    responseDeserialize: deserialize_GrpcClient_SendMessageResponse,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
