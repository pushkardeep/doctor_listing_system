"use client";

import React, { useEffect, useState } from "react";

// Components
import Nav from "@/components/Nav";
import ListingCard from "@/components/ListingCard";
import DoctorForm from "@/components/DoctorForm";
import DoctorFilter from "@/components/DoctorFilter";
import PaginationUI from "@/components/PaginationUI";
import { listDoctors } from "@/services/doctor.service";

// Icons
import { X } from "lucide-react";

const ListingPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDoctors = async () => {
    setLoading(true);
    const response: any = await listDoctors({
      page: currentPage,
      limit: 10,
    });

    setDoctors(response.data);
    setTotalPages(response.totalPages);

    setLoading(false);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="w-full bg-zinc-50 overflow-hidden">
      {/* Navbar */}
      <div className="w-full">
        <Nav setShowForm={setShowForm} setShowFilter={setShowFilter} />
      </div>

      <div className="w-full max-w-[900px] mx-auto px-6 py-10">
        {loading && (
          <h1 className="w-full text-center text-black text-xl mt-[25vh]">
            Loading...
          </h1>
        )}

        {/* Page Heading */}
        {doctors.length > 0 && (
          <h1 className="text-2xl font-semibold text-zinc-800 text-left">
            Consult General Physicians Online - Internal <br /> Medicine
            Specialists
          </h1>
        )}

        {/* Listing Cards Section */}
        {doctors.length > 0 && (
          <div className="w-full h-fit flex flex-col justify-center items-center gap-6 mt-12">
            {doctors.map((doctor: any) => (
              <ListingCard
                key={doctor._id}
                name={doctor.name}
                location={doctor.location}
                experience={doctor.experience}
                isAvailable={doctor.isAvailable}
                specialization={doctor.specialization}
                fees={doctor.fees}
              />
            ))}
          </div>
        )}

        {doctors.length === 0 && !loading && (
          <h1 className="w-full text-center text-black text-xl mt-[25vh]">
            No Doctors found.
          </h1>
        )}

        {/* Doctor Form */}
        {showForm && (
          <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-[400px] h-auto bg-white rounded-2xl p-6 shadow-lg">
              <X
                onClick={() => setShowForm(false)}
                size={24}
                color="black"
                className="cursor-pointer ml-auto"
              />
              <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Add Doctor
              </h2>
              <DoctorForm setShowForm={setShowForm} setDoctors={setDoctors} />
            </div>
          </div>
        )}

        {/* Doctor Filters */}
        {showFilter && (
          <div className="w-screen h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-[400px] bg-white border border-zinc-200 rounded-2xl p-6 shadow space-y-6">
              <X
                onClick={() => setShowFilter(false)}
                size={24}
                color="black"
                className="cursor-pointer ml-auto"
              />
              <h2 className="text-lg font-semibold text-zinc-800">
                Filter Doctors
              </h2>
              <DoctorFilter
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setTotalPages={setTotalPages}
                setShowFilter={setShowFilter}
                setLoading={setLoading}
                setDoctors={setDoctors}
              />
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <PaginationUI
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={fetchDoctors}
          />
        )}
      </div>
    </div>
  );
};

export default ListingPage;
