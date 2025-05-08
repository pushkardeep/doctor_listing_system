import React, { useState } from "react";
import CustomButton from "./common/CustomButton"; // Adjust path if needed
import { listDoctors } from "@/services/doctor.service";

// Types
type Doctor = any; // Replace `any` with actual Doctor type if available

type FilterProps = {
  currentPage: number;
  setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormDataType = {
  specialization: string;
  isAvailable: "true" | "false" | ""; // More specific typing
};

const DoctorFilter: React.FC<FilterProps> = ({
  currentPage,
  setDoctors,
  setCurrentPage,
  setTotalPages,
  setLoading,
  setShowFilter,
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    specialization: "",
    isAvailable: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchDoctors = async () => {
    const filters: Record<string, any> = {};

    if (formData.specialization) {
      filters.specialization = formData.specialization;
    }

    if (formData.isAvailable) {
      filters.isAvailable = formData.isAvailable === "true";
    }

    setShowFilter(false);
    setLoading(true);

    try {
      const response = await listDoctors({
        ...filters,
        page: currentPage,
        limit: 10,
      });

      setDoctors(response.data);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      setLoading(false);
      setFormData({ specialization: "", isAvailable: "" });
    }
  };

  return (
    <div className="space-y-6">
      {/* Specialization Filter */}
      <div>
        <h3 className="text-sm font-medium mb-2 text-zinc-700">Specialization</h3>
        <div className="space-y-2">
          {["Cardiologist", "Dermatologist", "Pediatrician", "Neurologist"].map((spec) => (
            <label key={spec} className="flex items-center gap-2 text-sm text-zinc-600">
              <input
                type="radio"
                name="specialization"
                value={spec}
                checked={formData.specialization === spec}
                onChange={handleFilterChange}
                className="accent-blue-600"
              />
              {spec}
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <h3 className="text-sm font-medium mb-2 text-zinc-700">Availability</h3>
        <div className="space-y-2">
          {[
            { label: "Available", value: "true" },
            { label: "Not Available", value: "false" },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center gap-2 text-sm text-zinc-600">
              <input
                type="radio"
                name="isAvailable"
                value={value}
                checked={formData.isAvailable === value}
                onChange={handleFilterChange}
                className="accent-blue-600"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <CustomButton
        onClick={fetchDoctors}
        label="Apply Filters"
        className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200"
        textClassName="text-white font-medium"
      />
    </div>
  );
};

export default DoctorFilter;
