import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCard } from "@/context/cardProvider";
import { usePdf } from "@/context/PdfProvider";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const MyForm = () => {
  const {
    handleCardNameChange,
    handleCardLifeChange,
    handleCardTypeChange,
    handleCardImgChange,
    icons,
    handleAdd,
    handleRemove,
    handleAddAttacks,
    handleRemoveAttacks,
    attacksFields,
    handleAttackName,
    handleAttackEffect,
    handleAttackDamage,
    handleAddAbility,
    abilityFields,
    handleRemoveAbility,
    handleAbilityName,
    handleAbilityEffect,
  } = useCard();
  const { generatePdf } = usePdf();
  function log() {
    console.log("ciao");
  }
  return (
    <>
      <form>
        <div>
          <Label>Seleziona tipo</Label>
          <Select onValueChange={handleCardTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              {icons.map((icon) => (
                <SelectItem
                  key={icon.value}
                  value={icon.value}
                  className="flex"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      key={icon.value}
                      size="icon"
                      className="size-4"
                      src={icon.img}
                    />
                    <p>{icon.name}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Label>Inserisci nome</Label>
          <Input onKeyUp={handleCardNameChange}></Input>
          <Label>Inserisci vita</Label>
          <Input onKeyUp={handleCardLifeChange}></Input>
          <Label>Inserisci URL immagine</Label>
          <Input onKeyUp={handleCardImgChange}></Input>
          <Label>Inserisci abilità</Label>
          <div>
            <Button type="button" onClick={handleAddAbility}>
              <Plus />
            </Button>
            <Button type="button" onClick={handleRemoveAbility}>
              <Trash2 />
            </Button>
          </div>
          <div>
            {abilityFields.length == 1 ? (
              <>
                <Label>Nome abilità</Label>
                <Input onKeyUp={(e) => handleAbilityName(e)}></Input>
                <Label>Effetto abilità</Label>
                <Input onKeyUp={(e) => handleAbilityEffect(e)}></Input>
              </>
            ) : (
              <></>
            )}
          </div>
          <Label>Inserisci Attacco (max 2)</Label>
          <div className="justify-between">
            <Button type="button" onClick={handleAddAttacks}>
              <Plus />
            </Button>
            <Button type="button" onClick={handleRemoveAttacks}>
              <Trash2 />
            </Button>
          </div>
          {attacksFields.map((field, attackIndex) => (
            <div key={attackIndex} className="py-4 flex flex-col gap-2">
              {/* Lista delle icone cliccabili */}
              <Label>Nome attacco</Label>
              <Input onKeyUp={(e) => handleAttackName(e, attackIndex)} />
              <Label>Effetto attacco</Label>
              <Input onKeyUp={(e) => handleAttackEffect(e, attackIndex)} />
              <Label>Danno attacco</Label>
              <Input onKeyUp={(e) => handleAttackDamage(e, attackIndex)} />
              <ul className="flex gap-2 items-center flex-wrap">
                {icons.map((icon, iconIndex) => (
                  <li key={icon.value} className="flex">
                    <div className="flex gap-2 items-center">
                      <img
                        className="size-10 cursor-pointer"
                        src={icon.img}
                        alt={icon.name}
                        onClick={() => handleAdd(icon, field.type)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <Trash2
                className="text-destructive m-6 ml-auto cursor-pointer"
                onClick={() =>
                  handleRemove(
                    attacksFields[attackIndex].icons.length - 1,
                    attackIndex
                  )
                }
              />
              {console.log(attacksFields[attackIndex].icons.length - 1)}
            </div>
          ))}
        </div>
        <div>
          {" "}
          <Button type="button" onClick={generatePdf}></Button>
        </div>
      </form>
    </>
  );
};

export default MyForm;
