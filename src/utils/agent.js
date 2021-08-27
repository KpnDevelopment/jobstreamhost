import superagent from "superagent";

export const imageurl = "http://localhost:7000/img/";
const base_url = "http://localhost:7000";
// const base_url = "http://13.232.167.189:7000";

const tokenPlugin = (req) => {
  var token = localStorage.getItem("auth-key");
  console.log(token);
  if (token) {
    req.set("authorization", token);
  }
};

export const get = async (url) => {
  try {
    const response = await superagent.get(`${base_url}${url}`).use(tokenPlugin);
    return response;
  } catch (err) {}
};
export const post = async (url, body) => {
  try {
    const response = await superagent
      .post(`${base_url}${url}`, body)
      .use(tokenPlugin);
    return response;
  } catch (err) {}
};
export const put = async (url, body) => {
  try {
    const response = await superagent
      .put(`${base_url}${url}`, body)
      .use(tokenPlugin);
    return response;
  } catch (err) {}
};
export const Delete = async (url, body) => {
  try {
    const response = await superagent
      .delete(`${base_url}${url}`)
      .use(tokenPlugin);
    return response;
  } catch (err) {}
};

// export const setToken = (_token) => {
//   token = _token;
// };
