import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { serverApiUrl } from "../../../ApiSecret";

export const useDeleteItemById = (refetch) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteById = async (deleteOption, deleteTitle, showDeleteTitle) => {
    try {
      setIsDeleting(true); // Set deleting state to true
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: `You are about to delete the ${deleteTitle}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`${serverApiUrl}/${deleteOption}`);
        if (response.status === 201) {
          refetch(); // Refresh the data after deletion
          Swal.fire(
            'Deleted!',
            `${showDeleteTitle} has been deleted.`,
            'success'
          );
        }
      }
    } catch (error) {
      if (error.response?.status === 422) {
        const errorMessages = error.response.data.errors;
        Swal.fire({
          title: "Validation Error",
          icon: "error",
          html: errorMessages
            .map((err) => `<p>${err.field}: ${err.message}</p>`)
            .join(""),
        });
      } else {
        Swal.fire({
          title: "Error",
          text: error.message || "Something went wrong",
          icon: "error",
        });
      }
    } finally {
      setIsDeleting(false); // Set deleting state back to false
    }
  };

  return {
    handleDeleteById,
    isDeleting,
  };
};
