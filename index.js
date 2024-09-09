const Fastify = require("fastify");
const underPressure = require("@fastify/under-pressure");

const fastify = Fastify();

fastify.register(underPressure, {
  maxEventLoopDelay: 2000,
});

fastify.get("/", (req, rep) => rep.send("A"));

fastify.listen({ port: 3000 }, () => console.log("listen on 3000"));
