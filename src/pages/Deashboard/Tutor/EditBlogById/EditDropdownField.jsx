import SearchDropdown from "../../../../Components/SearchInputFuntion/SearchDropdown";

const EditDropdownField = ({ label, defaultTextValue, selectedValue, options, setValue }) => (
    <div className="space-y-3">
        <label className="block text-slate-700 font-medium mb-1">{label}</label>
        <span
            className="bg-transparent border border-sky-300 rounded-lg outline-sky-600 px-4 py-1 w-full text-sm"
        >
            {defaultTextValue}
        </span>
        <SearchDropdown
            options={options}
            selectedValue={selectedValue}
            onSelect={setValue}
            hookPlaceholder={`Please select a ${label}`}
        />
    </div>
);


export default EditDropdownField;