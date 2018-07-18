cc_binary(
  name = "protoc-gen-grpc-web",
  linkstatic = True,
  linkopts = ["-static"],
  srcs = [
    "javascript/net/grpc/web/grpc_generator.cc",
  ],
  deps = [
    "@com_google_protobuf//:protoc_lib"
  ],
)
