import React, { useState } from 'react';

const TutorUpdateProfile = () => {
  // State for the current step and progress
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(20); // Start at 20%

  // Function to complete a step and move to the next step
  const completeStep = () => {
    let newProgress;
    if (currentStep === 1) newProgress = 50;
    else if (currentStep === 2) newProgress = 75;
    else if (currentStep === 3) newProgress = 100;
    else return;

    setProgress(newProgress);
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

  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Profile Update</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center font-semibold mb-6">{progress}% Complete</p>

      {/* Step Tabs */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mb-8 bg-white shadow-xl py-6 px-5 rounded-lg">
        {[1, 2, 3, 4].map((stepNum) => (
          <button
            key={stepNum}
            onClick={() => handleStepClick(stepNum)}
            className={`px-8 py-4 rounded ${
              currentStep === stepNum
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
      <div className="p-4 border rounded mb-4">
        {currentStep === 1 && (
          <div>
            <p>Complete your profile information in Step 1.</p>
            {/* Input fields for Step 1 */}
            <button
              onClick={completeStep}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Complete Step 1
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <p>Verify your email in Step 2.</p>
            {/* Input fields for Step 2 */}
            <button
              onClick={completeStep}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Complete Step 2
            </button>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <p>Add additional details in Step 3.</p>
            {/* Input fields for Step 3 */}
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
            {/* Input fields for Step 4 */}
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
