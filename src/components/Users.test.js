import React from 'react'
import ReactDom from 'react-dom';
import { shallow } from 'enzyme'
import Users from './Users'

const setUp = props => shallow(<Users {...props} />),
  findByAttr = (component, attr) => component.find(`${attr}`)
  
describe('Users screen', () => {
    let component;
    beforeEach(() => component = setUp())

    it('Users screen th should match', () => {
        const celledComponent = findByAttr(component, '.celled th')
        expect(celledComponent.length).toBe(4)
    })

    it('Users screen tr should match', () => {
        const celledComponent = findByAttr(component, '.celled tr')
        expect(celledComponent.length).toBe(1)
    })
})