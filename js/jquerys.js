$.noConflict();
jQuery(document).on("change", ".price-sorting", function() {
    var sortingMethod = jQuery(this).val();
    if(sortingMethod == 'l2h')
    {
        sortProductsPriceAscending();
    }
    else if(sortingMethod == 'h2l')
    {
        sortProductsPriceDescending();
    }
});
function sortProductsPriceAscending()
{
    var products = jQuery('.product');
    products.sort(function(a, b){ return jQuery(a).data("price")-jQuery(b).data("price")});
    jQuery(".products-grid").html(products);
}
function sortProductsPriceDescending()
{
    var products = jQuery('.product');
    products.sort(function(a, b){ return jQuery(b).data("price") - jQuery(a).data("price")});
    jQuery(".products-grid").html(products);
}


//$.noConflict();
jQuery(document).on("change", ".price-sortings", function() {
    var sortingMethods = jQuery(this).val();
    if(sortingMethods == 'lth')
    {
        sortProductsPriceAscendings();
    }
    else if(sortingMethods == 'htl')
    {
        sortProductsPriceDescendings();
    }
});
function sortProductsPriceAscendings()
{
    var products = jQuery('.product2');
    products.sort(function(a, b){ return jQuery(a).data("prices")-jQuery(b).data("prices")});
    jQuery(".products-grid2").html(products);
}
function sortProductsPriceDescendings()
{
    var products = jQuery('.product2');
    products.sort(function(a, b){ return jQuery(b).data("prices") - jQuery(a).data("prices")});
    jQuery(".products-grid2").html(products);
}


jQuery(document).on("change", ".price-sortinge", function() {
    var sortingMethode = jQuery(this).val();
    if(sortingMethode == 'leh')
    {
        sortProductsPriceAscendinge();
    }
    else if(sortingMethode == 'hel')
    {
        sortProductsPriceDescendinge();
    }
});
function sortProductsPriceAscendinge()
{
    var productse = jQuery('.producte');
    productse.sort(function(a, b){ return jQuery(a).data("pricee")-jQuery(b).data("pricee")});
    jQuery(".products-gride").html(productse);
}
function sortProductsPriceDescendinge()
{
    var productse = jQuery('.producte');
    productse.sort(function(a, b){ return jQuery(b).data("pricee") - jQuery(a).data("pricee")});
    jQuery(".products-gride").html(productse);
}

jQuery(document).on("change", ".price-sortinga", function() {
    var sortingMethoda = jQuery(this).val();
    if(sortingMethoda == 'lah')
    {
        sortProductsPriceAscendinga();
    }
    else if(sortingMethoda == 'hal')
    {
        sortProductsPriceDescendinga();
    }
});
function sortProductsPriceAscendinga()
{
    var productsa = jQuery('.producta');
    productsa.sort(function(a, b){ return jQuery(a).data("pricea")-jQuery(b).data("pricea")});
    jQuery(".products-grida").html(productsa);
}
function sortProductsPriceDescendinga()
{
    var productsa = jQuery('.producta');
    productsa.sort(function(a, b){ return jQuery(b).data("pricea") - jQuery(a).data("pricea")});
    jQuery(".products-grida").html(productsa);
}


jQuery(document).on("change", ".price-sortingf", function() {
    var sortingMethodf = jQuery(this).val();
    if(sortingMethodf == 'lfh')
    {
        sortProductsPriceAscendingf();
    }
    else if(sortingMethodf == 'hfl')
    {
        sortProductsPriceDescendingf();
    }
});
function sortProductsPriceAscendingf()
{
    var productsf = jQuery('.productf');
    productsf.sort(function(a, b){ return jQuery(a).data("pricef")-jQuery(b).data("pricef")});
    jQuery(".products-gridf").html(productsf);
}
function sortProductsPriceDescendingf()
{
    var productsf = jQuery('.productf');
    productsf.sort(function(a, b){ return jQuery(b).data("pricef") - jQuery(a).data("pricef")});
    jQuery(".products-gridf").html(productsf);
}

window.onload=function(){
    var h = window.innerHeight;
    document.getElementById("section_categories").style.height= (h) + "px";
    document.getElementById("section_categories").style.margin= "10px auto";
}

