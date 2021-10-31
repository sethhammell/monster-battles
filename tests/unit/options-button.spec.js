import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import OptionsButton from '@/components/battle/UI/OptionsButton.vue';

describe('OptionsButton.vue', () => {
  const actions = {
    toggleOptionsMenu: jest.fn()
  };

  const store = createStore({
    modules: {
      battleStats: {
        namespaced: true,
        actions: actions
      }
    }
  });

  it('toggleOptionsMenu is called when options button is clicked', () => {
    const wrapper = shallowMount(OptionsButton, { global: { plugins: [ store ] } });
    wrapper.find('button').trigger('click');
    expect(actions.toggleOptionsMenu).toHaveBeenCalled();
  })

  it('options button text is OPTIONS', () => {
    const wrapper =shallowMount(OptionsButton);
    expect(wrapper.find('button').text()).toBe('OPTIONS');
  })
});
