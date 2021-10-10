

function resumen()
{
    var cat = document.getElementById("Categorías").value;

    var cant = document.getElementById("Cantidad").value;

    var descuento = [0.8,0.15,0.50]
    
    var precioticket = 200
    
    
    if(cat == 1) 
    {
        var resultado = (precioticket*cant-((precioticket*cant)*descuento[0]));
    }

    else if (cat == 2)
    {
        var resultado = (precioticket*cant-((precioticket*cant)*descuento[2]));
    } 
    else
    {
        var resultado = (precioticket*cant-((precioticket*cant)*descuento[1]));
    } 

    document.getElementById("total").innerHTML = resultado;
    
}
 

