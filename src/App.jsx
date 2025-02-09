import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { useCard } from "./context/CardProvider";
import { usePdf } from "./context/PdfProvider";

function App() {
  const {
    cardName,
    cardLife,
    cardType,
    cardImg,
    attacksFields,
    abilityFields,
  } = useCard();
  const { sectionRef } = usePdf();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset ref={sectionRef}>
        <div className="flex justify-center relative ">
          <img
            src={`/assets/cards/${cardType}-card.webp`}
            className="w-[450px] "
          />
          {/* carta  */}
          <div className="absolute translate-x-22 text-start w-[450px] h-auto">
            {/* header */}
            <div className="flex pt-[5%] pl-[20%]">
              <p className=" font-bold text-xl">{cardName}</p>
              <p className="ml-auto pr-[18%] text-2xl font-bold">{cardLife}</p>
            </div>
            {/* imaggini */}
            <div className=" mx-auto w-[84.5%] h-[243px] pl-[1%] pt-[2%] ">
              <img className="w-full h-full object-cover" src={cardImg} />
            </div>
            {/* //sezione abilita e attacchi */}

            {abilityFields.length > 0 ? console.log("si") : console.log("no")}
            <div className="pt-[5%] pl-[9%] pr-[6%] h-[201px]">
              {abilityFields.length == 1 ? (
                <>
                  <div className="flex gap-2 items-baseline">
                    <p className="font-bold text-xs">Abilita:</p>
                    <p className="font-bold text-lg">{abilityFields[0].name}</p>
                  </div>
                  <div>
                    <p className="text-xs/[0.9]">{abilityFields[0].effect}</p>
                  </div>
                </>
              ) : (
                <>no</>
              )}
              {attacksFields.map((field, i) => (
                <div key={i} className="pt-[4%]">
                  <div className="flex w-full items-center">
                    <div className="flex items-center gap-2">
                      <ul className="flex items-center flex-wrap">
                        {field.icons?.map((icon, i) => (
                          <li key={i} className="flex">
                            <div className="flex gap-2 items-center">
                              <img
                                className="size-5"
                                src={icon.img}
                                alt={icon.name}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                      <p className="mx-auto font-bold text-lg">
                        {attacksFields[i].name}
                      </p>
                    </div>
                    <p className="ml-auto pl-4 font-bold text-lg">
                      {attacksFields[i].damage}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs/[0.9]">{attacksFields[i].effect}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" relative">
              <div className="absolute flex top-[43px] w-full justify-between">
                <div className="flex pl-[16%]">
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                </div>
                <div className="flex">
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                </div>
                <div className="flex pr-[18%]">
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                  <img
                    size="icon"
                    className="size-4"
                    src="public\assets\types\fire.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
