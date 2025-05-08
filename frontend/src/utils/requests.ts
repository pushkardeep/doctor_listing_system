import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({});
const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!;

type requestType = {
  formData: Record<string, any>;
  method: string;
  endpoint: string;
};

export const request = async <T>({
  formData,
  method,
  endpoint,
}: requestType): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      url: endpoint,
      method,
      data: formData,
    };

    const response = await axiosInstance<T>(config);
    return response.data;
  } catch (error: any) {
    console.error("Fetch error:", error?.response?.data || error.message);
    throw error;
  }
};
