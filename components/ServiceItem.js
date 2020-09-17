import Check from '../public/check.svg'

export default function ServiceItem({ children }) {
  return (
    <li className="flex flex-row items-center mb-8">
      <div className="bg-gray-400 h-8 w-8 rounded-full">
        <Check />
      </div>
      <span className="ml-6 text-xl font-semibold">{children}</span>
    </li>
  )
}