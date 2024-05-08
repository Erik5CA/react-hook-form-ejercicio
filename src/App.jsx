import Provider from "./context/Provider";
import RouterApp from "./router/RouterApp";

function App() {
  return (
    <>
      <Provider>
        <RouterApp />
      </Provider>
    </>
  );
}

export default App;
