// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var agent$platform_email_pb = require('../agent-platform/email_pb.js');
var Model_user_pb = require('../model/user_pb.js');

function serialize_Agent_SendEmailRequest(arg) {
  if (!(arg instanceof agent$platform_email_pb.SendEmailRequest)) {
    throw new Error('Expected argument of type Agent.SendEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_SendEmailRequest(buffer_arg) {
  return agent$platform_email_pb.SendEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Agent_SendEmailResponse(arg) {
  if (!(arg instanceof agent$platform_email_pb.SendEmailResponse)) {
    throw new Error('Expected argument of type Agent.SendEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Agent_SendEmailResponse(buffer_arg) {
  return agent$platform_email_pb.SendEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmailService = exports.EmailService = {
  sendEmail: {
    path: '/Agent.Email/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: agent$platform_email_pb.SendEmailRequest,
    responseType: agent$platform_email_pb.SendEmailResponse,
    requestSerialize: serialize_Agent_SendEmailRequest,
    requestDeserialize: deserialize_Agent_SendEmailRequest,
    responseSerialize: serialize_Agent_SendEmailResponse,
    responseDeserialize: deserialize_Agent_SendEmailResponse,
  },
};

exports.EmailClient = grpc.makeGenericClientConstructor(EmailService);
