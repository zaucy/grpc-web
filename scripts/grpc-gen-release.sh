set -ex

cd "$(dirname "$0")"
./init_submodules.sh
cd ..

mkdir release

docker build -t grpc-gen-protoc-gen-grpc-web .
docker run -v %cd%/release:/grpc-web/release --rm -it grpc-gen-protoc-gen-grpc-web
bazel build :protoc-gen-grpc-web-dist -c opt && cp ./bazel-out/x64_windows-opt/bin/protoc-gen-grpc-web.exe ./release
