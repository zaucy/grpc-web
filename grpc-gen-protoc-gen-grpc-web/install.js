const fs = require("fs");
const path = require("path");
const download = require("download");

const PLUGIN = require("./");
const PACKAGE = require(path.resolve(__dirname, "./package.json"));

const PREFIX = "https://github.com/zaucy/grpc-web/releases/download/";
const VERSION = PACKAGE.version;
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
