import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const ItemCard = () => {
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }} mt={3} justifyContent={'center'}>
                <Grid item xs={6} sm={6} md={4} xl={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemCard