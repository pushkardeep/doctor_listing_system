import React from "react";
import CustomButton from "./common/CustomButton";

type CardProps = {
  name: string;
  location: string;
  experience: string;
  isAvailable: boolean;
  specialization: string;
  fees: number;
};

function ListingCard({
  name,
  location,
  experience,
  isAvailable,
  specialization,
  fees,
}: CardProps) {
  return (
    <div className="w-full max-w-[900px] mx-auto border border-zinc-200 shadow-md rounded-2xl p-6 bg-white flex flex-col md:flex-row items-center justify-between gap-6 transition hover:shadow-lg duration-300">
      {/* Top section: Image + Info */}
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Image */}
        <div className="w-[100px] h-[100px] rounded-2xl bg-zinc-300 flex-shrink-0" />

        {/* Info */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-xl font-semibold text-zinc-800">{name}</h2>
          <p className="text-sm text-blue-600 font-medium">{specialization}</p>
          <p className="text-sm text-zinc-700">
            {experience} years of experience
          </p>
          <p className="text-sm text-zinc-500">{location}</p>
          <p className="text-sm text-zinc-400">Apollo 24/7 Virtual Clinic</p>
        </div>
      </div>

      {/* Bottom section: Availability + Fees + Button */}
      <div className="flex flex-col items-center md:items-end gap-3">
        {/* Availability badge */}
        <div
          className={`bg-green-100  text-xs px-3 py-1 rounded-full font-medium ${
            isAvailable ? "text-green-700" : "text-red-700"
          }`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </div>

        {/* Fees */}
        <p className="text-lg font-bold text-zinc-800">₹{fees}</p>

        {/* Button */}
        <CustomButton
          label="Consult now"
          textClassName="text-sm font-medium"
          className="w-full md:w-[200px] bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition duration-200"
        />
      </div>
    </div>
  );
}

export default ListingCard;
