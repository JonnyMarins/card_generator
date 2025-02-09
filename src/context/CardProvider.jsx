import { createContext, useContext, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardType, setCardType] = useState("fire");
  const [cardName, setCardName] = useState("Nome carta");
  const [cardLife, setCardLife] = useState(200);
  const [cardImg, setCardImg] = useState("https://placehold.co/400");
  const [attName, setAttName] = useState("Attacco");

  function handleCardTypeChange(value) {
    setCardType(value);
  }
  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }
  function handleCardLifeChange(e) {
    setCardLife(e.target.value);
  }
  function handleCardImgChange(e) {
    setCardImg(e.target.value);
  }

  const icons = [
    { name: "Fuoco", value: "fire", img: "/assets/types/fire.png" },
    { name: "Acqua", value: "water", img: "/assets/types/water.png" },
    { name: "Erba", value: "grass", img: "/assets/types/grass.png" },
    { name: "Elettro", value: "lightning", img: "/assets/types/lightning.png" },
    { name: "Lotta", value: "fighting", img: "/assets/types/fighting.png" },
    { name: "Psico", value: "psychic", img: "/assets/types/psychic.png" },
    { name: "Buio", value: "dark", img: "/assets/types/dark.png" },
  ];
  const { control } = useForm({
    defaultValues: {
      ability: {},
      attacks: {},
    },
  });

  const {
    fields: attacksFields,
    append: attacksAppend,
    remove: attacksRemove,
    update: attacksUpdate,
  } = useFieldArray({
    control,
    name: "attacks",
  });
  const {
    fields: abilityFields,
    append: abilityAppend,
    remove: abilityRemove,
    update: abilityUpdate,
  } = useFieldArray({
    control,
    name: "ability",
  });

  function handleAddAttacks() {
    if (attacksFields.length < 2) {
      const nextType = attacksFields.some((a) => a.type === "att1")
        ? "att2"
        : "att1";
      attacksAppend({
        type: nextType,
        icons: [],
        name: ["Attacco"],
        damage: [200],
        effect: ["efetto attacco"],
      });
    }
  }

  function handleAddAbility() {
    if (abilityFields.length === 0) {
      abilityAppend({ name: ["Abilità"], effect: ["effetto abilità"] });
    }
  }
  function handleRemoveAbility() {
    abilityRemove();
  }
  function handleAbilityName(e) {
    const newName = e.target.value;
    abilityUpdate(0, {
      ...abilityFields[0],
      name: newName,
    });
  }
  function handleAbilityEffect(e) {
    const newEffect = e.target.value;
    abilityUpdate(0, {
      ...abilityFields[0],
      effect: newEffect,
    });
  }

  function handleRemoveAttacks() {
    const lastIndex = attacksFields.length - 1;
    if (lastIndex >= 0) {
      attacksRemove(lastIndex);
    }
  }

  function handleAdd(icon, type) {
    const index = attacksFields.findIndex((attack) => attack.type === type);

    if (index !== -1) {
      const updatedAttack = {
        ...attacksFields[index],
        icons: [...(attacksFields[index].icons || []), icon],
      };

      attacksUpdate(index, updatedAttack);
    }
  }
  function handleRemove(iconIndex, attackIndex) {
    const updatedIcons = attacksFields[attackIndex].icons.filter(
      (_, i) => i !== iconIndex
    );
    const updatedAttack = {
      ...attacksFields[attackIndex],
      icons: updatedIcons,
    };

    attacksUpdate(attackIndex, updatedAttack);
  }
  function handleAttackName(e, attackIndex) {
    const newName = e.target.value;
    const updatedAttack = {
      ...attacksFields[attackIndex],
      name: newName,
    };

    attacksUpdate(attackIndex, updatedAttack);
  }
  function handleAttackDamage(e, attackIndex) {
    const newDamage = e.target.value;
    const updatedAttack = {
      ...attacksFields[attackIndex],
      damage: newDamage,
    };

    attacksUpdate(attackIndex, updatedAttack);
  }
  function handleAttackEffect(e, attackIndex) {
    const newEffect = e.target.value;
    const updatedAttack = {
      ...attacksFields[attackIndex],
      effect: newEffect,
    };

    attacksUpdate(attackIndex, updatedAttack);
  }

  return (
    <CardContext.Provider
      value={{
        cardName,
        setCardName,
        handleCardTypeChange,
        handleCardNameChange,
        handleCardLifeChange,
        cardLife,
        cardType,
        handleCardImgChange,
        cardImg,
        icons,
        handleAdd,
        handleAddAttacks,
        handleRemoveAttacks,
        attacksFields,
        handleRemove,
        handleAttackName,
        attName,
        abilityFields,
        handleAttackEffect,
        handleAttackDamage,
        handleAddAbility,
        handleRemoveAbility,
        handleAbilityName,
        handleAbilityEffect,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;

export function useCard() {
  return useContext(CardContext);
}
