import { AppRoutes } from './Router';
import { MenuBarComponent } from './components/menubar/menubar';

function App() {
  return (
    <>
      <MenuBarComponent />
      <AppRoutes />
      <footer className="w-full p-16 flex justify-center opacity-60 text-center text-sm text-white">
        Con ❤️ por @andre - 2023
      </footer>
    </>
  );
}

export default App;