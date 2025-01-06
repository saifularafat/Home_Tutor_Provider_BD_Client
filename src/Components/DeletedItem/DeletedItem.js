import axios from "axios";
import Swal from "sweetalert2";
import { serverApiUrl } from "../../../ApiSecret";

export const handleDeleteById = (deleteOption, deleteTitle, refetch, showDeleteTitle) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: `You ${deleteTitle} Select by delete!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axios.delete(`${serverApiUrl}/${deleteOption}`);
                if (response.status === 201) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        `${showDeleteTitle} is deleted.`,
                        'success'
                    );
                }
            }
        });
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
    }
};
