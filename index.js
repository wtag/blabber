const chatLib = require('./nodejs/chat_pb');
exports.Blabber = require('./nodejs/chat_grpc_pb');
exports.MessageList = chatLib.MessageList();
exports.Room = chatLib.Room();
exports.SendMessageResponse = chatLib.SendMessageResponse();
exports.Empty = chatLib.Empty();
exports.Message = chatLib.Message();