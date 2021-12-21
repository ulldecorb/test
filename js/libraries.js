/*
LIBRARIES:

default by react-testing-library

test methods:

    render >> render(<component />)

    screen >> screen.queryByText(/target/i)


    
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom >> add features to espect method


import {prettyDOM} from '@testing-library/dom' >> Visual helper provide a HTML render of element
    console.log(prettyDOM(element))



beforeEach(() => render(<Component />))




1.- Crear un test que falle.
2.- Lo minimo necesario para que el test pase
3.- Refactors



  // const [newTask, setNewTask] = useState('');
  // const handleInput = (event) => {
  //   setNewTask(event.target.value);
  // };
  // onChange={handleInput}


*/