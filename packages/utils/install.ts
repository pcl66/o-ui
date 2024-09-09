import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

export type SFCWithInstall<T> = T & Plugin

/**
 * 
 * 为o-ui提供插件安装方法
 */
export const makeInstaller = (components: Plugin[]) => {
  const installer = (app: App) => each(components, (component) => app.use(component))
  return installer as Plugin
}

/**
 * 用于给组件添加 install 方法的函数
 *
 * @param component 组件实例
 * 
 */
export const withInstall = <T,>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}