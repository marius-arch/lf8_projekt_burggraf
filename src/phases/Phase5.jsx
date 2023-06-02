import { Divider, List, Table, Text, Title } from "@mantine/core";

export default function Phase5() {
  const elements = [
    { source: "Grundrisse", location: "Architekten, Bauunternehmen, Kunden selbst", format: 'PDF, DWG (AutoCAD), DXF, ICF oder andere CAD-Formate' },
    { source: "Vorort-Begehungen", location: "Vor-Ort-Mitarbeiter der ITSystemHausDD GmbH", format: 'Digitale Bilder im JPEG-, PNG- oder PDF-Format' },
    { source: "IT-Komponenten", location: "ITSystemHausDD GmbH Datenbestand, Lieferanten, möglicherweise andere Quellen", format: 'Datenbanken, Excel-Tabellen, strukturierte Textdateien (CSV), APIs (zur Integration von Lieferantendaten)' },
    { source: "Datenbestand der ITSystemhausDD GmbH", location: "Interne Datenbanken, Dateisysteme oder andere interne Speicherorte der ITSystemhausDD GmbH", format: 'Datenbanken (z. B. SQL-Datenbanken), Excel-Tabellen, strukturierte Textdateien (CSV)' }
  ];

  const elements2 = [
    { 
      source: "Grundrisse",
      data: "Grundrisse, Layouts von Räumlichkeiten",
      fileformat: "PDF, DWG (AutoCAD), DXF, ICF oder andere CAD-Formate", 
      processing: 'Import als Grafikdatei, Verwendung als Hintergrund für Platzierung von Komponenten', 
      meta: "Autor, Erstellungsdatum, Revisionen (bei PDF-Dateien)" 
    },
    { 
      source: "Vorort-Begehungen", 
      data: "Skizzen oder Zeichnungen der Räumlichkeiten",
      fileformat: "JPEG, PNG, PDF", 
      processing: 'Import als digitales Bild, visuelle Referenz für Platzierung von Komponenten', 
      meta: "Dateiname, Datum, Größe (bei digitalen Bildern)" 
    },
    
    { 
      source: "IT-Komponenten", 
      data: "Informationen zu ausgewählten IT-Komponenten (Modellnamen, Spezifikationen, Preise, Lieferanten)",
      fileformat: "Datenbanken, Excel-Tabellen, CSV, APIs", 
      processing: 'Import in interne Datenbank oder Angebotserstellungssystem, Verwendung in Benutzeroberfläche', 
      meta: "Keine spezifischen Metainformationen (abhängig von der Datenquelle)" 
    },
    
    { 
      source: "Datenbestand der ITSystemhausDD GmbH", 
      data: "Informationen zu vorhandenen IT-Komponenten",
      fileformat: "Datenbanken, Excel-Tabellen, CSV", 
      processing: 'Import in internes System, Verwendung in Angebotserstellung', 
      meta: "Keine spezifischen Metainformationen (abhängig von der Datenquelle)" 
    },
  ];

  const rows2 = elements2.map((element) => (
    <tr key={element.source}>
      <td>{element.source}</td>
      <td>{element.data}</td>
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
      <Text fw={500} mb={5}>1. Kundendaten:</Text>
      <List>
        <List.Item>Name des Kundenunternehmens</List.Item>
        <List.Item>Kontaktdaten des Kunden (Adresse, Telefonnummer, E-Mail, usw.)</List.Item>
        <List.Item>Ansprechpartner beim Kunden</List.Item>
      </List>
      <Text fw={500} mb={5} mt={10}>2. Standortdaten:</Text>
      <List>
        <List.Item>Adresse des Projektstandorts</List.Item>
        <List.Item>Grundrisse oder Skizzen der Räumlichkeiten (für Altbauten)</List.Item>
        <List.Item>Gegebenenfalls zusätzliche Informationen über die Räumlichkeiten (Größe, Anzahl der Räume, besondere Anforderungen, usw.)</List.Item>
      </List>
      <Text fw={500} mb={5} mt={10}>3. IT-Komponenten:</Text>
      <List>
        <List.Item>Informationen zu den benötigten IT-Komponenten (Server, Arbeitsstationen, Netzwerkgeräte, usw.)</List.Item>
        <List.Item>Spezifikationen der Komponenten (z. B. Prozessor, Speicher, Kapazität, Anschlüsse, usw.)</List.Item>
      </List>
      <Text fw={500} mb={5} mt={10}>4. Verfügbarkeit der IT-Komponenten:</Text>
      <List>
        <List.Item>Informationen über die Verfügbarkeit der IT-Komponenten im Datenbestand der ITSystemhausDD GmbH</List.Item>
        <List.Item>Gegebenenfalls Informationen über alternative Komponenten, falls bestimmte Produkte nicht verfügbar sind</List.Item>
      </List>
      <Text fw={500} mb={5} mt={10}>5. Preise und Konditionen:</Text>
      <List>
        <List.Item>Preise der IT-Komponenten</List.Item>
        <List.Item>Gegebenenfalls zusätzliche Kosten für Installation, Konfiguration, Wartung, usw.</List.Item>
        <List.Item>Rabatte, Sonderangebote oder Vertragskonditionen, die auf den Kunden anwendbar sind</List.Item>
      </List>
      <Text fw={500} mb={5} mt={10}>6. Angebotstext und Beschreibung:</Text>
      <List>
        <List.Item>Textliche Beschreibung des Angebots, einschließlich der angebotenen Leistungen, Lösungen und Zusatzinformationen</List.Item>
        <List.Item>Gegebenenfalls technische Spezifikationen oder andere detaillierte Informationen</List.Item>
      </List>
      <Text fw={500} mb={5} mt={10}>7. Metainformationen:</Text>
      <List>
        <List.Item>Informationen zur Identifizierung des Angebots (Angebotsnummer, Erstellungsdatum, usw.)</List.Item>
        <List.Item>Verantwortliche Personen oder Abteilungen innerhalb der ITSystemhausDD GmbH für das Angebot</List.Item>
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
            <th>Dargestellte Daten</th>
            <th>Dateiformat</th>
            <th>Weiterverarbeitung</th>
            <th>Metainformationen</th>
          </tr>
        </thead>
        <tbody>{rows2}</tbody>
      </Table>
      <Text td="underline" fw={700} mt={20} mb={10}>Berechtigte zur Datenverarbeitung</Text>
      <List sx={{maxWidth: "95%"}}>
        <List.Item>Verkaufsabteilung: Mitarbeiter der Verkaufsabteilung dürfen die Daten nutzen und verarbeiten, um Angebote für Kunden zu erstellen, Verkaufsaktivitäten zu verfolgen und Kundenbeziehungen zu pflegen.</List.Item>
        <List.Item>Projektmanagement: Mitarbeiter des Projektmanagementteams dürfen auf die Daten zugreifen und sie verarbeiten, um Projekte zu planen, Ressourcen zuzuweisen, den Fortschritt zu verfolgen und die erfolgreiche Umsetzung von IT-Installationen sicherzustellen.</List.Item>
        <List.Item>IT-Abteilung: Mitarbeiter der IT-Abteilung können die Daten nutzen und verarbeiten, um den Datenbestand der IT-Komponenten zu verwalten, Updates vorzunehmen, neue Komponenten hinzuzufügen und sicherzustellen, dass die richtigen Komponenten in den Angeboten verwendet werden.</List.Item>
        <List.Item>Einkaufsabteilung: Mitarbeiter der Einkaufsabteilung dürfen die Daten nutzen und verarbeiten, um Informationen über Lieferanten, Preise und Verfügbarkeit von IT-Komponenten zu verwalten, Bestellungen zu tätigen und sicherzustellen, dass die benötigten Komponenten beschafft werden können.</List.Item>
      </List>
      <Text td="underline" fw={700} mt={20} mb={10}>Datenformat für Angebot</Text>
      Für das Datenformat des Angebotsdokuments entscheiden wir uns für die Verwendung eines strukturierten Formats wie PDF oder Microsoft Word (DOCX). 
      Diese Formate ermöglichen eine professionelle Darstellung des Angebots und können leicht verarbeitet werden. 
      Darüber hinaus können diese Formate Metainformationen wie Autor, Erstellungsdatum usw. enthalten, um die Nachvollziehbarkeit und Verwaltung des Angebots zu erleichtern.
    </>
  )
}