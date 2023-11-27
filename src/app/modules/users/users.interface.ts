export type TUSer = {
  id: string
  password: string
  needPasswordChange: boolean
  status: 'in-progress' | 'blocked'
  role: 'admin' | 'student' | 'faculty'
  isDeleted: boolean
}
