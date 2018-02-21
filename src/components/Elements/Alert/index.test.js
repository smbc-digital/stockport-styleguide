import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AlertContainer from './index'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        level: 'warning',
        heading: 'This is a heading',
        content: 'This is the content'
    }

    const enzymeWrapper = mount(<AlertContainer {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('AlertContainer', () => {

    it('Should render itself correctly', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('Alert').exists()).toBe(true)
        expect(enzymeWrapper.find('section').exists()).toBe(true)
        expect(enzymeWrapper.find('section').hasClass('alert-warning')).toBe(true)
        expect(enzymeWrapper.find('i').at(0).exists()).toBe(true)
        expect(enzymeWrapper.find('h2').exists()).toBe(true)
        expect(enzymeWrapper.find('h2').text()).toBe('This is a heading')
        expect(enzymeWrapper.find('p').exists()).toBe(true)
        expect(enzymeWrapper.find('p').text()).toBe('This is the content')
        expect(enzymeWrapper.find('a').exists()).toBe(true)
    })

    const setAlertLevel = (event) => {
        it(`Should show correct icon for alert level ${event.alert.level}`, () => {
            const props = {
                level: event.alert.level
            }
        
            const enzymeWrapper = mount(<AlertContainer {...props} />)

            expect(enzymeWrapper.find('section').hasClass(`alert-${event.alert.level}`)).toBe(true)
            expect(enzymeWrapper.find('i').at(0).hasClass('fa')).toBe(true)
            expect(enzymeWrapper.find('i').at(0).hasClass(event.alert.icon)).toBe(true)
        })
    }

    setAlertLevel({alert: { level: 'warning', icon: 'fa-exclamation-triangle'}})
    setAlertLevel({alert: { level: 'information', icon: 'fa-info-circle'}})
    setAlertLevel({alert: { level: 'success', icon: 'fa-check-circle'}})
    setAlertLevel({alert: { level: 'error', icon: 'fa-exclamation-circle'}})
    setAlertLevel({alert: { level: 'NotValid', icon: 'fa-exclamation-triangle'}})

    describe('onClick()', () => {

        const runOnClickUpdateStateTest = (event) => {
			it(`should update isHidden state to ${event.target.result}`, () => {
                const { enzymeWrapper } = setup()
                enzymeWrapper.setState({ isHidden: event.target.value})
				enzymeWrapper.instance().onClick(event)
				
                expect(enzymeWrapper.instance().state.isHidden).toBe(event.target.result)
                expect(enzymeWrapper.find('Alert').exists()).toBe(event.target.result)
			})
		}

		runOnClickUpdateStateTest({target: { value: true, result: false}, preventDefault: jest.fn()})
		runOnClickUpdateStateTest({target: { value: false, result: true}, preventDefault: jest.fn()})
    })
})