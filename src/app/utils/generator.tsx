import { ReactElement, ReactNode, useEffect, useState } from "react";

const GeneratorData = [
    ["action", "roleplay", "rpg"],
    ["magic", "swords", "maces"],
    ["magic", "swords", "maces"]
];

export const Generator = () => {
    const [gens, setGens] = useState([] as ReactElement[]);

    const shuffle = () => {
        setGens(GeneratorData.map((x, i) => <>
            <GeneratorSpinner key={"gen" + i} options={x} />
            <br />
        </>))
    }

    useEffect(() => {
        shuffle();
    }, []);

    return <div>
        {gens}
        <button onClick={() => shuffle()}>Shuffle</button>
    </div>
}

type GeneratorSpinnerParams = {}

const GeneratorSpinner = ({ options }: { options: string[] }) => {
    return <>
        {options[Math.floor(Math.random() * options.length)]}
    </>
}