onEvent("recipes", (event) => {
	event.shaped("18x magistuarmory:woolen_fabric", ["   ", "LLL", "LLL"], {
		L: "minecraft:white_wool",
	});

	// Fix farmersdelight:knives recipes
	event.shaped("1x farmersdelight:flint_knife", ["   ", "SM ", "   "], {
		M: "minecraft:flint",
		S: "minecraft:stick",
	});
	event.shaped("1x farmersdelight:iron_knife", ["   ", "SM ", "   "], {
		M: "minecraft:iron_ingot",
		S: "minecraft:stick",
	});
	event.shaped("1x farmersdelight:golden_knife", ["   ", "SM ", "   "], {
		M: "minecraft:gold_ingot",
		S: "minecraft:stick",
	});
	event.shaped("1x farmersdelight:diamond_knife", ["   ", "SM ", "   "], {
		M: "minecraft:diamond",
		S: "minecraft:stick",
	});

	// Fix chisel:chisels recipes
	event.shaped("1x chisel:iron_chisel", ["   ", " M ", " S "], {
		M: "minecraft:iron_ingot",
		S: "minecraft:stick",
	});
	event.shaped("1x chisel:diamond_chisel", ["   ", " M ", " S "], {
		M: "minecraft:diamond",
		S: "minecraft:stick",
	});

});