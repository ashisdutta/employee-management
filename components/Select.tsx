interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChangeState: (val: string) => void;
}

export default function Select({
  label,
  value,
  options,
  onChangeState,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChangeState(e.target.value)}
          className={`
            w-full px-3 py-2 
            bg-white border border-gray-300 rounded-md 
            appearance-none 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            transition-shadow cursor-pointer
            ${value === "" ? "text-gray-400" : "text-gray-900"}
          `}
        >
          {/* Placeholder Option */}
          <option value="" disabled>
            Select {label}
          </option>

          {/* Map Options */}
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-gray-900 capitalize"
            >
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
