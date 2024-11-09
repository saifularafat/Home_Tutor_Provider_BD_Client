import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const StepSecondForm = ({ completeStep }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const searchTerm = watch('searchTerm', ''); // Watch search term input
  const selectedValue = watch('selectedValue', ''); // Watch selected dropdown value
  const dropdownRef = useRef(null); // Ref for dropdown container

  // State for dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // Static options for dropdown
  const options = [
    'Document 1',
    'Document 2',
    'Example File',
    'Sample Text',
    'Report',
    'Tutorial File',
    'Guide Document',
  ];

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show dropdown on input click
  const handleInputClick = () => {
    setShowDropdown(true);
  };

  // Set selected value, clear search, and close dropdown
  const handleOptionClick = (option) => {
    setValue('selectedValue', option); // Update selected value in form
    setValue('searchTerm', ''); // Clear search term
    setShowDropdown(false); // Hide dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle form submission
  const onSubmit = (data) => {
    const formData = {
      selectedDocument: data.selectedValue,
      classValue: data.classValue,
      groupValue: data.groupValue,
      resultValue: data.resultValue,
    };
    console.log('object -=-------;....>', data);
    console.log('formData -=-------;.... formData>', formData);
    completeStep(formData); // Pass form data to parent
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4" ref={dropdownRef}>
      <h3 className='text-center text-xl font-semibold pt-4'>একাডেমিক ইনফর্মেশন</h3>

      {/* Dropdown Input */}
      <label className="block mb-1">Select Document</label>
      <input
        type="text"
        placeholder="Start typing to search..."
        {...register('searchTerm')}
        value={selectedValue || searchTerm}
        onClick={handleInputClick}
        className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
      />

      {/* Dropdown Options */}
      {showDropdown && (
        <div className="relative mt-1">
          <div className="absolute w-full bg-white border border-gray-300 rounded shadow-lg max-h-28 overflow-y-auto z-10">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {option}
                </div>
              ))
            ) : (
              <p className="p-4 text-gray-500">No matching documents found</p>
            )}
          </div>
        </div>
      )}

      {/* Class Input */}
      {/* <label className="block mb-1 mt-4">Class</label>
      <input
        type="text"
        placeholder="Enter your class"
        {...register('classValue')}
        className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
      /> */}

      {/* Group/Subject Input */}
      {/* <label className="block mb-1">Group/Subject</label>
      <input
        type="text"
        placeholder="Enter your group/subject"
        {...register('groupValue')}
        className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
      /> */}

      {/* Result Input */}
      {/* <label className="block mb-1">Result</label>
      <input
        type="text"
        placeholder="Enter your result"
        {...register('resultValue')}
        className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
      /> */}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Save and Next
      </button>
    </form>
  );
};

export default StepSecondForm;
