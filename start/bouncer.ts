import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer

export const { policies } = Bouncer.registerPolicies({
  RolPolicy: () => import('App/Policies/RolPolicy'),
  UserPolicy: () => import('App/Policies/UserPolicy'),
})
