export default function Title({ size, children }) {
  return (
    <h1 className={`mb-4 text-${size || '5xl'} font-light`}>{children}</h1>
  )
}