export default function Button({ children }) {
  return (
    <div className="select-none cursor-pointer py-5 px-12 bg-black hover:bg-gray-700">
      <span className="text-sm font-semibold tracking-wide text-white uppercase">{children}</span>
    </div>
  )
}