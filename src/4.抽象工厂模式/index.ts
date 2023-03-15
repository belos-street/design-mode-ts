export enum Role {
  'superadmin',
  'admin',
  'editor'
}
type Page = 'home' | 'manage' | 'task' | 'report'
type HomeElement = 'pie' | 'bar' | 'list' | 'map'
export abstract class User {
  role: Role
  pages: Page[]
  name: string
  constructor(name: string, role: Role, pages: Page[]) {
    this.name = name
    this.role = role
    this.pages = pages
  }

  welcome() {
    return `欢迎回来，${this.name}`
  }

  abstract homeShow(): HomeElement[]
}

export class SuperAdmin extends User {
  constructor(name: string) {
    super(name, Role.superadmin, ['home', 'manage', 'report', 'task'])
  }

  homeShow(): HomeElement[] {
    return ['pie', 'bar', 'list', 'map']
  }

  addUser() {
    console.log(`SuperAdmin可以添加新用户`)
  }

  viewReport() {
    console.log(`SuperAdmin可以查看报告`)
  }

  addTask() {
    console.log(`SuperAdmin可以创建任务`)
  }
}

class Admin extends User {
  constructor(name: string) {
    super(name, Role.admin, ['home', 'report', 'task'])
  }

  homeShow(): HomeElement[] {
    return ['pie', 'bar', 'list']
  }

  viewReport() {
    console.log(`Admin可以查看报告`)
  }

  addTask() {
    console.log(`Admin可以创建任务`)
  }
}

class Editor extends User {
  constructor(name: string) {
    super(name, Role.editor, ['home', 'task'])
  }

  homeShow(): HomeElement[] {
    return ['pie', 'bar']
  }

  addTask() {
    console.log(`Editor可以创建任务`)
  }
}

export function userFactory(role: Role) {
  switch (role) {
    case Role.superadmin:
      return SuperAdmin
    case Role.admin:
      return Admin
    case Role.editor:
      return Editor
    default:
      throw new Error("args error...");
  }
}


