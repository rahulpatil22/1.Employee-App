import AddEmployee from '../AddEmployee/AddEmployee'
import * as ReactDom from 'react-dom';


describe('Add Employee Test',()=>{
    let container:HTMLDivElement

    beforeEach(()=>{
        container = document.createElement ('div');
        document.body.appendChild(container);
        ReactDom.render(<AddEmployee/>,container);
    })
    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

})