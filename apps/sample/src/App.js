// import './App.css';
// import Test from "shared-ui/test";
import { Button } from 'shared-ui'
import FormElem from 'shared-ui/dist/common-elem/FormElem'
function App() {
  return (
      <div className="App m-4 text-primary">
        <div>
          <FormElem/>  
        </div>
          
        <div className='m-4'>
        <Button/>
        </div> 
      </div>
    
  );
}

export default App;
