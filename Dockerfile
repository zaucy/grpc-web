FROM insready/bazel

WORKDIR /grpc-web

COPY ./ ./

CMD bazel build :protoc-gen-grpc-web -c opt && cp -r ./bazel-out/*-opt/bin/*protoc-gen-grpc-web ./release
