import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const { data: userData } = await supabase.auth.getUser()

    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userData.user.id)
      .single()

    setProfile(data)
  }

  return (
    <>
      <Navbar />

      <div className="center">
        <h2>Dashboard</h2>

        {profile ? (
          <p>Welcome {profile.email}</p>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </>
  )
}