import AuthUser from './config/AuthUser'
import Guest from './components/Navbar/Guest'
import Auth from './components/Navbar/Auth'

function App() {
  const { getToken } = AuthUser()
  if (!getToken()) {
    return <Guest />
  }
  return (
    <Auth />
  );
}

export default App;
