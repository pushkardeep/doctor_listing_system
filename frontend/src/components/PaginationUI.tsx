import React from "react";
import CustomButton from "./common/CustomButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationUIProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationUI: React.FC<PaginationUIProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <CustomButton
        onClick={() => !isFirst && onPageChange(currentPage - 1)}
        label="Prev"
        icon={ChevronLeft}
        iconColor="white"
        className={`bg-blue-600 hover:bg-blue-700 text-white ${
          isFirst ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />

      {pages.map((page) => (
        <CustomButton
          key={page}
          onClick={() => onPageChange(page)}
          label={page.toString()}
          className={`${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-zinc-100 text-black hover:bg-zinc-200"
          } px-3`}
        />
      ))}

      <CustomButton
        onClick={() => !isLast && onPageChange(currentPage + 1)}
        label="Next"
        icon={ChevronRight}
        iconColor="white"
        className={`bg-blue-600 hover:bg-blue-700 text-white ${
          isLast ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default PaginationUI;
