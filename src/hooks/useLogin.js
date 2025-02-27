import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4";


const apiBaseUrl = import.meta.env.VITE_AUTH_API_BASE_URL;

const useLogin = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = async (title, text, icon = "info", confirmButtonText = "OK") => {
    await Swal.fire({
      title,
      text,
      icon,
      confirmButtonText,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(`${apiBaseUrl}/Auth`, formData, {
        headers: { "Content-Type": "application/json" },
      });
  
      const { result, message } = response.data;
  
      if (result === 1) {
        // Success case: Use showAlert for success response
        await showAlert("Login Successful!", message, "success");
      } else {
        // Failure case: Use showAlert for error response
        await showAlert("Login Failed!", message, "error");
      }
  
    } catch (err) {
      let errorMessage = "An error occurred";

      if (err.response) {
        errorMessage = err.response?.data?.message || errorMessage;
      } else if (err.request) {
        errorMessage = "No response from the server. Please check your connection.";
      } else {
        errorMessage = err.message;
      }
  
      await showAlert("Oops!", errorMessage, "error");
      
      setError(errorMessage); 
    } finally {
      setLoading(false); 
    }
  };

  return { formData, error,loading, handleChange, handleSubmit };
};

export default useLogin;
