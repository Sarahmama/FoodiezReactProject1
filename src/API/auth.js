import instance from "./index";

const register = async (formData) => {
  const data = await instance.post("auth/register", formData);
  localStorage.setItem("token", data.token);
  console.log("register data", data);
  return data;
};
const login = async (formData) => {
  const data = await instance.post("auth/login", formData);
  localStorage.setItem("token", data.token);
  console.log("login data", data);
  return data;
};
const logout = () => {
  try {
    localStorage.removeItem("token");
    alert("User logged out successfully.");
  } catch (error) {
    console.error("Error during logout:", error.message);
  }
};

export { register, login, logout };
