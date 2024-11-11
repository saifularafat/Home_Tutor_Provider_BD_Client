import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SearchDropdown from '../../../../../Components/SearchInputFuntion/SearchDropdown';
import BangladeshAllUniversitiesName from '../../../../../Helpers/BDAllUniversityName';
import EducationLevels from '../../../../../Helpers/EducationLevels';
import UniversityGroupSubjects from '../../../../../Helpers/UniversityGroupSubjects';

const StepSecondForm = ({ completeStep }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedUniversity, setSelectedUniversity] = useState(''); // State to store selected university
  const [educationLevels, setEducationLevels] = useState(''); // State to store selected university
  const [universitySubjects, setUniversitySubjects] = useState(''); // State to store selected university

  // Handle form submission
  const onSubmit = (data) => {
    const formData = {
      universityName: selectedUniversity,
      educationLevels: educationLevels,
      universitySubjects: universitySubjects,
      resultValue: data.resultValue,
    };
    console.log('Submitted Form Data:', formData);
    // completeStep(formData);
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
  const handleUniversitySubjects = (option) => {
    setUniversitySubjects(option);
    setValue('universitySubjects', option);
  };

  return (
    <>
      <h3 className="text-center text-xl font-semibold pt-4">একাডেমিক ইনফর্মেশন</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-5">
        <h2 className="text-lg font-bold text-slate-800">Education</h2>

        {/* University Search Dropdown */}
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
              <span className="font-bold text-slate-500 tracking-wider">Class</span>
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
              {...register("resultValue", { required: true })}
              type="text"
              placeholder="Enter Your Class"
              className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Save and Next
        </button>
      </form>
    </>
  );
};

export default StepSecondForm;
