//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  //return <div><ListGroup /></div>;
  /*return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  )*/
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>Click Me</Button>
    </div>
  )
}
export default App;