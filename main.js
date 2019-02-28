//hidden after pre-compiling
// const source = document.getElementById("shoe-template").innerHTML;
// const template = Handlebars.compile(source);

const template = Handlebars.templates['womens'];

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
            imgsrc: "6.jpeg",
            noOfColors: "3",
            shoeName: "Nike Air Huarache City Move",
            shoeDesc: "Women's Shoe",
            price: "$90"
        },
        {
            imgsrc: "1.jpeg",
            noOfColors: "6",
            shoeName: "Nike Air Max 270",
            shoeDesc: "Women's Shoe",
            price: "$150"
        },
        {
            imgsrc: "2.jpeg",
            noOfColors: "1",
            shoeName: "Nike Air Max 97",
            shoeDesc: "Women's Shoe",
            price: "$160"
        }
    ]
};

const compiledHtml = template(context);

const test = document.getElementById("womensShoes");
test.innerHTML = compiledHtml;