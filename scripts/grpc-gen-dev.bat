bazel build :protoc-gen-grpc-web

rm -f ./grpc-gen-protoc-gen-grpc-web/bin/protoc-gen-grpc-web.exe
cp ./bazel-out/x64_windows-fastbuild/bin/protoc-gen-grpc-web.exe ./grpc-gen-protoc-gen-grpc-web/bin/protoc-gen-grpc-web.exe
