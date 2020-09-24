export default function Container({ children }) {
  return (
    <div className="container mx-auto px-6 lg:px-16">
      {children}
    </div>
  )
}