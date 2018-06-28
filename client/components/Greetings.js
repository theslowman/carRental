import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../style/slider-animations.css';
import '../style/styles.css';

const content = [{
    title: 'Most luxury car rental company',
    description:
        'We offer rental of luxury high performance cars. Only for the best. We want your money.',
    button: 'Rent now',
    image: 'http://www.trendzcar.com/wp-content/uploads/2012/05/2012-Wheelsandmore-Lamborghini-Aventador-LP-700-4-Rear-Angle-2.jpg',
    user: 'Lamborghini aventador',
    userProfile: 'http://www.car-brand-names.com/wp-content/uploads/2015/03/Lamborghini-Logo-720x720.png'
},
    {
        title: 'Grasp luxury vibe',
        description:
            'Cars offered by Supreme are exquisite in every detail. Simply better than your Astra.',
        button: 'Rent now',
        image: 'https://carwow-uk-wp-0.imgix.net/2017-mercedes-s-class-2.jpg',
        user: 'Mercedes Benz S class coupe',
        userProfile: 'https://images-na.ssl-images-amazon.com/images/I/61VaoHj7IbL._SL1500_.jpg'
    },

    {
        title: 'World class',
        description:
            'Renting is now. We are Iron Man of renting, Hulk of pricing. If you are rich and bored try our services. You\'ll remember how it is to be poor again.',
        button: 'Rent now',
        image: 'https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2015/at-a-glance/g11g12_ataglance-stage.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1489136912793.jpg',
        user: 'BMW 7 I AM Rich edition',
        userProfile: 'https://images-na.ssl-images-amazon.com/images/I/41xi-Aee9OL.jpg'
    }
];

class Greetings extends React.Component {
    render() {
        return (
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{background: `url('${item.image}') no-repeat center center`}}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user}/>
                            <span>
							Vehicle <strong>{item.user}</strong>
						</span>
                        </section>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Greetings;
