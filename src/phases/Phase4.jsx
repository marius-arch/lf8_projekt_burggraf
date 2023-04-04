import { Divider, Image, Text, Title } from "@mantine/core";
import gitDocu from "../files/git_documentation.png";

export default function Phase4() {
    return(
        <>
           <Title order={3} ta="center">Phase 4: Erstellung Projekt-Wiki</Title>
           <Divider mt={10} mb={10} color="white" />
           <Text td="underline" fw={700} mb={10}>1. Erstellung eines "documentation"-branches in Github</Text>
           <Image mx="auto" src={gitDocu} />
           <Text td="underline" fw={700} mb={10}>2. Erstellung einer Doku-Website in React</Text>
           <iframe src="https://marius-arch.github.io/lf8_projekt_burggraf/#/lf8_projekt_burggraf/phase1" style={{width: "100%", height: "100vh" }} />
        </>
    )
}