import { FunnelPage } from "./components/FunnelPage";
import { resolveTokens } from "./data/resolveTokens";

function App() {
  return <FunnelPage tokens={resolveTokens()} />;
}

export default App;
