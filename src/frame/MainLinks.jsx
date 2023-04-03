import React from 'react';
import {
  IconDatabase,
  IconDatabaseImport,
  IconFileDescription,
  IconGitBranch,
  IconKey,
  IconListNumbers,
  IconPencil,
  IconUsers,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

function MainLink({ icon, color, label }) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconPencil size="1rem" />, label: 'Phase 1: Beschreibung' },
  { icon: <IconGitBranch size="1rem" />, label: 'Phase 2: Erstellung Git-Repo' },
  { icon: <IconListNumbers size="1rem" />, label: 'Phase 3: Zeitliche Reihenfolge' },
  { icon: <IconFileDescription size="1rem" />, label: 'Phase 4: Erstellung Projekt-Wiki' },
  { icon: <IconDatabase size="1rem" />, label: 'Phase 5: Analyse von Datenquellen' },
  { icon: <IconUsers size="1rem" />, label: 'Phase 6: Benutzerverwaltung' },
  { icon: <IconKey size="1rem" />, label: 'Phase 7: IT-Sicherheitskonzept' },
  { icon: <IconDatabaseImport size="1rem" />, label: 'Phase 8: Zentraler Datenbstand' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}