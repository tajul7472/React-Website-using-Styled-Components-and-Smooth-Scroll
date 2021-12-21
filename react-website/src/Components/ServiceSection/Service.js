import React from 'react'
import Icon1 from '../../images/car.png'
import Icon2 from '../../images/card.png'
import Icon3 from '../../images/login.png'
import { ServiceContainer, ServicesH1,ServicesWrapper,ServicesIcon ,ServicesCard,ServicesH2,ServicesP} from './ServiceElements'

const Service = () => {
    
        const data = [
          { id: 1,imgage:Icon1, heading: "Reduce expenses",description:"We help reduce your fees and increase your overall revenue." },
          { id: 2,imgage:Icon2, heading: "Victor Wayne",description:"We help reduce your fees and increase your overall revenue." },
          { id: 3,imgage:Icon3, heading: "Jane Doe" ,description:"We help reduce your fees and increase your overall revenue."},
        ];
    return (
        <ServiceContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                {data.map((item)=>(
                    <ServicesCard>
                    <ServicesIcon src={item.imgage} /> 
                    <ServicesH2>{item.heading}</ServicesH2>
                    <ServicesP>{item.description}</ServicesP>
                </ServicesCard>
                ))}
            </ServicesWrapper>
        </ServiceContainer>
    )
}

export default Service
