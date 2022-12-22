import React from 'react';
import {mount} from 'enzyme';
import { IContract } from '../Type/Employee.type';
import { Container } from 'react-dom';
import  * as ReactDOM from 'react-dom'
import AddContractEmployee from '../ContractEmployee/AddContractEmployee';


describe ('AddcontractEmployee test',()=>{

    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AddContractEmployee/>,container);
    });
    
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it ('Render correctly',()=>{
        const inputs =container.querySelectorAll('input');
        expect (inputs).toHaveLength(4);
    })
})

