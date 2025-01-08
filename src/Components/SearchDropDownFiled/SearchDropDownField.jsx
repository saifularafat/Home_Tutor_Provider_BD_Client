import SearchDropdown from "../SearchInputFuntion/SearchDropdown";

const SearchDropDownField = ({ label, selectedValue, options, setValue }) => (
    <div className="space-y-2">
        <label className="block text-slate-700 font-medium">{label}</label>
        <SearchDropdown
            options={options}
            selectedValue={selectedValue}
            onSelect={setValue}
            hookPlaceholder={`Please select a ${label}`}
        />
    </div>
);


export default SearchDropDownField;