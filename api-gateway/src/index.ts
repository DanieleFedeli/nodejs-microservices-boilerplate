import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
	resolvers: globalResolvers,
	typeDefs: globalQuery,
	tracing: true,
});

server.setGraphQLPath("graphql");
server.listen(graphqlPort).then(({ url }) => {
	console.log(`🚀 Apollo server ready on ${url}`);
	console.log("⚡️ Playground exposed on /graphql");
});
