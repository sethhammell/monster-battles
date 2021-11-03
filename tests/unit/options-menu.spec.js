import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import OptionsMenu from '@/components/battle/OptionsMenu.vue';

describe('OptionsMenu.vue', () => {
  const mockRouter = {
    push: jest.fn()
  }

  const battleStatsActions = {
    toggleOptionsMenu: jest.fn()
  };

  const playerStatsActions = {
    surrender: jest.fn()
  };

  const store = createStore({
    modules: {
      battleStats: {
        namespaced: true,
        actions: battleStatsActions
      },
      playerStats: {
        namespaced: true,
        actions: playerStatsActions
      }
    }
  });

  it('toggleOptionsMenu is called and router set to main-menu when main menu button is clicked', () => {
    const wrapper = shallowMount(OptionsMenu, { global: { plugins: [ store ], mocks: { $router: mockRouter } } });
    const childComponent = wrapper.findAllComponents({ name: "OptionsMenuButton" }).at(0);

    childComponent.trigger('click');
    expect(battleStatsActions.toggleOptionsMenu).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/main-menu');
  })

  it('toggleOptionsMenu and surrender is called when surrender button is clicked', () => {
    const wrapper = shallowMount(OptionsMenu, { global: { plugins: [ store ] } });
    const childComponent = wrapper.findAllComponents({ name: "OptionsMenuButton" }).at(1);

    childComponent.trigger('click');
    expect(battleStatsActions.toggleOptionsMenu).toHaveBeenCalledTimes(2);
    expect(playerStatsActions.surrender).toBeCalled();
  })

  it('toggleOptionsMenu called when resume button is clicked', () => {
    const wrapper = shallowMount(OptionsMenu, { global: { plugins: [ store ] } });
    const childComponent = wrapper.findAllComponents({ name: "OptionsMenuButton" }).at(2);

    childComponent.trigger('click');
    expect(battleStatsActions.toggleOptionsMenu).toHaveBeenCalledTimes(3);
  })

  it('options menu header text is Options', () => {
    const wrapper = shallowMount(OptionsMenu);
    expect(wrapper.find('h2').text()).toBe('Options');
  })

  it('options menu has three OptionsMenuButtons', () => {
    const wrapper = shallowMount(OptionsMenu);
    expect(wrapper.findAllComponents({ name: "OptionsMenuButton" }).length).toBe(3);
  })
});
