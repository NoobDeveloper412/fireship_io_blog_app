/* eslint-disable @next/next/no-img-element */
import { auth, GoogleAuthProvider } from '../lib/firebase'
import toast from 'react-hot-toast'

function Enter () {
  const user = null
  const username = null
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  )
}

function SignInButton () {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(GoogleAuthProvider)
    } catch (error: any) {
      toast.error(error.message)
      console.error(error)
    }
  }
  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <img
        src='https://th.bing.com/th/id/R.2052fbd1d7526ebc4788704d3042778c?rik=R7C%2fe57AM0RO4w&riu=http%3a%2f%2fwww.vhv.rs%2ffile%2fmax%2f20%2f201053_google-logo-png.png&ehk=SvS4rW%2b%2bdikS08xwf8mB5Jy32CEKHvYH3X5HiG7WTQQ%3d&risl=&pid=ImgRaw&r=0'
        alt=''
      />
      Sign in with Google
    </button>
  )
}

function SignOutButton () {
  return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm () {
  return <h1>Form</h1>
}
export default Enter
