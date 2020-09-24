function TagGroup({ children }) {
  return (
    <ul className="flex flex-row space-x-3">
      {children}
    </ul>
  )
}

function Tag({ children }) {
  return (
    <li>
      <div className="px-5 py-1 bg-white bg-opacity-25">
        <span className="uppercase text-xs text-white font-bold">{children}</span>
      </div>
    </li>
  )
}

export default function Project({ title, logo, description, tags, backgroundColor }) {
  return (
    <div className={`w-full rounded mb-20 p-10 lg:p-20 ${backgroundColor}`}>
      <div className="flex flex-col items-start">
        <img className="w-40 mb-5" src={logo}></img>
        <h1 className="font-bold text-white text-3xl lg:text-5xl mb-5">{title}</h1>
        <div className="text-white lg:w-5/12 mb-16">
          <p className="text-base lg:text-lg font-light leading-8 text-white text-opacity-50">{description}</p>
        </div>
        <TagGroup>
          {tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
        </TagGroup>
      </div>
    </div>
  )
}