import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import './index.css'
const Product = ({ product }) => {
    return (
        <Col lg='3' md='4' sm='6' xs='6'>
            <Card className='border-0 mt-2'>
                    <div className='card-image-con'>
                        <Image src={product.img} className='card-img img-responsive' />
                        <div className='display-on-small-screens'>
                            <div className='product-info-container'>
                                <div className='icon'>
                                    <ShoppingCartOutlined fontSize='small' />
                                </div>
                                <div className='icon'>
                                    <FavoriteBorderOutlined fontSize='small' />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined fontSize='small' />
                                </div>
                            </div>
                        </div>
                        <div className='display-on-medium-screens'>
                            <div className='product-info-container'>
                                <div className='icon'>
                                    <ShoppingCartOutlined />
                                </div>
                                <div className='icon'>
                                    <FavoriteBorderOutlined />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined />
                                </div>
                            </div>
                        </div>
                        <div className='display-on-large-screens'>
                            <div className='product-info-container'>
                                <div className='icon'>
                                    <ShoppingCartOutlined fontSize='large' />
                                </div>
                                <div className='icon'>
                                    <FavoriteBorderOutlined fontSize='large' />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined fontSize='large' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className='text-center'>{product.title}</h6>
                    <h6 className='text-center text-muted'>{product.price}</h6>
            </Card>
        </Col>
    )
}

export default Product
