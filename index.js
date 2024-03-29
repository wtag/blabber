const chatLib = require('./nodejs/chat-backend/chat_pb');
const user = require('./nodejs/model/user_pb');
const agentUserRelationships = require('./nodejs/agent-platform/userRelationships_pb');
const emailService = require('./nodejs/agent-platform/email_pb');
const userPreferencesService = require('./nodejs/agent-platform/userPreferences_pb');
const tenantSettingsService = require('./nodejs/agent-platform/tenantSettings_pb');

/**GRPC Service Exposed By Chat Server
 ***Service: Authentication Token**/
exports.Blabber = require('./nodejs/chat-backend/chat_grpc_pb');
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
exports.Blabber.MarkMessageSeenForUserRequest =
  chatLib.MarkMessageSeenForUserRequest;
exports.Blabber.SendAutomatedMessageResponse =
  chatLib.SendAutomatedMessageResponse;
exports.Blabber.SendAutomatedMessageRequest =
  chatLib.SendAutomatedMessageRequest;
exports.Blabber.MessageSeenStatusRequest = chatLib.MessageSeenStatusRequest;
exports.Blabber.MessageSeenStatusResponse = chatLib.MessageSeenStatusResponse;
exports.Blabber.RetrieveRoomUsersRequest = chatLib.RetrieveRoomUsersRequest;
exports.Blabber.RetrieveMessagesRequest = chatLib.RetrieveMessagesRequest;

/**GRPC Service Exposed By Agent
 ***Service: User RelationShip**/
exports.Blabber.Agent = require('./nodejs/agent-platform/userRelationships_grpc_pb');
exports.Blabber.Agent.UserRelationsCustomer =
  agentUserRelationships.UserRelationsCustomer;
exports.Blabber.Agent.AvailableAgentsRequest =
    agentUserRelationships.AvailableAgentsRequest;
exports.Blabber.Agent.UserRelationsAgent =
  agentUserRelationships.UserRelationsAgent;
exports.Blabber.Agent.User = user.User;

exports.Blabber.Email = require('./nodejs/agent-platform/email_grpc_pb');
exports.Blabber.Email.SendEmailRequest = emailService.SendEmailRequest;
exports.Blabber.Email.SendEmailResponse = emailService.SendEmailResponse;

exports.Blabber.UserPreferences = require('./nodejs/agent-platform/userPreferences_grpc_pb');
exports.Blabber.UserPreferences.ChatPreferences =
  userPreferencesService.ChatPreferences;
exports.Blabber.TenantSettings = require('./nodejs/agent-platform/tenantSettings_grpc_pb');
exports.Blabber.TenantSettings.RetrieveTenantSettingsRequest =
    tenantSettingsService.RetrieveTenantSettingsRequest;
exports.Blabber.TenantSettings.RetrieveTenantSettingsResponse =
    tenantSettingsService.RetrieveTenantSettingsResponse;
