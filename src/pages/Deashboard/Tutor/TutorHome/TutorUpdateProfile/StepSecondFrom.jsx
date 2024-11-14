import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SearchDropdown from '../../../../../Components/SearchInputFuntion/SearchDropdown';
import BangladeshAllUniversitiesName from '../../../../../Helpers/BDAllUniversityName';
import EducationLevels from '../../../../../Helpers/EducationLevels';
import UniversityGroupSubjects from '../../../../../Helpers/UniversityGroupSubjects';
import ProgrammingLanguages from '../../../../../Helpers/ProgrammingLangues';
import PolytechnicSubjects from '../../../../../Helpers/PolytecnicAllSubject';

const StepSecondForm = ({ completeStep }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [selectedUniversity, setSelectedUniversity] = useState(''); // State to store selected university
  const [educationLevels, setEducationLevels] = useState(''); // State to store selected university
  const [universitySubjects, setUniversitySubjects] = useState(''); // State to store selected university
  const [polytechnicSubjects, setPolytechnicSubjects] = useState(''); // State to store selected university
  const [programmingLanguages, setProgrammingLanguages] = useState(''); // State to store selected university

  // Handle form submission
  const onSubmit = (data) => {
    const formData = {

      universitySubjects: universitySubjects,
      educationLevels: educationLevels,
      programmingLanguages: programmingLanguages,
      resultUniversity: data.resultUniversity,
      collegeName: data.collegeName,
      collegeGroup: polytechnicSubjects,
      hscResult: data.hscResult,
      hscPassYears: data.hscPassYears,
      schoolName: data.schoolName,
      schoolGroup: data.schoolGroup,
      sscResult: data.sscResult,
      schoolPassYears: data.schoolPassYears,
      instituteStartYears: data.instituteStartYears
    };
    console.log('Submitted Form Data:', formData);
    completeStep(formData);
  };

  // Function to update the selected university
  const handleUniversitySelect = (option) => {
    setSelectedUniversity(option);
    setValue('selectedUniversity', option); // Optionally, update react-hook-form's value
  };
  // Function to update the selected Education Levels
  const handleEducationLevels = (option) => {
    setEducationLevels(option);
    setValue('educationLevels', option);
  };

  // Function to update the selected Education Levels
  const handlePolytechnicSubjects = (option) => {
    setPolytechnicSubjects(option);
    setValue('polytechnicSubjects', option);
  };

  // Function to update the selected Subject
  const handleUniversitySubjects = (option) => {
    setUniversitySubjects(option);
    setValue('universitySubjects', option);
  };

  // Function to update the selected Programming langues
  const handleProgrammingLanguages = (option) => {
    setProgrammingLanguages(option);
    setValue('programmingLanguages', option);
  };

  return (
    <>
      <h3 className="text-center text-xl font-semibold pt-4">একাডেমিক ইনফর্মেশন</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-9">
        <h2 className="text-lg font-bold text-slate-800">Education</h2>

        {/* University Search Dropdown */}
        <div className='space-y-2'>
          <div className="space-y-1">
            <label className="block text-slate-700 font-medium">
              <span className="font-bold text-slate-500 tracking-wider">University Name</span>
            </label>
            <SearchDropdown
              options={BangladeshAllUniversitiesName} // Pass university options
              selectedValue={selectedUniversity}
              onSelect={handleUniversitySelect} // Callback to handle selection
            />
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {/* Class Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Class</span>
              </label>
              <SearchDropdown
                options={EducationLevels}
                selectedValue={educationLevels}
                onSelect={handleEducationLevels} // Callback to handle selection
              />
            </div>
            {/* Group/Subject Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Group/Subject</span>
              </label>
              <SearchDropdown
                options={UniversityGroupSubjects}
                selectedValue={universitySubjects}
                onSelect={handleUniversitySubjects} // Callback to handle selection
              />
            </div>

            {/* Result Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Result</span>
              </label>
              <input
                {...register("resultUniversity", { required: true })}
                type="text"
                placeholder="Enter Your Class"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div>
          </div>
        </div>

        {/* Colleges section */}
        <div className='space-y-2'>
          <div className="space-y-1">
            <label className="block text-slate-700 font-medium">
              <span className="font-bold text-slate-500 tracking-wider">Your College Name*</span>
            </label>
            <input
              {...register("collegeName", { required: true })}
              type="text"
              placeholder="Enter Your College Name"
              className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
            />
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5 space-y-1'>
            {/* Class Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Group</span>
              </label>
              <SearchDropdown
                options={PolytechnicSubjects}
                selectedValue={polytechnicSubjects}
                onSelect={handlePolytechnicSubjects} // Callback to handle selection
              />
            </div>
            {/* Result Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Result</span>
              </label>
              <input
                {...register("hscResult", { required: true })}
                type="text"
                placeholder="Your HSC Result"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div>
            {/*Pass Years Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Pass Years</span>
              </label>
              <input
                {...register("hscPassYears", { required: true })}
                type="number"
                placeholder="Pass Years"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div>
          </div>
        </div>

        {/* School section */}
        <div className='space-y-2'>
          <div className="space-y-1">
            <label className="block text-slate-700 font-medium">
              <span className="font-bold text-slate-500 tracking-wider">Your School Name*</span>
            </label>
            <input
              {...register("schoolName", { required: true })}
              type="text"
              placeholder="Enter Your School Name"
              className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
            />
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {/* Class Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Group</span>
              </label>
              <select {...register("schoolGroup")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm">
                <option selected disabled>--select--</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/* Result Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Result</span>
              </label>
              <input
                {...register("sscResult", { required: true })}
                type="text"
                placeholder="Your SSC Result"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div>
            {/*Pass Years Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Pass Years</span>
              </label>
              <input
                {...register("schoolPassYears", { required: true })}
                type="number"
                placeholder="Pass Years"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div>
          </div>
        </div>


        {/* programming section */}
        <div className='space-y-2'>
          <p className='text-sm font-bold text-slate-600'>Optional</p>
          <h5 className='text-sm text-slate-600 font-semibold'>Your Learn Programming Langues</h5>
          <div className="space-y-1">
            <label className="block text-slate-700 font-medium">
              <span className="font-bold text-slate-500 tracking-wider">Institute</span>
            </label>
            <input
              {...register("instituteName",)}
              type="text"
              placeholder="Enter Your Institute Name"
              className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
            />
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5 pt-1'>
            {/* Class Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Programming Langues</span>
              </label>
              <SearchDropdown
                options={ProgrammingLanguages}
                selectedValue={programmingLanguages}
                onSelect={handleProgrammingLanguages} // Callback to handle selection
              />
            </div>
            {/*Pass Years Input */}
            <div className="col-span-1 space-y-1">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">Start Years</span>
              </label>
              <input
                {...register("instituteStartYears")}
                type="number"
                placeholder="Years"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div>

            {/* Result Input */}
            <div className="space-y-2 w-full max-w-xs mx-auto">
              <label className="block text-slate-700 font-medium">
                <span className="font-medium text-sm text-slate-700 tracking-wider">Certificate Picture (সর্বোচ্চ 200kb)</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-success w-full"
                {...register("programmingCertificate",
                  // {
                  //   validate: {
                  //     fileType: (value) =>
                  //       ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                  //     fileSize: (value) =>
                  //       value[0]?.size <= 200 * 1024 || "File size should be less than or equal to 200KB.",
                  //   },
                  // }
                )}
                accept=".png, .jpg, .jpeg"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex items-center justify-center'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-4 py-2 rounded-md mt-4"
          >
            Save and Next
          </button>
        </div>
      </form>
    </>
  );
};

export default StepSecondForm;
