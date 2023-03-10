import FormElem from 'shared-ui/dist/NavBar'
import Form1 from 'shared-ui/dist/Form1';
function App() {
  return (
      <div >
        <div className='text-light'>
          <FormElem/>  
        </div>
        <div className="m-4 text-primary ">
          <Form1/>
        </div> 
      </div>
    
  );
}

export default App;
