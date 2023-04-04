import { Divider, Image, Text, Title } from "@mantine/core";

export default function Phase3() {
    return(
        <>
           <Title order={3} ta="center">Phase 3: Zeitliche Reihenfolge</Title>
           <Divider mt={10} mb={10} color="white" />
           <Text td="underline" fw={700} mb={10}>Erstellen eines Sequenzdiagramms</Text>
           <Image mx="auto" src="https://raw.githubusercontent.com/marius-arch/lf8_projekt_burggraf/main/UML/Sequenzdiagramm.png" />
        </>
    )
}