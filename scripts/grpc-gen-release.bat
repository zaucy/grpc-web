
start "" /wait .\scripts\init_submodules.sh

rm -rf release
mkdir release

docker build -t grpc-gen-protoc-gen-grpc-web .
docker run -v %cd%/release:/grpc-web/release --rm -it grpc-gen-protoc-gen-grpc-web
mv ./release/protoc-gen-grpc-web ./release/protoc-gen-grpc-web-linux
bazel build :protoc-gen-grpc-web -c opt
cp ./bazel-out/x64_windows-opt/bin/protoc-gen-grpc-web.exe ./release/protoc-gen-grpc-web-win32.exe

cd grpc-gen-protoc-gen-grpc-web
np --any-branch
cd ..

echo "Remember to upload the ./release folder!"