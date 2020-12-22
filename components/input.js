export default function Input({ label, placeholder, name, unit }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{unit}</p>
      <label for="slope" className="text-gray-700">{label}</label>
      <input type="number" className="block w-full mt-1 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder={placeholder} name={name} id={name}/>
    </div>
  )
}
