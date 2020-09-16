export default function DuocoLogo() {
  return (
    <div className="flex flex-row items-center">
      <div className="square"></div>
      <span className="ml-5 text-xl font-bold">Duōco</span>
      <style jsx>{`
        .square {
          height: 52px;
          width: 52px;
          background-color: black;
        }
      `}</style>
    </div>
  )
}