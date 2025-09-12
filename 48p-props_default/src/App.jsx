import Name from "./Name";
import Age from "./Age";
import Address from "./Address";

function App() {
  return (
    <div className="person">
      <Name name="KIM MINSU" />
      <Age age={30} />
      <Address address={"SEOUL"} />
    </div>
  );
}

export default App;
