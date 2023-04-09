import { Signleton } from './5.单例模式'

const gitlab = new Signleton('gitlab', 355)
const github = new Signleton('github', 999)
console.log(github, gitlab)
console.log(github === gitlab)