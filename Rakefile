desc "Build Ruby Proto lib"
task 'build-ruby' do
  sh "grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/Model/user.proto && grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/chat-backend/chat.proto && grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/agent-platform/userRelationships.proto &&grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/agent-platform/tenantSettings.proto&&grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/agent-platform/userPreferences.proto"
end
