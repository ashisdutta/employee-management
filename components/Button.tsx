interface buttonProps {
  text: string;
  disabled?: boolean;
  type: "submit" | "reset" | "button";
}

export default function Button({ text, disabled, type }: buttonProps) {
  return (
    <div>
      <div>
        <button
          type={type}
          disabled={disabled}
          className={`w-full md:w-auto float-right font-bold py-3 px-10 rounded-xl transition-all shadow-lg 
            ${
              disabled
                ? "bg-gray-400 cursor-not-allowed opacity-70"
                : "bg-blue-600 hover:bg-blue-400 text-white shadow-orange-200 active:scale-95 cursor-pointer"
            }`}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
