import { BentoGrid, BentoGridItem } from '@/ui/BentoGrid'
import React from 'react'
import { gridItems } from '../../data'

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridItems.map(({id, title, description, img, imgClassName,className, titleClassName, spareImg})=>(
          <BentoGridItem id={id}
          key={id}
          title={title}
          description={description}
          className={className}
          img={img}
          imgClassName={imgClassName}
          titleClassName={titleClassName}
          spareImg={spareImg}
          /> 
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid