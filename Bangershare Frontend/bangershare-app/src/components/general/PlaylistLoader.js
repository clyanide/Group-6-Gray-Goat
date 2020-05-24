import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Typography, Card, CardActionArea, CardContent, CardActions, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const PlaylistLoader = (props) => {
    const { skeletons, num } = props;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div style={{ marginTop: "3vh" }}>
            {[...Array(skeletons)].map(() => (
                <div>
                    <div>
                        <Typography
                            variant="h5"
                            style={{ marginLeft: "1vw", marginTop: "2vh" }}
                        >
                            <Skeleton width="280px" />
                        </Typography>
                    </div>
                    <div>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            responsive={responsive}
                            infinite={true}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            itemClass="image-item"
                            arrows={false}
                        >
                            {[...Array(num)].map(() => (
                                <Card style={{ height: "15vh" }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Skeleton height="25px" width="80%" />
                                            <Skeleton width="60%" height="15px" style={{ paddingTop: "10px" }} />
                                        </CardContent>
                                    </CardActionArea>
                                    <Divider style={{ backgroundColor: "#5e35b1" }} />
                                    <CardActions>
                                        <div
                                            style={{

                                                display: "flex",
                                                flexDirection: "row",
                                                paddingLeft: "10px",
                                                paddingTop: "10px"
                                            }}
                                        >
                                            <Skeleton
                                                variant="circle"
                                                width="30px"
                                                height="30px"
                                            />
                                            <div style={{ paddingLeft: "30px" }}>
                                                <Skeleton
                                                    variant="circle"
                                                    width="30px"
                                                    height="30px"
                                                />
                                            </div>
                                        </div>
                                    </CardActions>
                                </Card>
                            ))}
                        </Carousel>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlaylistLoader;