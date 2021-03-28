const chatLib = require("./nodejs/chat-backend/chat_pb");
const user = require("./nodejs/model/user_pb");
const agentUserRelationships = require("./nodejs/agent-platform/userRelationships_pb");

/**GRPC Service Exposed By Chat Server
 ***Service: Authentication Token**/
exports.Blabber = require("./nodejs/chat-backend/chat_grpc_pb");
exports.Blabber.MessageList = chatLib.MessageList;
exports.Blabber.Room = chatLib.Room;
exports.Blabber.SendMessageResponse = chatLib.SendMessageResponse;
exports.Blabber.Empty = chatLib.Empty;
exports.Blabber.Message = chatLib.Message;
exports.Blabber.AccessToken = chatLib.AccessToken;
exports.Blabber.RoomCategory = chatLib.RoomCategory;
exports.Blabber.RoomCategoryList = chatLib.RoomCategoryList;
exports.Blabber.User = user.User;
exports.Blabber.Mention = chatLib.Mention;
exports.Blabber.MessageSeen = chatLib.MessageSeen;
exports.Blabber.RemoveMentionRequest = chatLib.RemoveMentionRequest;
exports.Blabber.RemoveMessageSeenRequest = chatLib.RemoveMessageSeenRequest;
exports.Blabber.RemoveMentionAndSeenResponse =
  chatLib.RemoveMentionAndSeenResponse;
exports.Blabber.Tenant = chatLib.Tenant;

/**GRPC Service Exposed By Agent
 ***Service: User RelationShip**/
exports.Blabber.Agent = require("./nodejs/agent-platform/userRelationships_grpc_pb");
exports.Blabber.Agent.UserRelationsCustomer =
  agentUserRelationships.UserRelationsCustomer;
exports.Blabber.Agent.UserRelationsAgent =
  agentUserRelationships.UserRelationsAgent;
exports.Blabber.Agent.User = user.User;
