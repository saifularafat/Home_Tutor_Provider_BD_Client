import axios from "axios";
import Swal from "sweetalert2";
import { serverApiUrl } from "../../../ApiSecret";
import { useNavigate } from "react-router-dom";

export const handleEditById = async (editOption, updateDetails, refetch, updateTitle, navigate, navigateLink) => {
    try {
        const response = await axios.put(`${serverApiUrl}/${editOption}`, updateDetails);
        console.log('edit ======>>>>>>', response?.data)
        if (response.status === 200 || response.status === 201) {
            refetch();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${updateTitle} updated successfully`,
                showConfirmButton: false,
                timer: 1500,
            });
            navigate(navigateLink);
        }
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        Swal.fire({
            icon: "error",
            title: "Error",
            text: errorMessage,
        });
    }
};
