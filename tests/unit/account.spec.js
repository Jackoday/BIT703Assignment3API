import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/account.vue';

describe('Account.vue', () => {
  it('renders heading', () => {
    const welcome_text = 'User Login/Registration';
    const wrapper = shallowMount(Home, {});
    expect(wrapper.text()).to.include(welcome_text);
  });
});
