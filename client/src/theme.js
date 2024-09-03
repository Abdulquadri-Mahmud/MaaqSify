import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode : 'ligth',
    useSystemColorMode: false,
}

const theme = extendTheme({ config });

export default theme;