import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AlertContainer from './index'

Enzyme.configure({ adapter: new Adapter() })

function setup(enableH3) {
	const props = {
		level: 'warning',
		heading: 'This is a heading',
		content: 'This is the content',
		enableH3: enableH3
	}

	const enzymeWrapper = mount(<AlertContainer {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('AlertContainer', () => {

	const testRender = enableH3 => {
		it('Should render itself correctly', () => {
			const { enzymeWrapper } = setup(enableH3)
			let headingTag = enableH3 ? 'h3' : 'h2'

			expect(enzymeWrapper.find('Alert').exists()).toBe(true)
			expect(enzymeWrapper.find('section').exists()).toBe(true)
			expect(enzymeWrapper.find('section').hasClass('alert-warning')).toBe(true)
			expect(enzymeWrapper.find('i').at(0).exists()).toBe(true)
			expect(enzymeWrapper.find(headingTag).exists()).toBe(true)
			expect(enzymeWrapper.find(headingTag).text()).toBe('This is a heading')
			expect(enzymeWrapper.find('p').exists()).toBe(true)
			expect(enzymeWrapper.find('p').text()).toBe('This is the content')
			expect(enzymeWrapper.find('a').exists()).toBe(true)
		})
	}

	testRender(true)
	testRender(false)
})