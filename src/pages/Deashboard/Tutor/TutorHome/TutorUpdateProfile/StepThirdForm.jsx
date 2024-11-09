import { useState } from "react";
import { useForm } from "react-hook-form";
import { GiBoxUnpacking } from "react-icons/gi";

const StepThirdForm = ({ completeStep }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // State to store selected area and multiple selected sub-areas
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedSubAreas, setSelectedSubAreas] = useState([]);

    // Options for the dropdown
    const options = [
        "Class-1", "Class-2", "Class-3", "Class-4", "Class-5",
        "Class-6", "Class-7", "Class-8", "Class-9", "Class-10",
        "Class-11", "Class-12", "Nine-Ten", "SSC", "HSC", "Quran",
        "Diploma", "Honor", "Honors", "MBBS", "BDS", "BBA", "Degree",
        "Play", "KG", "1 to 5", "1 to 8", "6 to 8", "11 to 12",
        "BSc Engineering", "IELTS", "BCS", "Medical Admission",
        "Engineering Admission", "Pre School", "Dakhil", "Alim",
        "Fazil", "Kamil", "Arabic", "Job Preparation", "Bank Job Preparation",
        "Master of Science", "Special Care", "General Knowledge"
    ];
    const subjects = [
        "Mathematics", "English", "Science", "History", "Geography", "Physics", "Chemistry", "Biology",
        "Computer Science", "Economics", "Psychology", "Art", "Physical Education", "Music",
        "Philosophy", "Political Science", "Sociology", "Business Studies", "Accounting", "Environmental Science",
        "Media Studies"
    ];

    // Sub-area options based on the selected area
    const subAreaOptions = {
        "Dhaka":
            ["Ramna", "Bangshal", "Chawkbazar", "Jatrabari", "Lalbagh", "Motijheel", "Dhanmondi", "Uttara",
                "Khilkhet", "Kuril", "Badda", "Baridhara", "Banani", "Gulshan", "Kamrangirchar", "Hazaribagh",
                "Shahjahanpur", "Adabar", "Mohammadpur", "Shyamoli", "Kafrul", "Pallabi", "Mirpur", "Mouchak",
                "Khilgaon", "Malibagh", "Rampura", "Banasree",
            ],
        "Chittagong": ["Ramna", "Bangshal", "Chawkbazar", "Jatrabari", "Lalbagh", "Motijheel", "Dhanmondi", "Uttara", "Khilkhet", "Kuril", "Badda", "Baridhara", "Banani", "Gulshan", "Kamrangirchar", "Hazaribagh", "Shahjahanpur", "Adabar", "Mohammadpur", "Shyamoli", "Kafrul", "Pallabi", "Mirpur", "Mouchak", "Khilgaon", "Malibagh", "Rampura", "Banasree", ""],
        "Cumilla": ["Ramna", "Bangshal", "Chawkbazar", "Jatrabari", "Lalbagh", "Motijheel", "Dhanmondi", "Uttara", "Khilkhet", "Kuril", "Badda", "Baridhara", "Banani", "Gulshan", "Kamrangirchar", "Hazaribagh", "Shahjahanpur", "Adabar", "Mohammadpur", "Shyamoli", "Kafrul", "Pallabi", "Mirpur", "Mouchak", "Khilgaon", "Malibagh", "Rampura", "Banasree", ""],
    };

    // Handle dropdown selection for preferable class
    const handleOptionClick = (option) => {
        setSelectedValue(option);
        setIsOpen(false); // Close dropdown on selection
    };


    // Handle dropdown selection for preferable area
    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
        setSelectedSubAreas([]); // Reset sub-area when area is changed
    };

    // Handle checkbox change for multiple selections in Preferable Sub Area
    const handleSubAreaChange = (event) => {
        const value = event.target.value;
        setSelectedSubAreas((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value)
                : [...prevSelected, value]
        );
    };

    const { register, formState: { errors }, handleSubmit } = useForm();

    // Function to handle form submission
    const onSubmit = async (data) => {
        if (!selectedArea || !selectedValue) {
            console.error("Please select an area and class.");
            return; // Prevent submission if validation fails
        }

        // Add area and class to the form data
        const formData = {
            ...data,
            preferableClass: selectedValue,
            preferableArea: selectedArea,
            preferableSubAreas: selectedSubAreas // Include selected sub-areas
        };

        console.log("Form data to submit >>>>>>>>", formData);

        // completeStep(formData); 
        // Proceed to next step if submission is successful


        // try {
        //     const response = await fetch("https://your-api-url.com/submit", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     if (response.ok) {
        //         const result = await response.json();
        //         console.log("Server response:", result);
        //         completeStep(formData); // Proceed to next step if submission is successful
        //     } else {
        //         console.error("Error submitting form:", response.statusText);
        //     }
        // } catch (error) {
        //     console.error("Submission error:", error);
        // }

    };

    return (
        <div className='bg-white rounded-2xl shadow-xl'>
            <h3 className='text-center text-2xl font-semibold pt-4'>অন্যান্য ইনফর্মেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
                {/* Experience section */}
                <div className="flex items-center gap-2">
                    <GiBoxUnpacking className="text-lg text-slate-600" />
                    <h5 className="text-lg font-bold text-slate-600">Experience</h5>
                </div>
                <div className='grid md:grid-cols-2 gap-5 w-full'>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-sm text-slate-600 tracking-wider">Your Experience </span>
                        </label>
                        <input
                            {...register("experience", { required: true })}
                            type="number"
                            placeholder="Enter Your Experience Year"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-sm text-slate-600 tracking-wider">Your Expected Salary </span>
                        </label>
                        <input
                            {...register("expectedSalary", { required: true })}
                            type="text"
                            placeholder="Enter Your Expected Salary"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                </div>

                {/* Preferable Class/Subject section */}
                <div className="flex items-center gap-2">
                    <GiBoxUnpacking className="text-lg text-slate-600" />
                    <h5 className="text-lg font-bold text-slate-600">Your Preferable Class/Subject</h5>
                </div>
                <div className='grid md:grid-cols-4 gap-5 w-full'>
                    {/* Custom dropdown */}
                    <div className="col-span-1 relative">
                        <label htmlFor="preferableClass" className="block text-slate-700 font-medium pb-1">
                            <span className="font-semibold text-slate-600 text-sm">Preferable Class</span>
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-transparent border border-sky-300 rounded-lg px-4 py-3 w-full text-sm cursor-pointer"
                            >
                                {selectedValue || "--Select--"}
                            </div>

                            {isOpen && (
                                <div className="absolute z-10 bg-white border border-sky-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto shadow-lg">
                                    {options.map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Medium fields for the form */}
                    <div className="col-span-1">
                        <label className='block text-slate-700 font-medium pb-1'>
                            <span className="font-semibold text-slate-600 text-sm">Medium</span>
                        </label>
                        <select {...register("medium")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm">
                            <option value="banglaMedium">Bangla Medium</option>
                            <option value="englishMedium">English Medium</option>
                            <option value="englishVersion">English Version</option>
                            <option value="arabicMedium">Arabic Medium</option>
                        </select>
                    </div>

                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-semibold text-slate-600 text-sm">T. Expected Salary </span>
                        </label>
                        <input
                            {...register("TuitionExpectedSalary", { required: true })}
                            type="text"
                            placeholder="Your Tuition Expected Salary"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-xs placeholder:tracking-wider text-sm"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-semibold text-slate-600 text-sm">Preferable Subject</span>
                        </label>
                        <select 
                        {...register("preferableSubject")} 
                        className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        style={{height: 'auto',maxHeight: '100px', overflowY: 'auto'}}
                        >
                            {subjects.map((subject, index) => (
                                <option key={index} value={subject} className="h-20">
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                {/* Additional qualification */}
                <div className="space-y-3">
                    <label className="block text-slate-700 space-y-1">
                        <div>
                            <span className="font-semibold text-slate-600 text-sm">Additional Qualification</span>
                            <p>আপনি কি কোচিং/স্কুল/কলেজ এর শিক্ষক</p>
                        </div>
                    </label>
                    <select {...register("additionalQualification")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        {/* Add more options here */}
                    </select>
                </div>

                {/* Preferable Area */}
                <div className="grid grid-cols-1 gap-5 w-full">
                    <div className="col-span-1">
                        <label htmlFor="preferableArea" className="block text-slate-700 font-medium pb-1">
                            <span className="font-semibold text-slate-600 text-sm">Preferable Area</span>
                        </label>
                        <select
                            {...register("preferableArea")}
                            value={selectedArea}
                            onChange={handleAreaChange}
                            className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm"
                            aria-labelledby="preferableArea"
                        >
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Cumilla">Cumilla</option>
                        </select>
                    </div>

                    {/* Preferable Sub Area section */}
                    {selectedArea && (
                        <div className="col-span-1">
                            <label htmlFor="preferableSubArea" className="block text-slate-700 font-medium pb-1">
                                <span className="font-semibold text-slate-600 text-sm">Preferable Sub Area</span>
                            </label>
                            <div className="grid md:grid-cols-6 lg:grid-cols-7 grid-cols-3 gap-2">
                                {subAreaOptions[selectedArea]?.map((subArea, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            value={subArea}
                                            checked={selectedSubAreas.includes(subArea)}
                                            onChange={handleSubAreaChange}
                                            id={`subarea-${subArea}`}
                                            className="h-4 w-4 text-blue-600"
                                            aria-describedby={`subarea-${subArea}`}
                                        />
                                        <label htmlFor={`subarea-${subArea}`} className="text-sm text-slate-600">
                                            {subArea}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 mx-auto bg-blue-500 text-white rounded"
                    >
                        Save and Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepThirdForm;
