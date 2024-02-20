import nmIndiaImg from '../img/nmindia.png'
import minfertImg from '../img/minfert.png'
import eragonImg from '../img/eragon.png'
import sunnyImg from '../img/drsunny.png'
import fashionImg from '../img/fashion.png'

export const ProductService = {
    getProductsData() {
        return [
            {
                id: 1,
                name: 'NM India Biotech',
                description: `NM India Biotech is a E-commerce website, involved in the development, manufacturing and marketing of chemical free agri inputs. Played a key role in developing NM India, dynamic E-commerce platform catering to diverse customer needs. Successfully implemented and optimized responsive design principles, ensuring a seamless and user-friendly experience across various devices such as desktops, tablets, and mobile devices. Implemented and optimized diverse payment methods, including a robust online system for streamlined checkouts and offline modes for user inclusivity, enhancing the website’s overall payment experience.`,
                image: nmIndiaImg,
                link: 'https://www.nmindiabio.com/',
            },
            {
                id: 2,
                name: 'Minfert',
                description: `minfert is a E-commerce website, Pioneers in mineral processing, now revolutionizing agriculture with mineral-based bio-stimulants and organic fertilizers for sustainable crop cultivation. Played a key role in developing NM India, dynamic E-commerce platform catering to diverse customer needs. Successfully implemented and optimized responsive design principles, ensuring a seamless and user-friendly experience across various devices such as desktops, tablets, and mobile devices. Implemented and optimized diverse payment methods, including a robust online system for streamlined checkouts and offline modes for user inclusivity, enhancing the website’s overall payment experience.`,
                image: minfertImg,
                link: 'https://minfert.in/',
            },

            {
                id: 3,
                name: 'Eragon',
                description: `Designed and implemented an immersive parallax effect on this website, utilizing advanced CSS and JavaScript techniques to enhance the site’s visual appeal and user engagement. bDemonstrated expertise in responsive web design by seamlessly integrating the parallax effect, providing users with a consistent and engaging experience on desktops, tablets, and mobile devices.`,
                image: eragonImg,
                link: 'http://eragon.brandtalks.in/',
            },
            {
                id: 4,
                name: 'Dr. Sunny',
                description: `Led the development efforts for the ‘Dr. Sunny’ web application, is a comprehensive and user-centric platform designed to connect parents with babysitters.
                 expertise in UI development, including creating multiple forms and data-binding functionalities. Introduced conditional logic in forms to personalize user experiences, adapting the interface dynamically based on user inputs and requirements.`,
                image: sunnyImg,
                link: 'https://app.maika.ae/',
            },
            {
                id: 5,
                name: 'Fashion',
                description: `This website developed using next.js framework. A single-page website with fully functional of client-side, fully responsive website for all screen size devices. Used DummyJSON APIs and created a commercial website like Myntra, categorized the all types of products.  `,
                image: fashionImg,
                link: 'https://github.com/chanchalsolanki25/Fashion_Store',
            },
        ];
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

};

