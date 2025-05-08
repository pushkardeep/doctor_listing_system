"use client";

import { useState } from "react";

// Components
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import CustomButton from "./common/CustomButton"; // Import CustomButton

// Icons
import { Loader } from "lucide-react"; // Import Loader

import { addDoctor } from "../services/doctor.service";

type DoctorForm = {
  name: string;
  location: string;
  experience: string;
  specialization: string;
  isAvailable: string; // or boolean if you're converting it later
  fees: string;
};

type DoctorFormProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setDoctors: React.Dispatch<React.SetStateAction<any[]>>;
};

const DoctorForm = ({ setShowForm, setDoctors }: DoctorFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<DoctorForm>({
    name: "",
    location: "",
    experience: "",
    specialization: "",
    isAvailable: "true",
    fees: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...form,
      isAvailable: form.isAvailable === "true",
      fees: parseInt(form.fees),
      experience: parseInt(form.experience),
    };

    setIsLoading(true);
    const result = await addDoctor(finalData);

    console.log();

    if (result.success) {
      setShowForm(false); // Close the form after successful submission
      setForm({
        name: "",
        location: "",
        experience: "",
        specialization: "",
        isAvailable: "true",
        fees: "",
      });
      if (result.doctor) {
        setDoctors((prev) => [...prev, result.doctor]); // Add the new doctor to the list
      }
      alert(result.message);
    } else {
      alert(result.message);
    }

    setIsLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        id="name"
        label="Name"
        placeholder="Dr. Jane Doe"
        value={form.name}
        onChange={handleChange}
      />
      <TextInput
        id="location"
        label="Location"
        placeholder="New York"
        value={form.location}
        onChange={handleChange}
      />
      <TextInput
        id="experience"
        label="Experience (Years)"
        type="number"
        placeholder="5"
        value={form.experience}
        onChange={handleChange}
      />
      <SelectInput
        id="specialization"
        label="Specialization"
        value={form.specialization}
        onChange={handleChange}
        options={[
          { label: "Select specialization", value: "" },
          { label: "Cardiologist", value: "Cardiologist" },
          { label: "Dermatologist", value: "Dermatologist" },
          { label: "Pediatrician", value: "Pediatrician" },
          { label: "Neurologist", value: "Neurologist" },
        ]}
      />
      <SelectInput
        id="isAvailable"
        label="Availability"
        value={form.isAvailable}
        onChange={handleChange}
        options={[
          { label: "Available", value: "true" },
          { label: "Not Available", value: "false" },
        ]}
      />
      <TextInput
        id="fees"
        label="Consultation Fees (Rs)"
        type="number"
        placeholder="500"
        value={form.fees}
        onChange={handleChange}
      />

      {/* Use CustomButton instead of default button */}
      {!isLoading && (
        <CustomButton
          type="submit"
          label="Submit"
          textClassName="text-white text-[14px]"
          className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl py-2 transition duration-200"
        />
      )}

      {isLoading && (
        <div className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl py-2 transition duration-200">
          <Loader color="white" className=" animate-spin mx-auto" />
        </div>
      )}
    </form>
  );
};

export default DoctorForm;
