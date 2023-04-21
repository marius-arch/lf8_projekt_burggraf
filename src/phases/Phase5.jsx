import { Divider, List, Table, Text, Title } from "@mantine/core";

export default function Phase5() {
    const elements = [
        { source: "Kunde", location: "Kundenstandort", format: 'z.B. Architekturskizze oder .ifc file, ...' },
        { source: "Grundriss", location: "Kunde", format: 'z.B. Skizze / Grundriss oder .pdf, ...' },
        { source: "IT Systemhaus GmbH", location: "Verkaufsabteilung", format: 'z.B. Datenbank, ...' },
        { source: "Kundendaten", location: "Kunde", format: 'z.B. Angebotsanfrage, ...' },
        { source: "Kunde", location: "Kundenstandort", format: 'z.B. Architekturskizze oder .ifc file, ...' },
      ];

      const rows = elements.map((element) => (
        <tr key={element.source}>
          <td>{element.source}</td>
          <td>{element.location}</td>
          <td>{element.format}</td>
        </tr>
      ));
    return(
        <>
           <Title order={3} ta="center">Phase 5: Analyse von Datenquellen</Title>
           <Divider mt={10} mb={10} color="white" />
           <Text td="underline" fw={700} mb={10}>Notwendige Daten zur Angebotserstellung</Text>
           <List>
                <List.Item>Kundendaten</List.Item>
                <List.Item>Maße der Räume im Bürogebäude</List.Item>
                <List.Item>Anzahl Artikel</List.Item>
                <List.Item>Anzahl Räume</List.Item>
                <List.Item>Umfang der gewünschten Ausstattung</List.Item>
           </List>
           <Text td="underline" fw={700} mt={20} mb={10}>Datenquellen hinsichtlich Bereitsteller/Orte und möglicher Datenformate</Text>
           <Table striped withColumnBorders highlightOnHover withBorder>
            <thead>
                <tr>
                <th>Datenquelle</th>
                <th>Bereitsteller/Ort</th>
                <th>Datenformat</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
           </Table>
        </>
    )
}