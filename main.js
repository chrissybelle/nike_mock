//hidden after pre-compiling
// const source = document.getElementById("shoe-template").innerHTML;
// const template = Handlebars.compile(source);

const template = Handlebars.templates['womens'];

//shoe-cards womens.handlebars
Handlebars.registerHelper("colors", function(number, options) {
    console.log(number);
    if (number>1) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

const context = {
    women: [
        {
            imgsrc: "resources/images/1-1.jpeg",
            noOfColors: "3",
            shoeName: "Nike Air Huarache City Move",
            shoeDesc: "Women's Shoe",
            price: "$90",
            colorImgs: ["resources/images/1-1.jpeg"]
        },
        {
            imgsrc: "resources/images/2-1.jpeg",
            noOfColors: "6",
            shoeName: "Nike Air Max 270",
            shoeDesc: "Women's Shoe",
            price: "$150",
            colorImgs: ["resources/images/2-1.jpeg", "resources/images/2-2.jpeg", "resources/images/2-3.jpeg", "resources/images/2-4.jpeg", "resources/images/2-5.jpeg"]
        },
        {
            imgsrc: "resources/images/3-1.jpeg",
            noOfColors: "1",
            shoeName: "Nike Air Max 97",
            shoeDesc: "Women's Shoe",
            price: "$160",
            colorImgs: ["resources/images/3-1.jpeg"]
        },
        {
            imgsrc: "resources/images/4-1.jpeg",
            noOfColors: "3",
            shoeName: "Nike Air Force Max",
            shoeDesc: "Basketball Shoe",
            price: "$160",
            colorImgs: ["resources/images/4-1.jpeg"]
        },
        {
            imgsrc: "resources/images/5-1.jpeg",
            noOfColors: "4",
            shoeName: "Nike Air Precision II FlyEase",
            shoeDesc: "Women's Basketball Shoe",
            price: "$70",
            colorImgs: ["resources/images/5-1.jpeg", "resources/images/5-2.jpeg"]
        },
        {
            imgsrc: "resources/images/6-1.jpeg",
            noOfColors: "2",
            shoeName: "Kyrie 5 CNY",
            shoeDesc: "Basketball Shoe",
            price: "$130",
            colorImgs: ["resources/images/6-1.jpeg"]
        },
        {
            imgsrc: "resources/images/7-1.jpeg",
            noOfColors: "1",
            shoeName: "Nike Air More Money",
            shoeDesc: "Women's Shoe",
            price: "$143.97",
            colorImgs: ["resources/images/7-1.jpeg"]
        },
        {
            imgsrc: "resources/images/8-1.jpeg",
            noOfColors: "Customize",
            shoeName: "Nike Alpha Huarache Elite Mid Premium By Walker Buehler",
            shoeDesc: "Baseball Cleat",
            price: "$150",
            colorImgs: ["resources/images/8-1.jpeg"]
        }
    ]
};

const compiledHtml = template(context);

const test = document.getElementById("womensShoes");
test.innerHTML = compiledHtml;

//top navbar
const topNav = document.getElementById("top-nav-template").innerHTML;
const templateNav = Handlebars.compile(topNav);

const navContextData = templateNav({
        link: [
            {
                name: "NikePlus",
                text: true,
                img: "none",
                link: "www.google.com"
            },
            {
                name: "Air Jordan",
                text: false,
                img: "<img class='nav-img-link1' src='resources/images/nav-jump.png'>",
                link: "www.google.com"
            },
            {
                name: "Hurley",
                text: false,
                img: "<img class='nav-img-link2' src='resources/images/hurley.png'>",
                link: "www.google.com"
            },
            {
                name: "Converse",
                text: false,
                img: "<img class='nav-img-link3' src='resources/images/converse.png'>",
                link: "www.google.com"
            }
        ],
        rightNavLinks: [
            {
                name: "Join / Log In To NikePlus Account",
                text: true,
                img: "",
                link: ""
            },
            {
                name: "Help",
                text: true,
                img: "",
                link: ""
            },
            {
                name: "Cart",
                text: false,
                img: "<i class='material-icons md-18 cart-icon'>shopping_cart</i>",
                link: ""
            },
            {
                name: "Country",
                text: false,
                img: "<img class='country-icon' src='resources/images/usa.png'>",
                link: ""
            }
        ]
    });

document.getElementById("top-nav").innerHTML += navContextData;

//sub-nav
const subNav = document.getElementById("sub-nav-template").innerHTML;
const templateSubNav = Handlebars.compile(subNav);

const subNavContextData = templateSubNav({
    subNavLinks: [
        {
            name: "Men",
            src: ""
        },
        {
            name: "Women",
            src: ""
        },
        {
            name: "Kids",
            src: ""
        },
        {
            name: "Customize",
            src: ""
        }
    ]
});

document.getElementById("sub-nav").innerHTML += subNavContextData;





//sideNav
const sideNav = document.getElementById("side-nav-template").innerHTML;
const templateSideNav = Handlebars.compile(sideNav);

const sideNavContextData = templateSideNav({
    categories: [
        {
            category: "Shoes",
            active: true,
            subcategories: ["Lifestyle", "Running", "Basketball", "Football", "Soccer", "Training & Gym", "+ More"],
            linkHref: ""
        },
        {
            category: "Sports Bras",
            active: false,
            subcategories: ["Light Support", "Medium Support", "High Support"],
            linkHref: ""
        },
        {
            category: "Bodysuits",
            active: false,
            subcategories: [],
            linkHref: ""
        },
        {
            category: "Compression & Nike Pro",
            active: false,
            subcategories: ["Tops", "Bottoms"],
            linkHref: ""
        },
        {
            category: "Tops & T-Shirts",
            active: false,
            subcategories: ["Graphic T-Shirts", "Compression & Nike Pro", "Long Sleeve", "Short Sleeve", "Sleeveless & Tank Tops", "Polos", "Jerseys", "Button-downs & Flannels"],
            linkHref: ""
        },
        {
            category: "Hoodies & Pullovers",
            active: false,
            subcategories: ["Hoodies", "Pullovers", "Sweaters"],
            linkHref: ""
        },
        {
            category: "Jackets & Vests",
            active: false,
            subcategories: ["Bombers","Other", "Parkas"],
            linkHref: ""
        },
        {
            category: "Pants & Tights",
            active: false,
            subcategories: ["Tights & Leggings","Base Layers & Nike Pro", "Joggers & Sweatpants", "Pants"],
            linkHref: ""
        },
        {
            category: "Tracksuits",
            active: false,
            subcategories: ["Tracksuit Tops", "Tracksuit Bottoms","Tracksuit Sets"],
            linkHref: ""
        },
        {
            category: "Shorts",
            active: false,
            subcategories: [],
            linkHref: ""
        },
        {
            category: "Jumpsuits & Rompers",
            active: false,
            subcategories: [],
            linkHref: ""
        },
        {
            category: "Skirts & Dresses",
            active: false,
            subcategories: [],
            linkHref: ""
        },
        {
            category: "Surf & Swimwear",
            active: false,
            subcategories: ["Board Shorts", "Compression", "Rashguards & Surf Shirts"],
            linkHref: ""
        },
        {
            category: "Socks",
            active: false,
            subcategories: [],
            linkHref: ""
        },
        {
            category: "Accessories & Equipment",
            active: false,
            subcategories: ["Bags & Backpacks", "Balls", "Belts"],
            linkHref: ""
        }
    ]
});

document.getElementById("left-nav").innerHTML += sideNavContextData;

