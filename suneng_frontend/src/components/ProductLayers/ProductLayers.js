import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aux from '../../hoc/Aux';
import './ProductLayers.css';
import  Machine1 from './Assets/Machine.png';
import  Machine2 from './Assets/Machine2.png';
import  Machine3 from './Assets/Machine3.png';

const ProductLayer = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <Aux>
          <div className="protect">
            <p className="Title">Products</p>
            <section className="Lists">
                <Carousel responsive={responsive}>
                    <section className="prod">
                      <img src={Machine1} alt="" />
                      <div className="Product__Detail">
                        <p className="Machine__name">Local Mixing Machine</p>
                        <p className="Machine__Details">This machine is used to drill dough in a very efficient way.
                          This is used by most of our customers.</p>
                          <div className="Btn__Div">
                            <section>
                              <a href="/">Order</a>
                            </section>
                          </div>
                      </div>
                    </section>
                    <section className="prod">
                      <img src={Machine2} alt="" />
                      <div className="Product__Detail">
                        <p className="Machine__name">Local Mixing Machine</p>
                        <p className="Machine__Details">This machine is used to drill dough in a very efficient way.
                          This is used by most of our customers.</p>
                          <div className="Btn__Div">
                            <section>
                              <a href="/">Order</a>
                            </section>
                          </div>
                      </div>
                    </section>
                    <section className="prod">
                      <img src={Machine3} alt="" />
                      <div className="Product__Detail">
                        <p className="Machine__name">Local Mixing Machine</p>
                        <p className="Machine__Details">This machine is used to drill dough in a very efficient way.
                          This is used by most of our customers.</p>
                          <div className="Btn__Div">
                            <section>
                              <a href="/">Order</a>
                            </section>
                          </div>
                      </div>
                    </section>
                </Carousel>
            </section>
          </div>
        </Aux>
    )
}

export default ProductLayer