angular.module("listaTelefonica").filter("name", function () {
    return function (input) {
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
            var aux = nome.toLowerCase();
            if(aux.length <= 3){
                if (/(da|de|do|das|dos)/.test(aux)) {
                    return aux;
                };
            };
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatada.join(" ");
    };
});