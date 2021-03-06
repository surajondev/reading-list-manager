import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export const ChildSearch = () =>{
    return(
        <div className='active'>
            <div style={{margin:"5px"}}>
                <FiSearch />
            </div>
        </div>
    )
}

export const InputContainer = ({width, onChange, placeholder}) => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <InputGroup w={width}>
            <InputRightElement>
                <ChildSearch />
            </InputRightElement>
            <Input focusBorderColor='#1E50FF' onChange={onChange} placeholder={placeholder} />
        </InputGroup>
    </div>
  )
}