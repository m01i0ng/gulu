import Vue from 'vue'
import { describe, it } from 'mocha'
import chai from 'chai'
import spies from 'chai-spies'

import Button from '../src/button'

const expect = chai.expect
chai.use(spies)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', function() {
  it('should exist', function() {
    expect(Button).to.be.ok
  })

  it('should set icon', function() {
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
  })

  it('should set loading', function() {
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
  })

  it('should default order is 1', function() {
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
  })

  it('should change order to 2 by setting iconPosition', function() {
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
  })

  it('should answer click event', function() {
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
  })
})
