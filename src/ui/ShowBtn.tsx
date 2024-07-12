import React from 'react'

const ShowBtn = ({title,  handleClick, }: {title: string;  handleClick?: ()=> void ; }) => {
  return (
    <button className="relative inline-flex w-[40vw] mt-3 h-12 overflow-hidden rounded-lg p-[1px] md:mt-6 md:w-40" onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl `}>
     
     {title}
     
    </span>
  </button>
  )
}

export default ShowBtn