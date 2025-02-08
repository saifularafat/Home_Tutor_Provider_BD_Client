import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SearchDropdown from '../../../../../Components/SearchInputFuntion/SearchDropdown';
import BangladeshAllUniversitiesName from '../../../../../Helpers/BDAllUniversityName';
import EducationLevels from '../../../../../Helpers/EducationLevels';
import UniversityGroupSubjects from '../../../../../Helpers/UniversityGroupSubjects';
import ProgrammingLanguages from '../../../../../Helpers/ProgrammingLangues';
import PolytechnicSubjects from '../../../../../Helpers/PolytecnicAllSubject';
import { useParams } from 'react-router-dom';
import { useSingleUser } from '../../../../../api/useAllUsers';
import Loading from '../../../../../Components/Loading/Loading';
import SearchDropDownField from '../../../../../Components/SearchDropDownFiled/SearchDropDownField';
import { universityResults, YearRange } from '../../../../../Helpers/TuitionJobCreate';

const StepSecondForm = ({ completeStep }) => {
  const { id } = useParams();
  const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);
  // console.log("useSingleUser", user?.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();

  const universityName = watch("universityName");
  const educationLevels = watch("educationLevels");
  const universitySubjects = watch("universitySubjects");
  const universityResult = watch("universityResult");

  const collageSubject = watch("collageSubject");
  const collagePassYear = watch("collagePassYear");
  const schoolPassYears = watch("schoolPassYears");
  const programmingLanguages = watch("programmingLanguages");
  const programmingLanguagesStartYears = watch("programmingLanguagesStartYears");

  // Handle form submission
  const onSubmit = (data) => {
    const formData = {
      universityName: universityName || "N/A",
      educationLevels: educationLevels || "N/A",
      universitySubjects: universitySubjects || "N/A",
      universityResult: universityResult || "N/A",

      collegeName: data.collegeName || "N/A",
      collegeGroup: collageSubject || "N/A",
      collageResult: data.collageResult || "N/A",
      collagePassYear: data.collagePassYear || "N/A",

      schoolName: data.schoolName || "N/A",
      schoolGroup: data.schoolGroup || "N/A",
      schoolResult: data.schoolResult || "N/A",
      schoolPassYears: schoolPassYears || "N/A",

      programmingInstituteName: data.programmingInstituteName || "N/A",
      programmingLanguages: programmingLanguages || "N/A",
      programmingLanguagesStartYear: programmingLanguagesStartYears || "N/A",
      programmingCertificate: data.programmingCertificate || "N/A",
      progressBar: 65,
    };
    console.log('Submitted Form Data:', formData);
    completeStep(formData);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p className="text-red-500">Error fetching user data</p>;
  }
  if (!user?.user) {
    return <p>No user data found</p>;
  }
  return (
    <>
      <h3 className="text-center text-xl font-semibold pt-4">একাডেমিক ইনফর্মেশন</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="md:py-4 py-3 md:px-6 px-3 space-y-9">
        <h2 className="text-lg font-bold text-slate-800">Education</h2>

        {/* University Search Dropdown */}
        <SearchDropDownField
          label="University Name *"
          options={BangladeshAllUniversitiesName}
          selectedValue={universityName}
          setValue={(value) => setValue("universityName", value)}
        />

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
          {/* Class Input */}
          {/* <SearchDropDownField
            label="Your Education Level *"
            options={EducationLevels}
            selectedValue={educationLevels}
            setValue={(value) => setValue("educationLevels", value)}
          /> */}

          {/* Group/Subject Input */}
          {/* <SearchDropDownField
            label="Group/Subject *"
            options={UniversityGroupSubjects}
            selectedValue={universitySubjects}
            setValue={(value) => setValue("universitySubjects", value)}
          /> */}
          {/* Result */}
          {/* <SearchDropDownField
            label="University Result *"
            options={universityResults}
            selectedValue={universityResult}
            setValue={(value) => setValue("universityResult", value)}
          /> */}

          {/* Collage information */}
          <div className='md:col-span-3 col-span-1 space-y-2'>
            {/* <div className="md:col-span-3 col-span-1 space-y-2">
              <label className="block text-slate-700 font-medium">
                <span className="text-slate-700 font-semibold">Your College Name*</span>
              </label>
              <input
                {...register("collegeName", { required: true })}
                type="text"
                placeholder="Enter Your College Name"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
              />
            </div> */}

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 '>
              {/*Collage Group/Subject Input */}
              {/* <SearchDropDownField
                label="Group Subject *"
                options={PolytechnicSubjects}
                selectedValue={collageSubject}
                setValue={(value) => setValue("collageSubject", value)}
              /> */}
              {/* Result Input */}
              {/* <div className="col-span-1 space-y-2">
                <label className="block text-slate-700 font-medium">
                  <span className="font-bold text-slate-500 tracking-wider">Result</span>
                </label>
                <input
                  {...register("collageResult", {
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]\.\d{2}$/,
                      message: "Enter a valid result (e.g., 4.50, 3.79, 5.00)",
                    },
                  })}
                  type="text"
                  placeholder="Enter your result (e.g., 4.50, 5.00, 3.79)"
                  className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full 
        placeholder:text-sm placeholder:tracking-wider text-sm"
                  maxLength={4}
                  onKeyDown={(e) => {
                    const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
                    if (!/^[0-9.]$/.test(e.key) && !allowedKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.collageResult && (
                  <span className="mt-1 text-red-500">
                    {errors.collageResult.message}
                  </span>
                )}
              </div> */}
              {/*Pass Years Input */}
              {/* <SearchDropDownField
                label="Pass Year *"
                options={YearRange}
                selectedValue={collagePassYear}
                setValue={(value) => setValue("collagePassYear", value)}
              /> */}
            </div>
          </div>
        </div>

        {/* School section */}
        <div className='space-y-2'>
          {/* <div className="space-y-1">
            <label className="block text-slate-700 font-medium">
              <span className="font-bold text-slate-500 tracking-wider">Your School Name*</span>
            </label>
            <input
              {...register("schoolName", { required: true })}
              type="text"
              placeholder="Enter Your School Name"
              className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
            />
            {errors.schoolName && (
              <span className="mt-1 text-red-500">
                school name is required!
              </span>
            )}
          </div> */}

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {/* Class Input */}
            {/* <div className="col-span-1 space-y-1">
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
            </div> */}
            {/* Result Input */}
            {/* <div className="col-span-1 space-y-2">
              <label className="block text-slate-700 font-medium">
                <span className="font-bold text-slate-500 tracking-wider">SSC Result</span>
              </label>
              <input
                {...register("schoolResult", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]\.\d{2}$/,
                    message: "Enter a valid result (e.g., 4.50, 3.79, 5.00)",
                  },
                })}
                type="text"
                placeholder="Enter your result (e.g., 4.50, 5.00, 3.79)"
                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full 
        placeholder:text-sm placeholder:tracking-wider text-sm"
                maxLength={4}
                onKeyDown={(e) => {
                  const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
                  if (!/^[0-9.]$/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.schoolResult && (
                <span className="mt-1 text-red-500">
                  {errors.schoolResult.message}
                </span>
              )}
            </div> */}
            {/*Pass Years Input */}
            {/* <SearchDropDownField
              label="Pass Year *"
              options={YearRange}
              selectedValue={schoolPassYears}
              setValue={(value) => setValue("schoolPassYears", value)}
            /> */}
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
              {...register("programmingInstituteName",)}
              type="text"
              placeholder="Enter Your Institute Name"
              className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
            />
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5 pt-1'>
            <SearchDropDownField
              label="Programming Langues"
              options={ProgrammingLanguages}
              selectedValue={programmingLanguages}
              setValue={(value) => setValue("programmingLanguages", value)}
            />
            {/*Pass Years Input */}
            <SearchDropDownField
              label="Starting Year "
              options={YearRange}
              selectedValue={programmingLanguagesStartYears}
              setValue={(value) => setValue("programmingLanguagesStartYears", value)}
            />

            {/* Certificate Picture*/}
            <div className="space-y-2 w-full max-w-xs mx-auto">
              <label className="block text-slate-700 font-medium">
                <span className="font-medium text-sm text-slate-700 tracking-wider">Certificate Picture (সর্বোচ্চ 200kb)</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-success w-full"
                {...register("programmingCertificate", {
                  validate: {
                    fileType: (value) =>
                      value.length === 0 || // If no file is selected, skip validation
                      ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                    fileSize: (value) =>
                      value.length === 0 || value[0]?.size <= 200 * 1024 || "File size should be less than or equal to 200KB.",
                  },
                })}
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
      </form >
    </>
  );
};

export default StepSecondForm;
