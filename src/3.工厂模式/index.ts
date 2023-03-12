export enum Role {
  'superadmin',
  'admin',
  'editor'
}

type Page = 'home' | 'manage' | 'task' | 'report'

class User {
  role: Role
  pages: Page[]
  constructor(role: Role, pages: Page[]) {
    this.role = role
    this.pages = pages
  }
}

export function userFactory(role: Role) {
  switch (role) {
    case Role.superadmin:
      return new User(role, ['home', 'manage', 'report', 'task'])
    case Role.admin:
      return new User(role, ['home', 'report', 'task'])
    case Role.editor:
      return new User(role, ['home', 'report'])
    default:
      throw new Error("args error...");
  }
}

