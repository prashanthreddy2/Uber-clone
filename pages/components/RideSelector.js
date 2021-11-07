import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropOffCoordinates}) => {

    const [rideDuration, setrideDuration] = useState(0)

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiYXNpZmtoYW4wNDAxIiwiYSI6ImNrdm04d3J6eDA4bTEydm1udXF0M3VxazEifQ.5JS8d3-U7EgDL2USiRZ_4g`
        )
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            setrideDuration(data.routes[0].duration/100)
        })

    }, [pickupCoordinates, dropOffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a Ride or swipe up for more</Title>
            <CarList>
                {carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl}/>
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5min away</Time>
                        </CarDetails>
                        <Price>{ "Rs " + (rideDuration*car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
}

export default RideSelector
const Wrapper = tw.div`
    flex flex-1 overflow-y-scroll flex-col
`
const Title = tw.div`
    text-gray text-center text-xs py-2 border-b
`
const CarList = tw.div`
    overflow-y-scroll
`
const Car = tw.div`
    flex p-4 items-center
`
const CarImage = tw.img`
    h-14 mr-4
`
const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
    text-xs text-blue-500
`
const Price = tw.div`
    text-m font-medium
`
