import React from 'react'
import { Box } from '@chakra-ui/react'

const Toastify = ({data}) => {
    
    return (
        <div className='erroContainer'>
            <Box bg='tomato' w='100%' p={4} color='white'>
                {data}
            </Box>
        </div>
    )
}

export default Toastify
