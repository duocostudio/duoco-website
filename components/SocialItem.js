export default function SocialItem({ title, icon }) {
  return (
    <div className="flex items-center justify-center mr-5 circle bg-gray-400">
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