import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {

  const [ User, setUser ] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, User => {
      if(User){
        setUser({
          name: User.displayName,
          photoUrl: User.photoURL,

        })
      } else{
        setUser(null)
        router.push('/Login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>{User && User.name}</Name>
            <UserImage src={User && User.photoUrl}  onClick = {() => signOut(auth) } />
          </Profile>
        </Header>
        <ActionsButtons>
          <Link href="/Search">
            <ActionsButton>
              <ActionsButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Ride</ActionsButton>
          </Link>
          <ActionsButton>
            <ActionsButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels</ActionsButton>
          <ActionsButton>
            <ActionsButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve</ActionsButton>
        </ActionsButtons>
        <InptButton>
          Where
        </InptButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
  h-28
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 w-20 text-small
`
const UserImage = tw.img`
  h-12 w-12 rounded-full object-cover border border-gray-200 p-px cursor-pointer
`
const ActionsButtons = tw.div`
  flex 
`
const ActionsButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transistion text-xl
`
const ActionsButtonImage  = tw.img`
  h-3/5
`
const InptButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`