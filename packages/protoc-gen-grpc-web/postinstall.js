const fs = require('fs-extra');
const download = require('download');
const PLUGIN = require("./");

const DL_PREFIX = 'https://github.com/zaucy/grpc-web/releases/download/';
const REPO = 'grpc-web';
const BIN_DIR = path.resolve(__dirname, "bin");
const EXT = process.platform === 'win32' ? '.exe' : '';

async function start() {
  await fs.ensureDir(BIN_DIR);
  const packageJsonPath = path.resolve(__dirname, 'package.json');
  const {version} = await fs.readJson(packageJsonPath);
  const execFilename = 'protoc-gen-grpc-web-' + process.platform + EXT;

  const downloadUrl = DL_PREFIX + REPO + '-' + version + execFilename;

  const buffer = await download(downloadUrl);

  const pluginStream = fs.createWriteStream(PLUGIN);
  pluginStream.write(buffer);
  pluginStream.end(() => {
    fs.chmodSync(PLUGIN, '0755');
  });
}

start();


