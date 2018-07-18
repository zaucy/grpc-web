FROM openjdk:8

RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list \
  && curl https://bazel.build/bazel-release.pub.gpg | apt-key add -

RUN apt-get update \
  && apt-get install -y bazel \
  && rm -rf /var/lib/apt/lists/*

RUN bazel version

# # Set up workspace
# RUN mkdir -p /usr/src/app
# ENV WORKSPACE /usr/src/app
# WORKDIR /usr/src/app

WORKDIR /grpc-web

COPY ./ ./

CMD bazel build :protoc-gen-grpc-web -c opt && cp -r ./bazel-out/*-opt/bin/*protoc-gen-grpc-web ./release
