import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AlertInlineContainer from './index'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
	const props = {
		heading: 'This is a heading',
		content: 'This is the content'
	}

	const enzymeWrapper = mount(<AlertInlineContainer {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('AlertInlineContainer', () => {

	it('Should render itself correctly', () => {
		const { enzymeWrapper } = setup()

		expect(enzymeWrapper.find('AlertInline').exists()).toBe(true)
		expect(enzymeWrapper.find('section').exists()).toBe(true)
		expect(enzymeWrapper.find('section').hasClass('alert-inline')).toBe(true)
		expect(enzymeWrapper.find('h2').exists()).toBe(true)
		expect(enzymeWrapper.find('h2').text()).toBe('This is a heading')
		expect(enzymeWrapper.find('p').exists()).toBe(true)
		expect(enzymeWrapper.find('p').text()).toBe('This is the content')
	})
})