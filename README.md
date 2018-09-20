# Blabber GRPC CLIENT API

As we have shared logic between the two servers we use one repo for both.

## NodeJS Compiler

```bash
npm install -g grpc-tools
```

```bash
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` chat.proto
```