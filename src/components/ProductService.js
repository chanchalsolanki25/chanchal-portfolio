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
                description: `Developed and maintained user interface for NM India, dynamic E-commerce platform catering to diverse customer needs. Collaborated closely with the client and design team to understand the website requirements, target audience, and overall vision. Successfully implemented and optimized responsive design principles, ensuring a seamless and user-friendly experience across various devices. Coordinated with UX/UI designers to translate design concepts into functional web interface. Converted Image format in .webp to retain quality at lower file-size and to reduce the loading time.`,
                image: nmIndiaImg,
                link: 'https://www.nmindiabio.com/',
            },
            {
                id: 2,
                name: 'Minfert',
                description: `Developed and maintained user interfaces for Minfert, dynamic E-commerce platform catering to diverse customer needs. Collaborated closely with the client and design team to understand the website requirements, target audience, and overall vision. Successfully implemented and optimized responsive design principles, ensuring a seamless and user-friendly experience across various devices. Coordinated with UX/UI designers to translate design concepts into functional web interface. Converted Image format in .webp to retain quality at lower file-size and to reduce the loading time.`,
                image: minfertImg,
                link: 'https://minfert.in/',
            },

            {
                id: 3,
                name: 'Dr. Sunny',
                description: `Assisted in the development efforts for the ‘Dr. Sunny’ web application which is a comprehensive and user-centric platform designed to connect parents with babysitters.
                Contributed to the development of user interface including creating multiple forms, API integration using Angular framework. Implemented conditional logic informs to personalize user experience and adapting the interface dynamically based on user inputs and requirements.`,
                image: sunnyImg,
                link: 'https://app.maika.ae/',    
            },
            {
                id: 4,
                name: 'Eragon',
                description: `Created an immersive parallax effect on this website, utilizing advanced CSS and JavaScript techniques to enhance the site’s visual appeal and user engagement.Provided ongoing support and maintenance including updates and refinements to continuously improve the project’s design and user experience. Designed primary and secondary header to give a better look to web interface.`,
                image: eragonImg,
                link: 'http://eragon.brandtalks.in/',
            },
            {
                id: 5,
                name: 'Fashion',
                description: `Worked as a trainee on my own-project and created a fully responsive single page e-commerce website ‘Fashion’ using Next.js framework. Created a fully functional parts of website i.e., add to cart, product fetching, order process and recently view product.
                Used DummyJSON APIs and created a commercial website along with all types of categorized products. Collaborated with my senior developers on day-to-day basis and learned User Interface side and logic part`,
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

