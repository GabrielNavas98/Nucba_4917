import React from 'react'
import { MdRestartAlt } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { reset } from '../../redux/counterSlice/counterSlice'

const Restart = () => {

    const dispatch = useDispatch()
    
    return (
        <MdRestartAlt size={'32px'} color='red' onClick={() => dispatch(reset())} />
    )
}
export default Restart