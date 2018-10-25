# Blabber GRPC CLIENT API

As we have shared logic between the two servers we use one repo for both.

## NodeJS Protobuf Compiler

```bash
npm install -g grpc-tools
```

```bash
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./nodejs --grpc_out=./nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I ./proto-libs ./proto-libs/model/user.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./nodejs --grpc_out=./nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I ./proto-libs ./proto-libs/chat-backend/chat.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./nodejs --grpc_out=./nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I ./proto-libs ./proto-libs/agent-platform/userRelationships.proto
```
## Ruby Protobuf Compiler

```bash
gem install grpc-tools
```

```bash
grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/model/user.proto

grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/chat-backend/chat.proto

grpc_tools_ruby_protoc -I ./proto-libs --ruby_out=./ruby --grpc_out=./ruby ./proto-libs/agent-platform/userRelationships.proto
```
