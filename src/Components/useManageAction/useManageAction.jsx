import Swal from "sweetalert2";
import { serverApiUrl } from "../../../ApiSecret";
import axios from "axios";

export const useManageAction = (refetch) => {
    const handleManageAction = async (apiPath, action, itemTitle, displayTitle) => {
        try {
            const result = await Swal.fire({
                title: `Are you sure you want to ${action} this ${itemTitle}?`,
                text: `You are about to ${action} this ${itemTitle}.`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: `Yes, ${action} it!`,
            });

            if (result.isConfirmed) {
                const url = apiPath.startsWith("http") ? apiPath : `${serverApiUrl}/${apiPath}`;
                const response = await axios.put(url, { action });

                // console.log("API Response:", response);
                if (response.status === 200 || response.data?.success) {
                    refetch();
                    Swal.fire(
                        "Success!",
                        `The ${displayTitle} has been ${action} successfully.`,
                        "success"
                    );
                } else {
                    Swal.fire({
                        title: "Unexpected Response!",
                        text: "The operation completed, but we didn't get the expected result.",
                        icon: "warning",
                    });
                }
            }
        } catch (error) {
            console.error("API Error:", error);
            const errorMessage =
                error.response?.data?.message || "Something went wrong. Please try again.";
            Swal.fire({
                title: "Error!",
                text: errorMessage,
                icon: "error",
            });
        }
    };

    return { handleManageAction };
};
