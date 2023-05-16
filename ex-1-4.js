// Övning 1.1-1.4

Modellering

let product = {
	id,
	name = "Exempel", //String
	artikelNummer = 1234, //Number
	price,
	sku,   // SKU = stock keeping unit (hur många i lager)
	category: {
		årstid: 'vår',  // String
		årstid: {   // alternativ med booleans i stället
			vår: true,
			sommar: false
		},
		damHerrBarn: {
			dam: true,
			herr: false
		}
	}
	tags = ["vår","löpning","dam"], // Array(String) eller [String]
	similarProducts,  // array med produkt-idn
	shortDescription,
	longDescription,
	specification: {  // produktfakta
		size,  // för kläder
		color,  // kläder
		ceMärkning,
		vikt
	},
	createdDate,  // inlagd i systemet
	tillverkningsdatum,
	images,   // [String] t.ex.
	rating,  // betyg, antal stjärnor
	interest,  // hur många tittar på produkten
	exportedFrom
}