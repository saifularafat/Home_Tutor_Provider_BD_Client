import { useState } from 'react';
import { useForm } from 'react-hook-form';

const TutorUpdateProfile = () => {
  // State for the current step, progress, and message
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(20); // Start at 20%
  const [progressMessage, setProgressMessage] = useState('আপনার প্রথম ধাপ সম্পন্ন করুন।');

  // Function to complete a step and move to the next step
  const completeStep = () => {
    let newProgress;
    let newMessage = '';

    if (currentStep === 1) {
      newProgress = 50;
      newMessage = 'আপনার প্রথম ধাপ সম্পন্ন হয়েছে, দ্বিতীয় ধাপ সম্পন্ন করুন।';
    } else if (currentStep === 2) {
      newProgress = 75;
      newMessage = 'আপনার দ্বিতীয় ধাপ সম্পন্ন হয়েছে, তৃতীয় ধাপ সম্পন্ন করুন।';
    } else if (currentStep === 3) {
      newProgress = 100;
      newMessage = 'আপনার প্রোফাইলের শেষ ধাপটি সম্পূর্ণ করুন';
    } else {
      return;
    }

    setProgress(newProgress);
    setProgressMessage(newMessage);

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Allow navigation to any step only when progress is 100%
  const handleStepClick = (stepNum) => {
    if (progress === 100 || stepNum <= currentStep) {
      setCurrentStep(stepNum);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form data:", data);
    completeStep(); // Move to the next step on successful submission
  };

  return (
    <div className="max-w-full mx-auto p-4">
      {/* Message */}
      <p className="text-center text-lg text-slate-700 py-1">{progressMessage}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-2 my-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center font-semibold text-blue-400 mb-1">{progress}% Complete</p>

      {/* Step Tabs */}
      <h2 className="text-2xl font-semibold mb-2">Profile Update</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mb-8 bg-white shadow-xl py-6 px-5 rounded-lg">
        {[1, 2, 3, 4].map((stepNum) => (
          <button
            key={stepNum}
            onClick={() => handleStepClick(stepNum)}
            className={`px-8 py-4 rounded ${currentStep === stepNum
              ? 'bg-blue-500 text-white'
              : stepNum < currentStep || progress === 100
                ? 'bg-blue-300 text-white'
                : 'bg-gray-300 text-gray-600'
              }`}
            disabled={!(progress === 100 || stepNum <= currentStep)}
          >
            Step {stepNum}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className=" border rounded mb-4">
        {currentStep === 1 && (
          <div className='bg-white rounded-2xl shadow-xl'>
            {/* STEP 01 */}
            <h3 className='text-center text-2xl font-semibold pt-4'>পারসোনাল ইনফর্মেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
              <div className='grid md:grid-cols-2 gap-5 w-full'>
                <div className="col-span-1">
                  <label className="block text-slate-700 font-medium">
                    <span className="font-bold text-slate-500 tracking-wider">Name </span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter Your Name"
                    className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-slate-700 font-medium">
                    <span className="font-bold text-slate-500 tracking-wider">Email </span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-5 w-full'>
                <div className="col-span-1">
                  <label htmlFor='image' className='block text-slate-700 font-medium pb-1'>
                    <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                  </label>
                  <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-slate-700 font-medium">
                    <span className="font-bold text-slate-500 tracking-wider">Your Number </span>
                  </label>
                  <input
                    {...register("number", { required: true })}
                    type="number"
                    placeholder="Enter Your Number"
                    className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                  />
                </div>
              </div>

              <div className=" space-y-1">
                <label className="block text-slate-700  font-medium">
                  <span className="font-bold text-slate-500 tracking-wider">Address </span>
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Enter Your Address"
                  className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                />
                {errors.phone && (
                  <span className="mt-1 text-red-500">
                    Address field is required
                  </span>
                )}
              </div>
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
        )}
        {currentStep === 2 && (
          <div className='bg-white rounded-2xl shadow-xl'>
            {/* STEP 02 */}
            <h3 className='text-center text-xl font-semibold pt-4'>একাডেমিক ইনফর্মেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
              <div className='grid md:grid-cols-2 gap-5 w-full'>
                <div className="col-span-1">
                  <label className="block text-slate-700 font-medium">
                    <span className="font-bold text-slate-500 tracking-wider">University Name</span>
                  </label>
                  <input
                    {...register("universityName", { required: true })}
                    type="text"
                    placeholder="Enter Your University Name"
                    className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-slate-700 font-medium">
                    <span className="font-bold text-slate-500 tracking-wider">Email </span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-5 w-full'>
                <div className="col-span-1">
                  <label htmlFor='image' className='block text-slate-700 font-medium pb-1'>
                    <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                  </label>
                  <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-slate-700 font-medium">
                    <span className="font-bold text-slate-500 tracking-wider">Your Number </span>
                  </label>
                  <input
                    {...register("number", { required: true })}
                    type="number"
                    placeholder="Enter Your Number"
                    className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                  />
                </div>
              </div>

              <div className=" space-y-1">
                <label className="block text-slate-700  font-medium">
                  <span className="font-bold text-slate-500 tracking-wider">Address </span>
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Enter Your Address"
                  className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                />
                {errors.phone && (
                  <span className="mt-1 text-red-500">
                    Address field is required
                  </span>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 mx-auto bg-blue-500 text-white rounded"
                >
                  Save and Next
                </button>
              </div>
            </form>
          </div>)}
        {currentStep === 3 && (
          <div>
            <p>Add additional details in Step 3.</p>
            <button
              onClick={completeStep}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Complete Step 3
            </button>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <p>Final review and confirmation in Step 4.</p>
            <button
              onClick={completeStep}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Complete Step 4
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorUpdateProfile;
