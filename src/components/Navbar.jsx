import { supabase } from '../supabaseClient'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <nav style={{ padding: '10px', background: '#222', color: '#fff' }}>
      <span>My App</span>

      {user && (
        <button
          onClick={handleLogout}
          style={{ float: 'right', cursor: 'pointer' }}
        >
          Logout
        </button>
      )}
    </nav>
  )
}

export default Navbar