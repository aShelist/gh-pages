import './App.css';
import { isIOS } from '../../utils';
import { IosPage } from '../../pages/IosPage';
import { AndroidPage } from '../../pages/AndroidPage';

function App() {
  if (isIOS()) {
    return <IosPage />
  }

  return (
    <AndroidPage />
  );
}

export default App;
