import { Role, userFactory } from './3.工厂模式'
const { pages } = userFactory(Role.superadmin)

document.body.innerHTML = `
 <h1>Design Mode</h1>

 <ul>
   ${pages.reduce((pre, cur) => `${pre}<li>${cur}</li>`, '')}
 </ul>
`