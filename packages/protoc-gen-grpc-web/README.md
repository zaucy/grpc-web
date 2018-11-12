# gRPC web protoc plugin

This is an unofficial npm binary distribution of the gRPC web protoc plugin.

## Usage via JavaScript

This package exports the full path to the plugin. You can access it like so:

```JavaScript
const protocGrpcWebPluginPath = require('zaucy-protoc-gen-grpc-web');
```

## Usage globally via npm installed cli

Install with npm globally

```sh
npm i zaucy-protoc-gen-grpc-web -g
```

Use with protoc

```sh
protoc example.proto --grpc-web_out=.
```

**Note for windows:** The above will not work with npm installed protoc plugins. Instead you will have to supply the full path with the protoc `--plugin` flag.
