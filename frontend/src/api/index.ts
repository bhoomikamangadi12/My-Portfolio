import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({
  baseURL: "http://localhost:5000", // your backend URL
});

// Example: get sections for your header
export const getSections = async () => {
  try {
    const response = await API.get("/api/sections");
    console.log("Full response:", response);
    console.log("Response data:", response?.data);
    return response?.data?.sections;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const getProjects = async () => {
  const response = await API.get("/api/projects");
  console.log("Projects API Response:", response?.data?.projects);
  return response?.data?.projects; // ✅ return the array directly
};



// Example: send contact form
export const sendContactForm = async (formData: {name: string, email: string, message: string}) => {
  const response = await API.post("/api/contact", formData);
  return response.data;
};
