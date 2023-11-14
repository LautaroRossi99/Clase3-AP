import React from 'react';
import {Box, Link, Image, Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading,Button, Divider, ButtonGroup, Center } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

const Main = ({img,name,id,descripcion,precio,cant}) => {
   
    return(
  
           <Card maxW='sm'>
                    <CardBody>
                    <Box display="flex" justifyContent="center">
                    <Image
                    src={img}
                    boxSize="200px"
                    textAlign="center"
                    alt='placa video'
                    borderRadius='lg'
                    />
                    </Box>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        {descripcion}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {precio}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        unidades disponibles: {cant}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        codigo producto: {id}
                    </Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Comprar
                    </Button>
                    </ButtonGroup>
                    </CardFooter>
            </Card>
    

    

    )
}

export default Main;