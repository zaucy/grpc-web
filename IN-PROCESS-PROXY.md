# Overview

In-process proxies allow a browser client to talk to the gRPC server directly without deploying any intermediary process
such as an Envoy proxy. This document provides a high-level design guidelines on how we expect such a "proxy" to work.

# The choice of HTTP stack

We strongly recommend the gRPC-Web module use the default HTTP stack provided by the language platform, or in the case of Java,
the standard Java Servlet stack. This is to ensure maximum portability and to ease integration between gRPC-Web and existing Web
frameworks.

The actual HTTP version that the HTTP stack supports may include both HTTP/1.1 and HTTP/2. In the runtime, it's up to the user-agent and 
intermediaries to negotiate the HTTP version, which is mostly transparent to the gRPC-Web module.

# Proxy or not

For most languages, the gRPC-Web module will handle the gRPC-Web request, do the translation, and then proxy the request using a gPRP client 
to the gRPC server via a local socket. The gRPC-Web support is totally transparent to the gRPC server.

For some languages, such as Swift, if the gRPC server implementation uses the same HTTP stack as gRPC-Web, then gRPC-Web may be supported 
directly as part of the gRPC server implementation. The added complexity to the gRPC iteslf is still a concern.

# HTTP port

We expect that gRPC-Web requests are handled on a separate port. If the HTTP stack supports both HTTP/2 and HTTP/1.1, port sharing could be supported. 
However, since CORS is a mandatory feature for gRPC-Web proxies, porting sharing is optional for in-process proxies.




