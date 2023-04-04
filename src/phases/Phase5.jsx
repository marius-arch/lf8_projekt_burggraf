import { Divider, Image, Text, Title } from "@mantine/core";
import notFound from "../files/not-found.jpg";

export default function Phase5() {
    return(
        <>
           <Title order={3} ta="center">Phase 5: Analyse von Datenquellen</Title>
           <Divider mt={10} mb={10} color="white" />
           <Text td="underline" fw={700} mb={10}>Nothing here yet</Text>
           <Image mx="auto" src={notFound} />
        </>
    )
}