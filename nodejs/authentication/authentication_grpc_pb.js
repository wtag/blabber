// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var authentication_pb = require('./authentication_pb.js');

function serialize_GrpcClientAuthentication_AccessToken(arg) {
  if (!(arg instanceof authentication_pb.AccessToken)) {
    throw new Error('Expected argument of type GrpcClientAuthentication.AccessToken');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcClientAuthentication_AccessToken(buffer_arg) {
  return authentication_pb.AccessToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrpcClientAuthentication_User(arg) {
  if (!(arg instanceof authentication_pb.User)) {
    throw new Error('Expected argument of type GrpcClientAuthentication.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrpcClientAuthentication_User(buffer_arg) {
  return authentication_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthenticationService = exports.AuthenticationService = {
  retrieveAccessToken: {
    path: '/GrpcClientAuthentication.Authentication/RetrieveAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: authentication_pb.User,
    responseType: authentication_pb.AccessToken,
    requestSerialize: serialize_GrpcClientAuthentication_User,
    requestDeserialize: deserialize_GrpcClientAuthentication_User,
    responseSerialize: serialize_GrpcClientAuthentication_AccessToken,
    responseDeserialize: deserialize_GrpcClientAuthentication_AccessToken,
  },
};

exports.AuthenticationClient = grpc.makeGenericClientConstructor(AuthenticationService);
