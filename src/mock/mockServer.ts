import Mock from "mockjs";
let baseUrl = import.meta.env.VITE_APP_BASE_URL;
Mock.mock(baseUrl + "/api/name", "get", () => {
  return {
    code: 200,
    data: "@name",
  };
});
