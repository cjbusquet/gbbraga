const fetchData = async () => {
  const { data: user } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.user.id)
    .single()

  if (error) console.error(error)
  else setData([data])
}