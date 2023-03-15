import { Role, userFactory } from './4.抽象工厂模式'

const UserClass = userFactory(Role.editor)
const user = new UserClass('dxg')
console.log(user)

document.body.innerHTML = `
 <h1>Design Mode</h1>
 <h2>${user.welcome()}</h2>
 <ul>
   ${user.pages.reduce((pre, cur) => `${pre}<li>${cur}</li>`, '')}
 </ul>
 <hr/>
 <h2>HomePage</h2>
 <ul>
 ${user.homeShow().reduce((pre, cur) => `${pre}<li>${cur}</li>`, '')}
 </ul>
`