import Vue from 'vue'
import chai from 'chai'
import spies from 'chai-spies'

import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})

chai.use(spies)
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  const use = vm.$el.querySelector('use')
  const href = use.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')

  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')

  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')

  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount()
  const spy = chai.spy(() => {

  })
  vm.$on('click', spy)
  const button = vm.$el
  button.click()

  vm.$el.remove()
  vm.$destroy()
  expect(spy).to.have.been.called()
}
