import { useState, useRef, useEffect } from 'react';

const StepSecondForm = ({ completeStep }) => {
  const [searchTerm, setSearchTerm] = useState(''); // Holds search input
  const [selectedValue, setSelectedValue] = useState(''); // Holds selected option
  const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility

  const dropdownRef = useRef(null); // Ref for dropdown container

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

  // Update search term and keep dropdown open
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true); // Show dropdown while typing
  };

  // Show dropdown on input click
  const handleInputClick = () => {
    setShowDropdown(true);
  };

  // Set selected value, clear search, and close dropdown
  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setSearchTerm(''); // Clear the search term after selection
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4" ref={dropdownRef}>
      <h2 className="text-2xl mb-4">Select a Document</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Start typing to search..."
        value={selectedValue || searchTerm}
        onChange={handleSearchChange}
        onClick={handleInputClick}
        className="block w-full border border-gray-300 rounded px-3 py-2"
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
              <p className="p-4 text-gray-500">No matching your University</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepSecondForm;
