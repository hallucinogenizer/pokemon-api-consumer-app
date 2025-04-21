module.exports = {
  "pokemon-file": {
    input: "./src/api.spec.yaml",
    output: {
      mode: "tags-split",
      target: "./src/spec/pokemon-client.ts",
      schemas: "src/spec/model",
      client: "react-query",
      httpClient: "fetch",
      baseUrl: {
        getBaseUrlFromSpecification: true,
      },
    },
  },
};
