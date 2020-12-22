export default function Input({ label, unit, ...props }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{unit}</p>
      <label className="text-gray-700">{label}</label>
      <input
        className="block w-full mt-1 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        {...props}
      />
    </div>
  )
}
