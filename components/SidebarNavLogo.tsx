import NextImage from "next/image";
import { Box } from "@chakra-ui/layout";

const SidebarNavLogo = ({ src }) => {
  return (
    <Box width="120px" marginBottom="20px" paddingX="20px">
      <NextImage src={src} height={60} width={120} />
    </Box>
  );
};

export default SidebarNavLogo;
