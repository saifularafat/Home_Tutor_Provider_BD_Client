import { useState } from 'react';
import StepSecondFrom from './StepSecondFrom';
import StepFirstFrom from './StepFirstFrom';
import StepThirdForm from './StepThirdForm';
import StepFourForm from './StepFourForm';

const TutorUpdateProfile = () => {
  // State for the current step, progress, and message
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [progressMessage, setProgressMessage] = useState('আপনার প্রথম ধাপ সম্পন্ন করুন।');
  const [formData, setFormData] = useState({});

  // Function to complete a step and move to the next step
  const completeStep = (data) => {
    // Update form data with data from the completed step
    setFormData(prevData => ({ ...prevData, ...data }));

    console.log(data);
    let newProgress;
    let newMessage = '';

    if (currentStep === 1) {
      newProgress = 50;
      newMessage = 'আপনার প্রথম ধাপ সম্পন্ন হয়েছে, দ্বিতীয় ধাপ সম্পন্ন করুন।';
    } else if (currentStep === 2) {
      newProgress = 65;
      newMessage = 'আপনার দ্বিতীয় ধাপ সম্পন্ন হয়েছে, তৃতীয় ধাপ সম্পন্ন করুন।';
    } else if (currentStep === 3) {
      newProgress = 90;
      newMessage = 'আপনার প্রোফাইলের শেষ ধাপটি সম্পূর্ণ করুন';
    } else {
      return newProgress = 100;
    }

    setProgress(newProgress);
    setProgressMessage(newMessage);

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle final submission to the database
  const handleFinalSubmit = () => {
    console.log('T.P>U> data Final Form Data:', formData);
    // Add logic here to submit `formData` to your database
  };

  // Allow navigation to any step only when progress is 100%
  const handleStepClick = (stepNum) => {
    if (progress === 100 || stepNum <= currentStep) {
      setCurrentStep(stepNum);
    }
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
            <StepFirstFrom completeStep={completeStep} />
          </div>
        )}
        {currentStep === 2 && (
          <div className='bg-white rounded-2xl shadow-xl'>
            {/* STEP 02 */}
            <StepSecondFrom completeStep={completeStep} />
          </div>)}
        {currentStep === 3 && (
          <div className='bg-white rounded-2xl shadow-xl'>
            {/* STEP 03 */}
            <StepThirdForm completeStep={completeStep} />
          </div>
        )}
        {currentStep === 4 && (
          <div className='bg-white rounded-2xl shadow-xl'>
            {/* STEP 03 */}
            <StepFourForm handleFinalSubmit={handleFinalSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorUpdateProfile;
