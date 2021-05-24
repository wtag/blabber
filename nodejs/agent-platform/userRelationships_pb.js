// source: agent-platform/userRelationships.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Model_user_pb = require('../model/user_pb.js');
goog.object.extend(proto, Model_user_pb);
goog.exportSymbol('proto.Agent.AvailableAgentsRequest', null, global);
goog.exportSymbol('proto.Agent.UserRelationsCustomer', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Agent.UserRelationsCustomer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Agent.UserRelationsCustomer.repeatedFields_, null);
};
goog.inherits(proto.Agent.UserRelationsCustomer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Agent.UserRelationsCustomer.displayName = 'proto.Agent.UserRelationsCustomer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Agent.AvailableAgentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Agent.AvailableAgentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Agent.AvailableAgentsRequest.displayName = 'proto.Agent.AvailableAgentsRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Agent.UserRelationsCustomer.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Agent.UserRelationsCustomer.prototype.toObject = function(opt_includeInstance) {
  return proto.Agent.UserRelationsCustomer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Agent.UserRelationsCustomer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.UserRelationsCustomer.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    Model_user_pb.User.toObject, includeInstance),
    travelarrangersList: jspb.Message.toObjectList(msg.getTravelarrangersList(),
    Model_user_pb.User.toObject, includeInstance),
    colleaguesList: jspb.Message.toObjectList(msg.getColleaguesList(),
    Model_user_pb.User.toObject, includeInstance),
    travelarrangementclientsList: jspb.Message.toObjectList(msg.getTravelarrangementclientsList(),
    Model_user_pb.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Agent.UserRelationsCustomer}
 */
proto.Agent.UserRelationsCustomer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Agent.UserRelationsCustomer;
  return proto.Agent.UserRelationsCustomer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Agent.UserRelationsCustomer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Agent.UserRelationsCustomer}
 */
proto.Agent.UserRelationsCustomer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Model_user_pb.User;
      reader.readMessage(value,Model_user_pb.User.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    case 2:
      var value = new Model_user_pb.User;
      reader.readMessage(value,Model_user_pb.User.deserializeBinaryFromReader);
      msg.addTravelarrangers(value);
      break;
    case 3:
      var value = new Model_user_pb.User;
      reader.readMessage(value,Model_user_pb.User.deserializeBinaryFromReader);
      msg.addColleagues(value);
      break;
    case 4:
      var value = new Model_user_pb.User;
      reader.readMessage(value,Model_user_pb.User.deserializeBinaryFromReader);
      msg.addTravelarrangementclients(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Agent.UserRelationsCustomer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Agent.UserRelationsCustomer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Agent.UserRelationsCustomer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.UserRelationsCustomer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Model_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getTravelarrangersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      Model_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getColleaguesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      Model_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getTravelarrangementclientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      Model_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Model.User agents = 1;
 * @return {!Array<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 1));
};


/**
 * @param {!Array<!proto.Model.User>} value
 * @return {!proto.Agent.UserRelationsCustomer} returns this
*/
proto.Agent.UserRelationsCustomer.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Model.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Agent.UserRelationsCustomer} returns this
 */
proto.Agent.UserRelationsCustomer.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * repeated Model.User travelArrangers = 2;
 * @return {!Array<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getTravelarrangersList = function() {
  return /** @type{!Array<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 2));
};


/**
 * @param {!Array<!proto.Model.User>} value
 * @return {!proto.Agent.UserRelationsCustomer} returns this
*/
proto.Agent.UserRelationsCustomer.prototype.setTravelarrangersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addTravelarrangers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Model.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Agent.UserRelationsCustomer} returns this
 */
proto.Agent.UserRelationsCustomer.prototype.clearTravelarrangersList = function() {
  return this.setTravelarrangersList([]);
};


/**
 * repeated Model.User colleagues = 3;
 * @return {!Array<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getColleaguesList = function() {
  return /** @type{!Array<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 3));
};


/**
 * @param {!Array<!proto.Model.User>} value
 * @return {!proto.Agent.UserRelationsCustomer} returns this
*/
proto.Agent.UserRelationsCustomer.prototype.setColleaguesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addColleagues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Model.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Agent.UserRelationsCustomer} returns this
 */
proto.Agent.UserRelationsCustomer.prototype.clearColleaguesList = function() {
  return this.setColleaguesList([]);
};


/**
 * repeated Model.User travelArrangementClients = 4;
 * @return {!Array<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getTravelarrangementclientsList = function() {
  return /** @type{!Array<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 4));
};


/**
 * @param {!Array<!proto.Model.User>} value
 * @return {!proto.Agent.UserRelationsCustomer} returns this
*/
proto.Agent.UserRelationsCustomer.prototype.setTravelarrangementclientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addTravelarrangementclients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Model.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Agent.UserRelationsCustomer} returns this
 */
proto.Agent.UserRelationsCustomer.prototype.clearTravelarrangementclientsList = function() {
  return this.setTravelarrangementclientsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Agent.AvailableAgentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Agent.AvailableAgentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Agent.AvailableAgentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.AvailableAgentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenant: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Agent.AvailableAgentsRequest}
 */
proto.Agent.AvailableAgentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Agent.AvailableAgentsRequest;
  return proto.Agent.AvailableAgentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Agent.AvailableAgentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Agent.AvailableAgentsRequest}
 */
proto.Agent.AvailableAgentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Agent.AvailableAgentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Agent.AvailableAgentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Agent.AvailableAgentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.AvailableAgentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.Agent.AvailableAgentsRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent.AvailableAgentsRequest} returns this
 */
proto.Agent.AvailableAgentsRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.Agent);
