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
            imgsrc: "resources/images/6.jpeg",
            noOfColors: "3",
            shoeName: "Nike Air Huarache City Move",
            shoeDesc: "Women's Shoe",
            price: "$90"
        },
        {
            imgsrc: "resources/images/1.jpeg",
            noOfColors: "6",
            shoeName: "Nike Air Max 270",
            shoeDesc: "Women's Shoe",
            price: "$150"
        },
        {
            imgsrc: "resources/images/2.jpeg",
            noOfColors: "1",
            shoeName: "Nike Air Max 97",
            shoeDesc: "Women's Shoe",
            price: "$160"
        },
        {
            imgsrc: "resources/images/5.jpeg",
            noOfColors: "3",
            shoeName: "Nike Air Force Max",
            shoeDesc: "Basketball Shoe",
            price: "$160"
        },
        {
            imgsrc: "resources/images/7.jpeg",
            noOfColors: "4",
            shoeName: "Nike Air Precision II FlyEase",
            shoeDesc: "Women's Basketball Shoe",
            price: "$70"
        },
        {
            imgsrc: "resources/images/8.jpeg",
            noOfColors: "2",
            shoeName: "Kyrie 5 CNY",
            shoeDesc: "Basketball Shoe",
            price: "$130"
        },
        {
            imgsrc: "resources/images/9.jpeg",
            noOfColors: "1",
            shoeName: "Nike Air More Money",
            shoeDesc: "Women's Shoe",
            price: "$143.97"
        },
        {
            imgsrc: "resources/images/10.jpeg",
            noOfColors: "Customize",
            shoeName: "Nike Alpha Huarache Elite Mid Premium By Walker Buehler",
            shoeDesc: "Baseball Cleat",
            price: "$150"
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
        ]

    });

document.getElementById("top-nav").innerHTML += navContextData;