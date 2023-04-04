import { Divider, Grid, Image, List, Text, Title } from "@mantine/core";

export default function Phase1() {
    return(
        <>
           <Title order={3} ta="center">Phase 1: Beschreibung</Title>
           <Divider mt={10} mb={10} color="white" />
           <Text td="underline" fw={700} mb={10}>1. Erarbeiten von Vor- und Nachteilen verschiedener Zielplattformen</Text>
           <Grid mb={20}>
            <Grid.Col span={6}>
                <Text fw={500}>Vorteile Tablet</Text>
                <List>
                    <List.Item>einfache Bedienung einer GUI durch den Touchscreen</List.Item>
                    <List.Item>einfaches Zeichnen durch einen Eingabestift möglich</List.Item>
                </List>
            </ Grid.Col>
            <Grid.Col span={6}>
                <Text fw={500}>Nachteile Tablet</Text>
                <List>
                    <List.Item>bei iPads sind Apps nur über einen Appstore installierbar</List.Item>
                    <Text>{"->"} das Reinstellen einer App in einen Appstore kostet Geld</Text>
                    <Text>{"->"} das Herunterladen einer App benötigt ein Nutzerkonto für den Appstore</Text>
                    <List.Item>durch Touchscreen Tastatur ist Eingabe von Text schwieriger</List.Item>
                </List>
            </ Grid.Col>
           </Grid>
           <Grid mb={10}>
            <Grid.Col span={6}>
                <Text fw={500}>Vorteile Laptop (PC)</Text>
                <List>
                    <List.Item>Tastatur ist immer vorhanden und ermöglicht einfache Eingabe von Text</List.Item>
                    <List.Item>Anwendungsprogramme können ohne Probleme installiert werden</List.Item>
                </List>
            </ Grid.Col>
            <Grid.Col span={5}>
                <Text fw={500}>Nachteile Laptop (PC)</Text>
                <List>
                    <List.Item>Touchscreen und Eingabestift nur bei speziellen Tablet PCs vorhanden</List.Item>
                </List>
            </ Grid.Col>
           </ Grid>
           <Text td="underline" fw={700}>2. Erstellen eines UML Use-Case Diagramms</Text>
           <Image mx="auto" src="https://raw.githubusercontent.com/marius-arch/lf8_projekt_burggraf/main/UML/UML_UseCase.png" />
        </>
    )
}