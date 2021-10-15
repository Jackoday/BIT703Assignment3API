import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/addimage.vue';

describe('Addimage.vue', () => {
  it('renders heading', () => {
    const welcome_text = 'Add An Image';
    const wrapper = shallowMount(Home, {});
    expect(wrapper.text()).to.include(welcome_text);
  });
});
