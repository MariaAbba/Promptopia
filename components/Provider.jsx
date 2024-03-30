'use client'
import React from 'react'

import { SessionProvider, sessionProvider } from 'next-auth/react'

const Provider = ({children, session}) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
