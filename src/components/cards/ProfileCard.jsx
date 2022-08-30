import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function ProfileCard({className,title,tag,style,subtitle,description,img}) {
    return (
        <>
            <Card
                className={className}
                style={style}
                
            >
                <img
                    alt="Card image"
                    src={img}
                />
                <CardBody>
                    <CardTitle tag={tag}>
                        {title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {subtitle}
                    </CardSubtitle>
                    <CardText>
                        {description}
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}

export default ProfileCard;