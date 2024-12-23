import axios from "axios";
import { serverApiUrl } from "../../../../../../ApiSecret";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";

const InboxMessage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        axios.get(`${serverApiUrl}/api/contact`)
            .then(response => {
                console.log("Fetched Data:", response.data);
                setData(response.data.payload.contacts);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <div className="py-6 text-center text-3xl font-bold">
            <div className="overflow-x-auto">
                <table className="table border border-x-white border-b-sky-400 rounded-md">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-blue-400 text-slate-800 font-medium text-lg text-center">
                            <th className="">User Id</th>
                            <th>Contact Name</th>
                            <th>Contact Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((message, index) => (
                            <tr key={message._id} className={index % 2 === 0 ? "bg-base-200 text-sm font-normal hover:bg-sky-200 text-center" : "text-sm font-normal hover:bg-green-200 text-center"}>
                                <td>
                                    <Link to={message._id}>
                                        {message.userId}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={message._id}>
                                        {message.contactName}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={message._id}>
                                        {message.contactEmail}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={message._id}>
                                        {message.message}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InboxMessage;
