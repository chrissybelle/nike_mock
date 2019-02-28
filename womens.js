(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['womens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <div class=\"shoes-card\">\n                        <div class=\"img-div\">\n                            <img class=\"shoe-img\" src="
    + alias2(alias1((depth0 != null ? depth0.imgsrc : depth0), depth0))
    + ">\n                        </div>\n                        <div class=\"color-div\">\n                            <p class=\"text-colors\">"
    + alias2(alias1((depth0 != null ? depth0.noOfColors : depth0), depth0))
    + "\n"
    + ((stack1 = (helpers.colors || (depth0 && depth0.colors) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noOfColors : depth0),{"name":"colors","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                            </p>\n                        </div>\n                        <div class=\"product-info\">\n                            <p class=\"text-name\">"
    + alias2(alias1((depth0 != null ? depth0.shoeName : depth0), depth0))
    + "</p>\n                            <p class=\"text-desc\">"
    + alias2(alias1((depth0 != null ? depth0.shoeDesc : depth0), depth0))
    + "</p>\n                            <p class=\"text-price\">"
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "</p>\n                        </div>\n                    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                                    Colors\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                                    Color\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"womensShoes\">\n            <h1 class=\"division-header\">WOMEN'S SNEAKERS & SHOES <span class=\"result-count\">("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.women : depth0)) != null ? stack1.length : stack1), depth0))
    + ")</span></h1>\n            <h6 class=\"division-desc\">From spin to yoga to everyday wear, shop women's sneakers featuring signature Nike styles\n                and footwear technologies. Whether it be the iconic Air Force 1 or latest VaporMax, find the pairs that align\n                with your unique style.</h6>\n        \n            <div class=\"results\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.women : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n        </div>";
},"useData":true});
})();