export default function Title({ size, children }) {
  return (
    <h2 className={`text-${size || '4xl'} font-bold`}>{children}</h2>
  )
}