const chatLib = require("./nodejs/chat_pb");
const authentication = require("./nodejs/authentication/authentication_pb");
const agentUserRelationships = require("./nodejs/agent-services/userRelationships_pb");
exports.Blabber = require("./nodejs/chat_grpc_pb");
exports.Blabber.MessageList = chatLib.MessageList;
exports.Blabber.Room = chatLib.Room;
exports.Blabber.SendMessageResponse = chatLib.SendMessageResponse;
exports.Blabber.Empty = chatLib.Empty;
exports.Blabber.Message = chatLib.Message;

/**GRPC Service Exposed By Chat Server
 ***Service: Authentication Token**/
exports.Blabber.Authentication = require("./nodejs/authentication/authentication_grpc_pb");
exports.Blabber.Authentication.AccessToken = authentication.AccessToken;
exports.Blabber.Authentication.User = authentication.User;

/**GRPC Service Exposed By Agent
 ***Service: User RelationShip**/
exports.Blabber.Agent.UserRelationships = require("./nodejs/agent-services/userRelationships_grpc_pb");
exports.Blabber.Agent.UserRelationships.Agent = agentUserRelationships.Agent;
exports.Blabber.Agent.UserRelationships.Customer = agentUserRelationships.Customer;
exports.Blabber.Agent.UserRelationships.User = agentUserRelationships.User;
exports.Blabber.Agent.UserRelationships.UserRelationsAgent = agentUserRelationships.UserRelationsAgent;
exports.Blabber.Agent.UserRelationships.UserRelationsCustomer = agentUserRelationships.UserRelationsCustomer;
