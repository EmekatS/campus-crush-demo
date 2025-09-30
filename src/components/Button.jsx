import React from 'react'
import { motion } from 'motion/react'

const Button = ({ children, lighter, width, type }) => {
  return (
    <>
    <div>
        <motion.div whileHover={{ x: 5, y: -5, rotate: -2}}
        className={`w-fit p-0.5 rounded-3xl bg-[var(--red-shade)]`}>
            <motion.button
            whileHover={{ x: 5, y: -5, rotate: 1.5 }} 
            whileTap={{ x: 0, y: 0, rotate: 0 }}
            type={type}
            className={`${width || 'w-full'} ${lighter || "bg-pink-400"} text-white rounded-3xl px-6 py-3 uppercase tracking-wider primary-font  font-semibold cursor-pointer flex-between gap-2 group`}>{ children } 
                <div className='size-2 bg-white rounded-full relative group-hover:scale-200 transition-all duration-200'></div>
            </motion.button>    
        </motion.div>
    </div>
    </>
  )
}

export default Button