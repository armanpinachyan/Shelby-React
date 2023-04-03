import paris from '../Shelbyimg/paris.jpg'
import islandia from '../Shelbyimg/Islandia.jpg' 
import egypt from '../Shelbyimg/egypt.jpg'  
import thailand from '../Shelbyimg/111.jpg'
import bali from '../Shelbyimg/222.jpg'
import peru from '../Shelbyimg/333.jpg'
import newyork from '../Shelbyimg/5.jpg'
import moutians from '../Shelbyimg/6.jpg'
import logo from '../Shelbyimg/logo.png'


const Menu = [
    {
        name: 'ԱՌՑԱՆՑ ԱՄՐԱԳՐՈՒՄ',
        url: '/',
        icon: "fa-solid fa-chevron-down",
        icon2: "fa-sharp fa-solid fa-angle-left",
        subCategories: [
            {
                name: 'ԲԱնկային փոխանցումով',
                url: '/'
            },
            {
                name: 'բանկային աառցանց քարտով',
                url: '/'
            },
            {
                name: 'վճարային համակարգերով',
                url: '/'
            },
            {
                name: 'ապառիկ',
                url: '/'
            },
        ]
    },
    {
        id: Math.random(),
        name: 'փաթեթներ',
        url: '#',
        icon: "fa-solid fa-chevron-down",
        icon2: "fa-sharp fa-solid fa-angle-left",
        subCategories: [
            {
               name: "փնտրման համակարգ"
            }
        ],
    },
    {
        id: Math.random(),
        name: 'թողնել հարցում',
        url: '/form',
        icon: false,
        icon2: false,
        subCategories: false
    },
    {
        id: Math.random(),
        name: 'ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ',
        url: '#',
        icon: "fa-solid fa-chevron-down",
        icon2: "fa-sharp fa-solid fa-angle-left",
        subCategories: [
            {
                name: 'ՀՐԱՊԱՐԱԿՈՒՄՆԵՐ',
                url: '#'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'մեր մասին',
        url: '/about',
        icon: false,
        icon2: false,
        subCategories: false
    },
]
    



const Destinations = [
    {
        id: Math.random(),
        url: islandia,
        name: 'SPIRITUAL BALI ISLANDS',
        text: 'For the vast majority of its history, agriculture can be described as having been organic; only during the 20th century was a large supply.',
        btn: "see promotions"
    },
    {
        id: Math.random(),
        url: paris,
        name: 'MAGNIFICENT CITY OF PARIS',
        text: 'For the vast majority of its history, agriculture can be described as having been organic; only during the 20th century was a large supply.',
        btn: "see promotions"
    },
    {
        id: Math.random(),
        url: egypt,
        name: 'MYSTERIOUS PYRAMIDS',
        text: 'For the vast majority of its history, agriculture can be described as having been organic; only during the 20th century was a large supply.',
        btn: "see promotions"
    }
];

const Summers =[
    {
        id: Math.random(),
        num: 50,
        name: 'AVAILABLE DESTINATIONS',
        text: 'For the vast majority of its history, agriculture can be described.'
    },
    {
        id: Math.random(),
        num: 250,
        name: 'AVAILABLE DESTINATIONS',
        text: 'For the vast majority of its history, agriculture can be described.'
    },
    {
        id: Math.random(),
        num: 12,
        name: 'AVAILABLE DESTINATIONS',
        text: 'For the vast majority of its history, agriculture can be described.'
    },
    {
        id: Math.random(),
        num: 78,
        name: 'AVAILABLE DESTINATIONS',
        text: 'For the vast majority of its history, agriculture can be described.'
    }
];


const Gallerydata = [
    {
        id: Math.random(),
        url: thailand,
        name: 'THAILAND & VIETNAM',
        text: 'Southeast Asia'
    },
    {
        id: Math.random(),
        url: bali,
        name: 'BALI & BORNEO',
        text: 'Southeast Asia'
    },
    {
        id: Math.random(),
        url: peru,
        name: 'MOUNTAINS OF PERU',
        text: 'South America'
    },
    {
        id: Math.random(),
        url: egypt,
        name: 'EGYPT',
        text: 'Northeast Africa'
    },
    {
        id: Math.random(),
        url: newyork,
        name: 'NEW YORK',
        text: 'Northeast America'
    },
    {
        id: Math.random(),
        url: moutians,
        name: 'MOUNTAINS OF PERU',
        text: 'South America'
    },
    {
        id: Math.random(),
        url: paris,
        name: 'FRANCE',
        text: 'North France'
    },
    {
        id: Math.random(),
        url: bali,
        name: 'BALI & BORNEO',
        text: 'Southeast Asia'
    },
    {
        id: Math.random(),
        url: peru,
        name: 'MOUNTAINS OF PERU',
        text: 'South America'
    },
];

const Footers = {
  footer1: [ {
        id: Math.random(),
        logoimg: logo,
        text: 'The SHELBY company is a tour operator for inbound tourism, has good price offers for the hotel base and is specialized in work both in the external and in the domestic tourism market, cooperating with the most reliable foreign partners.',
        contact: "Call us: (011) 508484",
        iconcontact: 'fa-solid fa-phone',
        emailicon: 'fa-solid fa-envelope',
        email: 'shelby.am.co@gmail.com',
        adress: 'Amiryan 18 - Teryan 54/3 - Yerevan Mall-MegaMall Yerevan, Armenia',
        adressicon: 'fa-solid fa-location-dot'
    }],
   footer2: [{
        id: Math.random(),
        name: 'Additional Links',
        text1: 'Առցանց ամրագրում',
        text2: 'Բանկային փոխանցումով',
        text3: 'Բանկային առցանց քարտով',
        text4: 'Վճարային համակարգերով',
        text5: 'Ապառիկ',
        text6: 'Փաթեթներ',
        text7: 'Թողնել հարցում',
        text8: 'Թեժ առաջարկներ',
        text9: 'Հրապարակումներ',
        text10: 'Մեր մասին'
    },
    {
        id: Math.random(),
        name: 'Additional Links',
        text1: 'Առցանց ամրագրում',
        text2: 'Բանկային փոխանցումով',
        text3: 'Բանկային առցանց քարտով',
        text4: 'Վճարային համակարգերով',
        text5: 'Ապառիկ',
        text6: 'Փաթեթներ',
        text7: 'Թողնել հարցում',
        text8: 'Թեժ առաջարկներ',
        text9: 'Հրապարակումներ',
        text10: 'Մեր մասին'
    }
],
   footer3: [{
        id: Math.random(),
        name2: 'Our Instagram Feed'
    }],
   footer4: [{
        foootertext: '© Copyright Qode Interactive. This demo is a part of the',
        foootertext2: 'Bridge theme.'
   }
    ]
};

const imgpage = {
    imgpage1: [
        {   
            id: Math.random(),
            url: islandia
        },
        {
            id: Math.random(),
            url: paris
        },
        {
            id: Math.random(),
            url: egypt
        },
    ],
        content:[ {
            id: Math.random(),
            name: 'ABOUT THIS PROJECT',
            text: 'Sometimes the simplest things are the hardest to find. So we created a new line for everyday life, All Year Round. Sometimes the simplest things are the hardest to find you. Sometimes the simplest things are the hardest to find. So we created a new line for everyday life, All Year Round. Sometimes the simplest things are the hardest to find you. Sometimes the simplest things are the hardest to find. So we created a new line for everyday life, All Year Round. Sometimes the simplest things are the hardest to find you. Sometimes the simplest things are the hardest to find. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna magna, scelerisque suscipit est vitae, suscipit tempor arcu.',
            btn: 'read more',
            date1: 'date',
            date2: 'July 18, 2016',
            category1: 'category',
            category2: 'Southeast Asia',
            tags1: 'tasg',
            tags2: 'Nature, Seaside'
         }
        ]
};

const imgpage2 = {
    imgpage1: [
        {   
            id: Math.random(),
            url: bali
        },
        {
            id: Math.random(),
            url: peru
        },
        {
            id: Math.random(),
            url: thailand
        },
    ],
        content:[ {
            id: Math.random(),
            name: 'ABOUT THIS PROJECT',
            text: 'Sometimes the simplest things are the hardest to find. So we created a new line for everyday life, All Year Round. Sometimes the simplest things are the hardest to find you. Sometimes the simplest things are the hardest to find. So we created a new line for everyday life, All Year Round. Sometimes the simplest things are the hardest to find you. Sometimes the simplest things are the hardest to find. So we created a new line for everyday life, All Year Round. Sometimes the simplest things are the hardest to find you. Sometimes the simplest things are the hardest to find. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna magna, scelerisque suscipit est vitae, suscipit tempor arcu.',
            btn: 'read more',
            date1: 'date',
            date2: 'July 18, 2016',
            category1: 'category',
            category2: 'Southeast Asia',
            tags1: 'tasg',
            tags2: 'Nature, Seaside'
         }
        ]
};





export {Destinations,Summers,Gallerydata,Footers,imgpage,imgpage2,Menu}