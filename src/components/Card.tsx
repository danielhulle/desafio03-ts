import { Box } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Box backgroundColor="#2C3E50" color='#FFFFFF' borderRadius="25px" padding="25px">
      { children }
    </Box>
  );
};
