export default function SocialItem({ title, icon }) {
  return (
    <div className="select-none flex items-center justify-center mr-5 circle bg-gray-200 hover:bg-gray-400">
      <div className="h-6 w-6">
        {icon}
      </div>
      <style jsx>{`
        .circle {
          height: 48px;
          width: 48px;
          border-radius: 26px;
        }
      `}</style>
    </div>
  )
}