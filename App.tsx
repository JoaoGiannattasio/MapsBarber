import React from 'react';
import { LogBox } from 'react-native'; // Importa o LogBox para ignorar logs

import AppNavigator from './src/navigation/AppNavigation';

const App = () => {
  // Ignorar avisos específicos de texto fora do componente <Text> e listas aninhadas
  LogBox.ignoreLogs([
    'Text strings must be rendered within a <Text> component', // Ignora o aviso de texto fora de <Text>
    'VirtualizedLists should never be nested inside plain ScrollViews', // Ignora o aviso de listas aninhadas
  ]);

  return <AppNavigator />;
};

export default App;
