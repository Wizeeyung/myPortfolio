import React from 'react'

const ShowBtn = ({title,  handleClick, }: {title: string;  handleClick?: ()=> void ; }) => {
  return (
    <button className="inline-flex h-12 w-[40vw] md:w-40 animate-shimmer items-center justify-center rounded-xl border border-purple bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>  
      {title}
    </button>
  )
}

export default ShowBtn



// const ShowBtn = ({title,  handleClick, }: {title: string;  handleClick?: ()=> void ; }) => {
//   return (
//     <button className="relative inline-flex w-[40vw] mt-3 h-12 overflow-hidden rounded-lg p-[1px] md:mt-6 md:w-40" onClick={handleClick}>
//     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//     <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl `}>
     
//      {title}
     
//     </span>
//   </button>
//   )
// }

// export default ShowBtn


