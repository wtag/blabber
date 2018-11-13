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

var Model_user_pb = require('../Model/user_pb.js');
goog.exportSymbol('proto.ChatService.AccessToken', null, global);
goog.exportSymbol('proto.ChatService.Empty', null, global);
goog.exportSymbol('proto.ChatService.Message', null, global);
goog.exportSymbol('proto.ChatService.MessageList', null, global);
goog.exportSymbol('proto.ChatService.Room', null, global);
goog.exportSymbol('proto.ChatService.SendMessageResponse', null, global);

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
proto.ChatService.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatService.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChatService.Message.displayName = 'proto.ChatService.Message';
}


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
proto.ChatService.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatService.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatService.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tenant: jspb.Message.getFieldWithDefault(msg, 3, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    text: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sendername: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.ChatService.Message}
 */
proto.ChatService.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatService.Message;
  return proto.ChatService.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatService.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatService.Message}
 */
proto.ChatService.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenant(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendername(value);
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
proto.ChatService.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatService.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatService.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSendername();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.ChatService.Message.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ChatService.Message.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string timestamp = 2;
 * @return {string}
 */
proto.ChatService.Message.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ChatService.Message.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string tenant = 3;
 * @return {string}
 */
proto.ChatService.Message.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ChatService.Message.prototype.setTenant = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string roomId = 4;
 * @return {string}
 */
proto.ChatService.Message.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ChatService.Message.prototype.setRoomid = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string text = 5;
 * @return {string}
 */
proto.ChatService.Message.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ChatService.Message.prototype.setText = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string senderId = 6;
 * @return {string}
 */
proto.ChatService.Message.prototype.getSenderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ChatService.Message.prototype.setSenderid = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string senderName = 7;
 * @return {string}
 */
proto.ChatService.Message.prototype.getSendername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.ChatService.Message.prototype.setSendername = function(value) {
  jspb.Message.setField(this, 7, value);
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
proto.ChatService.MessageList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ChatService.MessageList.repeatedFields_, null);
};
goog.inherits(proto.ChatService.MessageList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChatService.MessageList.displayName = 'proto.ChatService.MessageList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ChatService.MessageList.repeatedFields_ = [1];



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
proto.ChatService.MessageList.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatService.MessageList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatService.MessageList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.MessageList.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.ChatService.Message.toObject, includeInstance)
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
 * @return {!proto.ChatService.MessageList}
 */
proto.ChatService.MessageList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatService.MessageList;
  return proto.ChatService.MessageList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatService.MessageList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatService.MessageList}
 */
proto.ChatService.MessageList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ChatService.Message;
      reader.readMessage(value,proto.ChatService.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
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
proto.ChatService.MessageList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatService.MessageList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatService.MessageList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.MessageList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ChatService.Message.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Message messages = 1;
 * @return {!Array.<!proto.ChatService.Message>}
 */
proto.ChatService.MessageList.prototype.getMessagesList = function() {
  return /** @type{!Array.<!proto.ChatService.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ChatService.Message, 1));
};


/** @param {!Array.<!proto.ChatService.Message>} value */
proto.ChatService.MessageList.prototype.setMessagesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ChatService.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ChatService.Message}
 */
proto.ChatService.MessageList.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ChatService.Message, opt_index);
};


proto.ChatService.MessageList.prototype.clearMessagesList = function() {
  this.setMessagesList([]);
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
proto.ChatService.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatService.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChatService.SendMessageResponse.displayName = 'proto.ChatService.SendMessageResponse';
}


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
proto.ChatService.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatService.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatService.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sent: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.ChatService.SendMessageResponse}
 */
proto.ChatService.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatService.SendMessageResponse;
  return proto.ChatService.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatService.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatService.SendMessageResponse}
 */
proto.ChatService.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSent(value);
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
proto.ChatService.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatService.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatService.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSent();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool sent = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ChatService.SendMessageResponse.prototype.getSent = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.ChatService.SendMessageResponse.prototype.setSent = function(value) {
  jspb.Message.setField(this, 1, value);
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
proto.ChatService.Room = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatService.Room, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChatService.Room.displayName = 'proto.ChatService.Room';
}


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
proto.ChatService.Room.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatService.Room.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatService.Room} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.Room.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastseenmessagetimestamp: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ChatService.Room}
 */
proto.ChatService.Room.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatService.Room;
  return proto.ChatService.Room.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatService.Room} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatService.Room}
 */
proto.ChatService.Room.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastseenmessagetimestamp(value);
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
proto.ChatService.Room.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatService.Room.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatService.Room} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.Room.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastseenmessagetimestamp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.ChatService.Room.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ChatService.Room.prototype.setTenant = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.ChatService.Room.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ChatService.Room.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string lastSeenMessageTimestamp = 3;
 * @return {string}
 */
proto.ChatService.Room.prototype.getLastseenmessagetimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ChatService.Room.prototype.setLastseenmessagetimestamp = function(value) {
  jspb.Message.setField(this, 3, value);
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
proto.ChatService.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatService.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChatService.Empty.displayName = 'proto.ChatService.Empty';
}


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
proto.ChatService.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatService.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatService.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.ChatService.Empty}
 */
proto.ChatService.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatService.Empty;
  return proto.ChatService.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatService.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatService.Empty}
 */
proto.ChatService.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.ChatService.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatService.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatService.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.ChatService.AccessToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatService.AccessToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChatService.AccessToken.displayName = 'proto.ChatService.AccessToken';
}


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
proto.ChatService.AccessToken.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatService.AccessToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatService.AccessToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.AccessToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ChatService.AccessToken}
 */
proto.ChatService.AccessToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatService.AccessToken;
  return proto.ChatService.AccessToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatService.AccessToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatService.AccessToken}
 */
proto.ChatService.AccessToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.ChatService.AccessToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatService.AccessToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatService.AccessToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatService.AccessToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.ChatService.AccessToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ChatService.AccessToken.prototype.setToken = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.ChatService);