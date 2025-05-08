import { request } from "@/utils/requests";

type DoctorForm = {
  name: string;
  location: string;
  experience: number;
  specialization: string;
  isAvailable: boolean; // or boolean if you're converting it later
  fees: number;
};

type AddDoctorResponse = {
  success: boolean;
  message: string;
  doctor: any; // Adjust this type based on your actual doctor object structure
};

const addDoctor = async (formdata: DoctorForm): Promise<AddDoctorResponse> => {
  try {
    const result: { success: boolean; message: string; doctor: any } =
      await request({
        formData: formdata,
        method: "POST",
        endpoint: "/doctor/add",
      });

    if (result.success) {
      return {
        success: true,
        message: result.message || "Doctor added successfully",
        doctor: result.doctor,
      };
    } else {
      return {
        success: false,
        message: "Failed to add doctor",
        doctor: null,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to add doctor",
      doctor: null,
    };
  }
};

type ListDoctorsParams = {
  specialization?: string;
  isAvailable?: boolean;
  page: number;
  limit: number;
};

type ListDoctorsResponse = {
  success: boolean;
  data: any[];
  currentPage: number;
  totalPages: number;
  totalDoctors: number;
};

type ListDoctorsReturn = {
  data: any[];
  currentPage: number;
  totalPages: number;
  totalDoctors: number;
};

const listDoctors = async (
  params: ListDoctorsParams
): Promise<ListDoctorsReturn> => {
  try {
    const query = new URLSearchParams();

    if (params.specialization)
      query.append("specialization", params.specialization);

    if (params.isAvailable !== undefined)
      query.append("isAvailable", String(params.isAvailable));

    if (params.page) query.append("page", String(params.page));
    if (params.limit) query.append("limit", String(params.limit));

    const result: ListDoctorsResponse = await request({
      formData: {}, // If your request function doesn't actually use this for GET, remove it
      method: "GET",
      endpoint: `/doctor/list?${query.toString()}`,
    });

    if (result.success) {
      return result;
    } else {
      return {
        data: [],
        currentPage: 1,
        totalPages: 1,
        totalDoctors: 0,
      };
    }
  } catch (error: any) {
    console.error("Failed to list doctors:", error);
    return {
      data: [],
      currentPage: 1,
      totalPages: 1,
      totalDoctors: 0,
    };
  }
};

export { addDoctor, listDoctors };
