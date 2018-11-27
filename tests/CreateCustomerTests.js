import { describe } from 'mocha';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils'
import CreateCustomer from '@components/CreateCustomer.vue';

describe('CreateCustomer', () => {
  // eslint-disable-next-line no-console
  console.log('running');

  // render the component
  const wrapper = shallowMount(CreateCustomer);

  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({ name: '' })

  // assert the error is rendered
  expect(wrapper.find('.notice').exists()).toBe(true)
  expect(wrapper.find('.notice').text()).to.be.equal('Name must have at least 2 characters');
})
