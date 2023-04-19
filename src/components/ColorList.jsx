import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({colors}) => {
  return (
    <section className='colors'>
        {colors.map((el,idx)=>{
            return <SingleColor el={el} key={nanoid()} idx={idx}/>
        })}
    </section>
  )
}

export default ColorList