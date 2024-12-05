import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await apiClient.post<string>("/upload", formData); // Assuming the upload endpoint is "/upload"
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}
