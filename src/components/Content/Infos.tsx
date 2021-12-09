import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
    
  return (
    <Flex alignItems="center" justifyContent="space-between">
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                {/* @ts-expect-error */}

                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px","16px"]} h={["10px","16px"]}/>
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
                {/* @ts-expect-error */}
              <PopoverArrow bg="gray.700"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg"></PopoverBody>
            </PopoverContent>
          </Popover>

        </Text>
      </Flex>

    </Flex>
  )
}