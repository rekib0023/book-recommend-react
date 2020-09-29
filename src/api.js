import axios from "axios";

export default {
  user: {
    login: (credentials) =>
      axios.post("/api/signin", { credentials }).then((res) => res.data.user),
    signup: (user) =>
      axios.post("/api/signup", { user }).then((res) => res.data.user),
  },
};
