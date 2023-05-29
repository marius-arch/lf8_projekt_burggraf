import { Divider, List, Table, Text, Title } from "@mantine/core";

export default function Phase5() {
  const elements = [
    { source: "Kunde", location: "Kundenstandort", format: 'z.B. Architekturskizze oder .ifc file, ...' },
    { source: "Grundriss", location: "Kunde", format: 'z.B. Skizze / Grundriss oder .pdf, ...' },
    { source: "IT Systemhaus GmbH", location: "Verkaufsabteilung", format: 'z.B. Datenbank, ...' },
    { source: "Kundendaten", location: "Kunde", format: 'z.B. Angebotsanfrage, ...' },
    { source: "Kunde", location: "Kundenstandort", format: 'z.B. Architekturskizze oder .ifc file, ...' },
  ];

  const elements2 = [
    { source: "Kunde", fileformat: "Architekturskizze oder .ifc", processing: 'Überprüfung durch Mitarbeiter', meta: "Materialien, Grobplanung, Datum, Ersteller" },
    { source: "Grundriss", fileformat: "Skizze / Grundriss oder .pdf", processing: 'Überprüfung durch Mitarbeiter', meta: "Fläche, Abmessungen, Datum, Ersteller" },
    { source: "IT Systemhaus GmbH", fileformat: "Datenbank", processing: 'Regelmäßige Überprüfung der Daten auf Korrektheit und Nutzung der Daten für Angebotserstellung', meta: "Spalten, Tabellen, Kundeninformationen, Preise, Bestand" },
    { source: "Kundendaten", fileformat: "Angebotsanfrage oder .pdf", processing: 'Auslesen der Daten und Abspeichern in der Datenbank', meta: "Kunde, Preis, Menge, Lieferdatum" }
  ];

  const rows2 = elements2.map((element) => (
    <tr key={element.source}>
      <td>{element.source}</td>
      <td>{element.fileformat}</td>
      <td>{element.processing}</td>
      <td>{element.meta}</td>
    </tr>
  ));

  const rows = elements.map((element) => (
    <tr key={element.source}>
      <td>{element.source}</td>
      <td>{element.location}</td>
      <td>{element.format}</td>
    </tr>
  ));
  return (
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
      <Text td="underline" fw={700} mt={20} mb={10}>Datenformate/Datenquellen im Detail</Text>
      <Table striped withColumnBorders highlightOnHover withBorder>
        <thead>
          <tr>
            <th>Datenquelle</th>
            <th>Darstellung/Dateiformat</th>
            <th>Weiterverarbeitung</th>
            <th>Metainformationen</th>
          </tr>
        </thead>
        <tbody>{rows2}</tbody>
      </Table>
      <Text td="underline" fw={700} mt={20} mb={10}>Berechtigte zur Datenverarbeitung</Text>
      <List>
        <List.Item>Servicemitarbeiter</List.Item>
        <List.Item>Verkaufsabteilung</List.Item>
        <List.Item>Vorgesetzte</List.Item>
        <List.Item>Techniker</List.Item>
      </List>
      <Text td="underline" fw={700} mt={20} mb={10}>Datenformat für Angebot</Text>
      Wir entscheiden uns für das PDF-Format, da es vielseitig einsetzbar ist und fast alle Programme die Möglichkeit bieten den Inhalt als pdf zu exportieren und es somit den Standard darstellt.
      Des weiteren ist es möglich Skizzendateien, wie zum Beispiel ".ifc"-Dateien, in eine PDF-Datei einzubinden.
    </>
  )
}