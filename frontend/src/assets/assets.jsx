import logo from './main-logo.png'
import basket from './basket_icon.png'
import bannerimage from './banner-image.png'

import GppGoodIcon from '@mui/icons-material/GppGood';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import productitem1 from './product-item1.jpg'
import productitem2 from './product-item2.jpg'
import productitem3 from './product-item3.jpg'
import productitem4 from './product-item4.jpg'

import watch1 from './product-item6.jpg'
import watch2 from './product-item7.jpg'
import watch3 from './product-item8.jpg'
import watch4 from './product-item9.jpg'

import singleimage1 from './single-image1.png'

import postitem1 from './post-item1.jpg'
import postitem2 from './post-item2.jpg'
import postitem3 from './post-item3.jpg'
import postitem4 from './post-item4.jpg'

import instaitem1 from './insta-item1.jpg'
import instaitem2 from './insta-item2.jpg'
import instaitem3 from './insta-item3.jpg'
import instaitem4 from './insta-item4.jpg'
import instaitem5 from './insta-item5.jpg'


export const assets={
    logo,
    basket,
    bannerimage,
    singleimage1
}

export const Services_list=[
    {
        sid:1,
        stitle:"free delivery",
        simage:<ShoppingCartIcon color='action' sx={{fontSize:100}}/>
    },
    {
        sid:2,
        stitle:"quality guarantee",
        simage:<GppGoodIcon color='action' sx={{fontSize:100}}/>
    },
    {
        sid:3,
        stitle:"daily offers",
        simage:<NotificationImportantIcon color='action' sx={{fontSize:100}}/>
    },
    {
        sid:4,
        stitle:"100% secure payments",
        simage:<MilitaryTechIcon color='action' sx={{fontSize:100}}/>
    },
]

export const mobileProductsList=[
    {
        pid:1,
        product:"i phone 10",
        pimage:productitem1
    },
    {
        pid:2,
        product:"i phone 12",
        pimage:productitem2
    },
    {
        pid:3,
        product:"i phone 10",
        pimage:productitem3
    },
    {
        pid:4,
        product:"i phone 10",
        pimage:productitem4
    },
]

export const watchList=[
    {

        wid:1,
        watch:"watch1",
        wimage:watch1
    },
    {

        wid:2,
        watch:"watch2",
        wimage:watch2
    },
    {

        wid:3,
        watch:"watch3",
        wimage:watch3
    },
    {

        wid:4,
        watch:"watch4",
        wimage:watch4
    }
]

export const postsList=[
    {
        postid:1,
        pimage:postitem1,
        pdate:"FEB 22, 2024-GADGETS",
        ptitle:"get some cool gadgets in 2024"
    },
    {
        postid:2,
        pimage:postitem2,
        pdate:"FEB 22, 2024-GADGETS",
        ptitle:"get some cool gadgets in 2024"
    },
    {
        postid:3,
        pimage:postitem3,
        pdate:"FEB 22, 2024-GADGETS",
        ptitle:"get some cool gadgets in 2024"
    },
    {
        postid:4,
        pimage:postitem4,
        pdate:"FEB 22, 2024-GADGETS",
        ptitle:"get some cool gadgets in 2024"
    }
]

export const instaList=[
    {
        instaid:1,
        instaImage:instaitem1
    }, 
    {
        instaid:2,
        instaImage:instaitem2
    },
    {
        instaid:3,
        instaImage:instaitem3
    },
    {
        instaid:4,
        instaImage:instaitem4
    },
    {
        instaid:5,
        instaImage:instaitem5
    },
]