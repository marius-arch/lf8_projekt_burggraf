import { AppShell, Navbar, Header, Title, Group, ActionIcon, ColorSchemeProvider, MantineProvider, ScrollArea } from '@mantine/core';
import { MainLinks } from './frame/MainLinks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Phase1 from './phases/Phase1';
import Phase2 from './phases/Phase2';
import Phase3 from './phases/Phase3';
import Phase4 from './phases/Phase4';
import Phase5 from './phases/Phase5';
import Phase6 from './phases/Phase6';
import Phase7 from './phases/Phase7';
import Phase8 from './phases/Phase8';

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
          <ScrollArea offsetScrollbars style={{height: "80vh", width: "100%"}}>
            <Routes>
              <Route path="/lf8_projekt_burggraf/phase1" element={<Phase1 />} />
              <Route path="/lf8_projekt_burggraf/phase2" element={<Phase2 />} />
              <Route path="/lf8_projekt_burggraf/phase3" element={<Phase3 />} />
              <Route path="/lf8_projekt_burggraf/phase4" element={<Phase4 />} />
              <Route path="/lf8_projekt_burggraf/phase5" element={<Phase5 />} />
              <Route path="/lf8_projekt_burggraf/phase6" element={<Phase6 />} />
              <Route path="/lf8_projekt_burggraf/phase7" element={<Phase7 />} />
              <Route path="/lf8_projekt_burggraf/phase8" element={<Phase8 />} />
            </Routes>
          </ScrollArea>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
