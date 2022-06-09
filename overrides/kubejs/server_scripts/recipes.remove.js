onEvent("recipes", (event) => {
	event.remove({id: 'magistuarmory:woolen_fabric_from_wool'});

	// Remove farmersdelight:knives base recipes
	event.remove({id: 'farmersdelight:flint_knife'});
	event.remove({id: 'farmersdelight:iron_knife'});
	event.remove({id: 'farmersdelight:golden_knife'});
	event.remove({id: 'farmersdelight:diamond_knife'});

	// Remove chisel:chisels base recipes
	event.remove({id: 'chisel:iron_chisel'});
	event.remove({id: 'chisel:diamond_chisel'});
});