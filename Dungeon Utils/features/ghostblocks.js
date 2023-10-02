const BlockPoss = Java.type("net.minecraft.util.BlockPos")
// Add/remove blocks that won't get turned into ghost blocks.
const exclude = [
	"minecraft:lever",
	"minecraft:stone_button",
	"minecraft:chest",
	"minecraft:trapped_chest",
	"minecraft:skull",
	"minecraft:bedrock",
	"minecraft:obsidian"
]
const ghostBind = new KeyBind("Ghost Bind", Keyboard.KEY_NONE, "Dungeon Utils")
register("tick", () => {
	//return
	if (ghostBind.isKeyDown()) {
		const la = Player.lookingAt()
		if (la.getClass() !== Block || exclude.includes(la.type.getRegistryName())) { return }
		World.getWorld().func_175698_g(new BlockPoss(la.getX(), la.getY(), la.getZ()))
	}
})