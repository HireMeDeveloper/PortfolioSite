import Image from "next/image";
import Link from "next/link";

export function StandardGamePlayer(gameName: string) {
    switch (gameName) {
        case "crates-n-gates":
            return (
                <iframe className="rounded-xl" src="https://itch.io/embed-upload/2169060?color=333333" width="1280" height="660" allowFullScreen>
                    <a href="https://sandbagstudios.itch.io/crates-n-gates">
                        Play Crates N' Gates on itch.io
                    </a>
                </iframe>
            );
        case "tile-puzzle":
            return (<>
                <iframe className="rounded-lg" src="https://itch.io/embed-upload/3037973?color=333333" width="1280" height="660" allowFullScreen>
                    <a href="https://sandbagstudios.itch.io/tile-puzzle-beta">
                        Play Tile Puzzle Beta on itch.io
                    </a>
                </iframe>
            </>);
        case "cards-n-blocks":
            return (<>
                <iframe className="rounded-lg" src="https://itch.io/embed-upload/4060691?color=333333" width="1280" height="660" allowFullScreen>
                    <a href="https://sandbagstudios.itch.io/chessblocks">
                        Play Cards N Blocks on itch.io
                    </a>
                </iframe>
            </>);
        case "gambling-at-work":
            return (<>
                <iframe className="rounded-lg" src="https://itch.io/embed-upload/4105426?color=333333" width="1280" height="660" allowFullScreen>
                    <a href="https://sandbagstudios.itch.io/gambling-at-work">
                        Play Gambling At Work on itch.io
                    </a>
                </iframe>
            </>);
        case "arcade-zombies":
            return (<>
                <iframe className="rounded-lg" src="https://itch.io/embed-upload/6109560?color=333333" width="1280" height="660" allowFullScreen>
                    <a href="https://sandbagstudios.itch.io/arcade-zombies-alpha">
                        Play Arcade Zombies on itch.io
                    </a>
                </iframe>
            </>);
        case "to-go-through":
            return (<>
                <iframe className="rounded-xl" src="https://itch.io/embed-upload/6817721?color=333333" width="1280" height="660" allowFullScreen>
                    <a href="https://sandbagstudios.itch.io/doortodoor-prealpha">
                        Play To Go Through on itch.io
                    </a>
                </iframe>
            </>);
        case "dead-by-morning":
            return (<>
                <iframe className="rounded-xl" src="https://itch.io/embed-upload/7780028?color=333333" width="1280" height="660">
                    <a href="https://sandbagstudios.itch.io/dead-by-morning">
                        Play Dead By Morning on itch.io
                    </a>
                </iframe>
            </>);
    }
};

export function StandardGameCard(gameName: string, title: string, description: string, href: string) {
    return (<>
        <Link href={href}>
            <div
                className="block max-w-[18rem] rounded-lg bg-secondary-light text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white shadow-lg shadow-black hover:shadow-primary-light hover:-translate-y-1">
                <div className="relative overflow-hidden bg-cover bg-no-repeat aspect-video">
                    <img
                        className="rounded-t-lg scale-100 object-fill object-center"
                        src={gameName}
                        alt=""
                    />
                </div>
                <div className="p-6">
                    <h1 className="font-extrabold text-lg text-primary-light">
                        {title}
                    </h1>
                    <p className="aspect-video text-white">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    </>);
};

export function StandardGameTitle(gameName: string) {
    var title = ""
    switch (gameName) {
        case "crates-n-gates":
            title = "Crates N' Gates";
            break;
        case "tile-puzzle":
            title = "Tile Puzzle"
            break;
        case "cards-n-blocks":
            title = "Cards N' Blocks"
            break;
        case "gambling-at-work":
            title = "Gambling At Work";
            break;
        case "arcade-zombies":
            title = "Arcade Zombies";
            break;
        case "to-go-through":
            title = "Arcade Zombies";
            break;
        case "dead-by-morning":
            title = "Dead By Morning";
            break;
    }

    return (
        <h1 className="font-bold text-4xl mt-3 text-center text-primary-light underline mb-5">
            {title}
        </h1>
    );
}