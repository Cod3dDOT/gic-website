//#region ATK

export const ATK_base = (atk_character: number, atk_weapon: number): number => {
	return atk_character + atk_weapon;
};

export const ATK = (
	atk_base: number,
	atk_percent_b: number,
	atk_flat_b: number
): number => {
	return atk_base * (1 + atk_percent_b) + atk_flat_b;
};

//#endregion

//#region TALENT

export const TALENT_mult = (
	talent_base_mult: number,
	talent_stack_mult: number,
	stacks: number
) => {
	return talent_base_mult + talent_stack_mult * stacks;
};

//#endregion

//#region DMG

export const DMG_increase = (increase: number) => {
	return increase;
};

export const DMG_bonus = () => {
	return 0;
};

export const DMG_flat = () => {
	return 0;
};

export const DMG_base = (hp: number, atk: number, talent_mult: number) => {
	return (atk * talent_mult + DMG_flat()) * (1 + DMG_bonus());
};

export const DMG_crit = (dmg_base: number, ch_crit_damage: number) => {
	return dmg_base * (1 + ch_crit_damage);
};

export const DMG_reduction = (def_defender: number, def_attacker: number) => {
	return def_defender / (def_defender + def_attacker);
};

export const DMG_mult = (dmg_reduction: number) => {
	return 1 - dmg_reduction;
};

// export const DMG_total = (dmg_base: number, ) => {
//     return dmg_base * MultDEF * MultRES * MultDMG Reduction,
// }

//#endregion

//#region DEF

export const DEF_base = (def: number) => {
	return def;
};

export const DEF_enemy = (enemy_lvl: number) => {
	return 5 * enemy_lvl + 500;
};

export const DEF_object = (def_reduction: number, obj_lvl: number) => {
	return (1 - def_reduction) * DEF_enemy(obj_lvl);
};

export const DEF = (def: number, def_percent: number, def_flat: number) => {
	return DEF_base(def) * (1 + def_percent) + def_flat;
};

//#endregion
