import React from 'react'

const CardMagicBtn = ({title, icon, position, handleClick, otherClasses}: {title: string; icon:React.ReactNode; position: string; handleClick?: ()=> void ; otherClasses?:string;}) => {
  return (
    <button className="inline-flex h-12 mt-5 lg:mt-6 w-full  animate-shimmer items-center justify-center rounded-xl border border-purple bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
     {position === 'left' && icon}
     {title}
     {position === 'right' && icon}
    </button>
  )
}

export default CardMagicBtn


