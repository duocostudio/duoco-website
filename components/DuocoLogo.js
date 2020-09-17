import Logo from '../public/favicon.svg'

export default function DuocoLogo() {
  return (
    <div className="flex flex-row items-center">
      <Logo className="square" />
      <span className="ml-5 text-xl font-bold">Duōco</span>
    </div>
  )
}