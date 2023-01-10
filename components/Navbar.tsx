/* eslint-disable @next/next/no-img-element */
import { FirebaseApp } from 'firebase/app'
import Link from 'next/link'
import React, { Fragment } from 'react'

interface User {
  user: { photoURL: '' }
  username: string
}
function Navbar () {
  const { user, username }: User = { user: { photoURL: '' }, username: '' }
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/' passHref>
            <button className='btn-logo'>FEED</button>
          </Link>
        </li>
        {/* user is logged in */}
        {username && (
          <Fragment>
            <li className='push-left'>
              <Link href='/admin' passHref>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </Fragment>
        )}
        {/* user is not logged in */}
        {!username && (
          <Fragment>
            <li>
              <Link href='/enter' passHref>
                <button className='btn-blue'>Log in</button>
              </Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
