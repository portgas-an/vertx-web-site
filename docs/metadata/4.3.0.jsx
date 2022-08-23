import { clone } from "./helpers"
import oldDocs from "./4.2.0"
import { insert, remove } from "./helpers"

const docs = clone(oldDocs)

remove(docs, "vertx-grpc")

insert(docs, "vertx-grpc",
  {
    id: "vertx-grpc",
    name: "Vert.x gRPC",
    description: "使用 Vert.x 实现 gRPC 客户端和服务器端。",
    category: "services",
    href: "/vertx-grpc/java/",
    repository: "https://github.com/eclipse-vertx/vertx-grpc",
    edit: "https://github.com/eclipse-vertx/vertx-grpc/tree/master/vertx-grpc-common/src/main/asciidoc",
    label: "Technical Preview"
  }
 )

insert(docs, "vertx-grpc-netty",
  {
    id: "vertx-grpc-netty",
    name: "gRPC Netty",
    description: "使用 Vert.x 的 gRPC Netty。",
    category: "services",
    href: "/vertx-grpc-netty/java/",
    repository: "https://github.com/vert-x3/vertx-grpc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/grpc-examples",
    edit: "https://github.com/vert-x3/vertx-grpc/tree/master/vertx-grpc/src/main/asciidoc"
  }
 )

insert(docs, "vertx-uri-template",
  {
    id: "vertx-uri-template",
    name: "URI 模版",
    description: "URI 模版 RFC 的实现。",
    category: "web",
    href: "/vertx-uri-template/java/",
    repository: "https://github.com/eclipse-vertx/vertx-uri-template/tree/main/",
    edit: "https://github.com/eclipse-vertx/vertx-uri-template/tree/main/src/main/asciidoc",
    label: "Technical Preview"
  }
 )

export default docs
