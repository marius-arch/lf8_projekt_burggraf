import { Divider, Image, Text, Title } from "@mantine/core";
import gitCreation from "../files/git_creation.png";
import gitPermissions from "../files/git_permissions.png";

export default function Phase2() {
    return(
        <>
           <Title order={3} ta="center">Phase 2: Erstellung Git-Repo</Title>
           <Divider mt={10} mb={10} color="white" />
           <Text td="underline" fw={700} mb={10}>1. Erstellen eines Git Repositories und Upload der lokalen Dateien</Text>
           <Image mx="auto" src={gitCreation} mb={20} />
           <Text td="underline" fw={700} mb={10}>2. Einrichten der Berechtigungen</Text>
           <Image mx="auto" src={gitPermissions} />
        </>
    )
}