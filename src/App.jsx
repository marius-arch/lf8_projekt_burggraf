import { AppShell, Navbar, Header, Title, Group, ActionIcon, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { MainLinks } from './frame/MainLinks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Phase1 from './phases/Phase1';

function App() {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}withGlobalStyles withNormalizeCSS>
        <AppShell
          padding="md"
          fixed={false}
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              <Navbar.Section grow mt="xs">
                <MainLinks />
              </Navbar.Section>
            </Navbar>
          }
          header={
            <Header height={60}>
              <Group sx={{ height: '100%' }} px={20} position="apart">
                <Title>LF8 Projektdokumentation</Title>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
                </ActionIcon>
              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            <Route path="/" element={<Phase1 />} />
            <Route path="/about" element={<MainLinks />} />
            <Route path="/careers" element={<MainLinks />} />
          </Routes>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
