import { Deck } from 'spectacle';

import defaultTheme from './theme/defaultTheme';

import Slides from './pages';

const App = () => {
  return (
    <Deck theme={defaultTheme}>
      <Slides />
    </Deck>
  );
}

export default App;
