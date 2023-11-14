import { Box, Link, Image } from '@chakra-ui/react';
import './Header'
import React from 'react';


const Header = () => {
    return(
        
            <Box as = "header" bg="#EACBAE" w="full" display="flex" alignItems="center" justifyContent="space-around" p="30px, 0px">
                <Image boxSize='100px' src='https://images.vexels.com/media/users/3/143097/isolated/preview/5a631e30cd478440c20da8c5578dd77c-discos-con-logo-circular.png' alt='Dan Abramov' />
                <Box as = "nav" >
                    <Link ml="15px" p="15px 25px" borderRadius="15px" bg="#B4B2E3" _hover={{ color:"white", bg:"black" }}>Inicio</Link>
                    <Link ml="15px" p="15px 25px" borderRadius="15px" bg="#B4B2E3" _hover={{ color:"white", bg:"black" }}>Nosotros</Link>
                    <Link ml="15px" p="15px 25px" borderRadius="15px" bg="#B4B2E3" _hover={{ color:"white", bg:"black" }}>Contacto</Link>
                </Box>
            </Box>
        
    )
}

export default Header;