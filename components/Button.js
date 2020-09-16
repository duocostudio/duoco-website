export default function Button({ size, children }) {
  return (
    <div className="py-5 px-12 bg-black">
      <span className="text-sm font-semibold tracking-wide text-white uppercase">{children}</span>
    </div>
  )
}