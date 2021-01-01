import {Router, RouterConfiguration} from 'aurelia-router'
import {inject, PLATFORM} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'
import {WebAPI} from './web-api'

@inject(WebAPI, EventAggregator)
export class App {
  router: Router
  caseNumber: string
  token: string
  username: string
  password: string

  constructor(public api: WebAPI) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {

    config.title = 'Contacts'
    config.options.pushState = true
    config.options.root = '/'

    config.map([
      {route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select'},
      {
        route: 'contacts/:id',
        moduleId: PLATFORM.moduleName('contact-detail'),
        name: 'contacts'
      }
    ])

    this.router = router
  }
}
