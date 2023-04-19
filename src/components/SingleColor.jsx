import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ el, idx }) => {
  const { hex } = el;

  const handleCopy = async()=>{
    if(navigator.clipboard){
        try {
           await navigator.clipboard.writeText(`#${hex}`) 
           toast.success('copied to clipboard')
        } catch (error) {
            toast.error(error.message)
            
        }
    }else{
        toast.error('error')
    }

  }

  return (
    <article className='color' style={{ background: `#${hex}` }} onClick={handleCopy}>
      <p className={idx >12 ? 'white-color':undefined}  >#{hex}</p>
      
    </article>
  );
};

export default SingleColor;
