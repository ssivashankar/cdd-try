import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

const setUp = (props) => shallow(<Header {...props} />),
  findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)

describe('Header Component', () => {
    let component
    beforeEach(() => component = setUp())

    describe('Logo Wrapper', () => {
        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'header-wrap')
            expect(wrapper.length).toBe(1)
        })

        it('Should render without errors', () => {
            const logoText = findByTestAttr(component, 'title').text()
            expect(logoText).toBe('CDD UI')
        })
    })
})


// const wrapper = shallow(<Header />),
//   wrapper.find(`[data-test='header-wrap']`)
// https://youtu.be/tYMLXpOJtng?list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_

// https://youtu.be/JQD-ApooNMI
