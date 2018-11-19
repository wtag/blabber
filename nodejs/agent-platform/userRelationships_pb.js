/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Model_user_pb = require('./../model/user_pb.js');
goog.exportSymbol('proto.Agent.UserRelationsAgent', null, global);
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
  proto.Agent.UserRelationsCustomer.displayName = 'proto.Agent.UserRelationsCustomer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Agent.UserRelationsCustomer.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Agent.UserRelationsCustomer.prototype.toObject = function(opt_includeInstance) {
  return proto.Agent.UserRelationsCustomer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
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
};


/**
 * repeated Model.User agents = 1;
 * @return {!Array.<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getAgentsList = function() {
  return /** @type{!Array.<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 1));
};


/** @param {!Array.<!proto.Model.User>} value */
proto.Agent.UserRelationsCustomer.prototype.setAgentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Model.User, opt_index);
};


proto.Agent.UserRelationsCustomer.prototype.clearAgentsList = function() {
  this.setAgentsList([]);
};


/**
 * repeated Model.User travelArrangers = 2;
 * @return {!Array.<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getTravelarrangersList = function() {
  return /** @type{!Array.<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 2));
};


/** @param {!Array.<!proto.Model.User>} value */
proto.Agent.UserRelationsCustomer.prototype.setTravelarrangersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addTravelarrangers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Model.User, opt_index);
};


proto.Agent.UserRelationsCustomer.prototype.clearTravelarrangersList = function() {
  this.setTravelarrangersList([]);
};


/**
 * repeated Model.User colleagues = 3;
 * @return {!Array.<!proto.Model.User>}
 */
proto.Agent.UserRelationsCustomer.prototype.getColleaguesList = function() {
  return /** @type{!Array.<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 3));
};


/** @param {!Array.<!proto.Model.User>} value */
proto.Agent.UserRelationsCustomer.prototype.setColleaguesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsCustomer.prototype.addColleagues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Model.User, opt_index);
};


proto.Agent.UserRelationsCustomer.prototype.clearColleaguesList = function() {
  this.setColleaguesList([]);
};



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
proto.Agent.UserRelationsAgent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Agent.UserRelationsAgent.repeatedFields_, null);
};
goog.inherits(proto.Agent.UserRelationsAgent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Agent.UserRelationsAgent.displayName = 'proto.Agent.UserRelationsAgent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Agent.UserRelationsAgent.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Agent.UserRelationsAgent.prototype.toObject = function(opt_includeInstance) {
  return proto.Agent.UserRelationsAgent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Agent.UserRelationsAgent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.UserRelationsAgent.toObject = function(includeInstance, msg) {
  var f, obj = {
    customersList: jspb.Message.toObjectList(msg.getCustomersList(),
    Model_user_pb.User.toObject, includeInstance),
    colleaguesList: jspb.Message.toObjectList(msg.getColleaguesList(),
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
 * @return {!proto.Agent.UserRelationsAgent}
 */
proto.Agent.UserRelationsAgent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Agent.UserRelationsAgent;
  return proto.Agent.UserRelationsAgent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Agent.UserRelationsAgent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Agent.UserRelationsAgent}
 */
proto.Agent.UserRelationsAgent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Model_user_pb.User;
      reader.readMessage(value,Model_user_pb.User.deserializeBinaryFromReader);
      msg.addCustomers(value);
      break;
    case 2:
      var value = new Model_user_pb.User;
      reader.readMessage(value,Model_user_pb.User.deserializeBinaryFromReader);
      msg.addColleagues(value);
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
proto.Agent.UserRelationsAgent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Agent.UserRelationsAgent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Agent.UserRelationsAgent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.UserRelationsAgent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Model_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getColleaguesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      Model_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Model.User customers = 1;
 * @return {!Array.<!proto.Model.User>}
 */
proto.Agent.UserRelationsAgent.prototype.getCustomersList = function() {
  return /** @type{!Array.<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 1));
};


/** @param {!Array.<!proto.Model.User>} value */
proto.Agent.UserRelationsAgent.prototype.setCustomersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsAgent.prototype.addCustomers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Model.User, opt_index);
};


proto.Agent.UserRelationsAgent.prototype.clearCustomersList = function() {
  this.setCustomersList([]);
};


/**
 * repeated Model.User colleagues = 2;
 * @return {!Array.<!proto.Model.User>}
 */
proto.Agent.UserRelationsAgent.prototype.getColleaguesList = function() {
  return /** @type{!Array.<!proto.Model.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, Model_user_pb.User, 2));
};


/** @param {!Array.<!proto.Model.User>} value */
proto.Agent.UserRelationsAgent.prototype.setColleaguesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Model.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Model.User}
 */
proto.Agent.UserRelationsAgent.prototype.addColleagues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Model.User, opt_index);
};


proto.Agent.UserRelationsAgent.prototype.clearColleaguesList = function() {
  this.setColleaguesList([]);
};


goog.object.extend(exports, proto.Agent);
