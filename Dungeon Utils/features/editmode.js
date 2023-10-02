var editmode = new Boolean(false);
var editblock = ""

const BlockPoss = Java.type("net.minecraft.util.BlockPos")
//const BlockState = Java.type("net.minecraft.block.state.IBlockState")
const editbind = new KeyBind("Editing", Keyboard.KEY_NONE, "Dungeon Utils")

// Add/remove blocks that won't get turned into ghost blocks.
const exclude = [
    "minecraft:lever",
    "minecraft:stone_button",
    "minecraft:chest",
    "minecraft:trapped_chest",
    "minecraft:skull"
]
register("command", (...args) => {
    const  edit_type = args[0]

    if (edit_type === "a" || edit_type === "air") {
        ChatLib.chat('&4[&cU. A.&4] &aEdit Mode set to &bAir&a!')
        editmode = true;
        editblock = "minecraft:air"

    }
    else if (edit_type === "g" || edit_type === "glass") {
        ChatLib.chat('&4[&cU. A.&4] &aEdit Mode set to &bGlass&a!')
        editmode = true;
        editblock = "minecraft:white_stained_glass"
    }
    else if (edit_type === "e" || edit_type === "exit" || edit_type === "d" || edit_type === "disable") {
        ChatLib.chat('&4[&cU. A.&4] &aEdit Mode &c&lDisabled!')
        editmode = false;
    }

    else {
        ChatLib.chat('&4[&cU. A.&4] &aNot a valid block!')
    }
  }).setName("editmode").setAliases("em");

  register("tick", () => {
      //return
      if (editmode === true && editbind.isPressed()) {
          const la = Player.lookingAt()
          if (la.getClass() !== Block || exclude.includes(la.type.getRegistryName())) { return }
          chatLib.chat("Blocks.DIAMOND_BLOCK.getDefaultState()")
          //World.getWorld().func_175698_g(new BlockPoss(la.getX(), la.getY(), la.getZ()), Blocks.DIAMOND_BLOCK.getDefaultState())
        //setblocktoair:func_175698_g
        //setblockstate:
      }
  })