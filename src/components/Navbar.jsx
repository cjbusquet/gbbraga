import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const logout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="nav">
      <h3>SaaS App</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
}