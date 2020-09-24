export default function Paragraph({children}) {
  return (
    <p className="text-base lg:text-xl leading-8 font-light text-black text-opacity-50">
      {children}
    </p>
  )
}