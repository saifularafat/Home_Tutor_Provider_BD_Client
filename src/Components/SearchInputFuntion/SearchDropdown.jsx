import { useState, useRef, useEffect } from 'react';

const SearchDropdown = ({ options, selectedValue, onSelect, hookPlaceholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setSearchTerm('');
    setShowDropdown(false); 
  };

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

  return (
    <div ref={dropdownRef} className="relative">
      <input
        type="text"
        placeholder={hookPlaceholder}
        value={selectedValue || searchTerm}
        onClick={handleInputClick}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
      />

      {/* Dropdown Options */}
      {showDropdown && (
        <div className="absolute w-full bg-white border border-gray-300 rounded shadow-lg max-h-28 overflow-y-auto z-10 mt-1">
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
      )}
    </div>
  );
};

export default SearchDropdown;
