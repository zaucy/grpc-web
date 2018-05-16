const fs = require("fs");
const path = require("path");
const download = require("download");

const PLUGIN = require("./");

const PREFIX = "https://github.com/zaucy/grpc-web/releases/download/";
const VERSION = "0.0.1";
const EXT = process.platform == 'win32' ? '.exe' : '';

download(
  `${PREFIX}grpc-gen-${VERSION}/protoc-gen-grpc-web-${process.platform}` + EXT
).then(value => {
  let pluginStream = fs.createWriteStream(PLUGIN);
  pluginStream.write(value);
  pluginStream.end(() => {
    fs.chmodSync(PLUGIN, '0755');
  });
});
