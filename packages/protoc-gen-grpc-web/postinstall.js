const fs = require('fs-extra');
const download = require('download');
const PLUGIN = require("./");

const OWNER = 'zaucy';
const REPO = 'grpc-web';
const DL_PREFIX = `https://github.com/${OWNER}/${REPO}/releases/download/`;
const BIN_DIR = path.resolve(__dirname, "bin");
const EXT = process.platform === 'win32' ? '.exe' : '';
const VERSION_PREFIX = 'zaucy-';

async function start() {
  await fs.ensureDir(BIN_DIR);
  const packageJsonPath = path.resolve(__dirname, 'package.json');
  const {version} = await fs.readJson(packageJsonPath);
  const execFilename = 'protoc-gen-grpc-web-' + process.platform + EXT;

  const downloadUrl = DL_PREFIX + VERSION_PREFIX + version + execFilename;

  const buffer = await download(downloadUrl);

  const pluginStream = fs.createWriteStream(PLUGIN);
  pluginStream.write(buffer);
  pluginStream.end(() => {
    fs.chmodSync(PLUGIN, '0755');
  });
}

start();
