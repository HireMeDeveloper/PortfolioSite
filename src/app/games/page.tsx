import { StandardHeading } from '../utils/headings';
import { StandardGameCard } from '../utils/games';

export default function Games() {
    const gamesHeading = StandardHeading("Game Jams");
    const techDemoHeading = StandardHeading("Tech Demos");
    const otherHeading = StandardHeading("Other");

    const cratesCard = StandardGameCard(
        "/crates-n-gates-thumbnail.png",
        "Creates N' Gates",
        "You are bleeding out and need medical supplies to survive.  Destroy crates and gates to see how far you can make it.",
        "/games/crates-n-gates"
    );
    const dbmCard = StandardGameCard(
        "/dbm_image.png",
        "Dead By Morning",
        "An Asymetrical matchmaking simulator using Photon Fusion with Unity.",
        "/games/dead-by-morning"
    );
    const arcadeZombiesCard = StandardGameCard(
        "/arcade-zombies.png",
        "Arcade Zombies",
        "A simple example of Multiplayer wave based zombie survival.",
        "/games/arcade-zombies"
    );
    const cardsNBlocksCard = StandardGameCard(
        "/cards-n-blocks.png",
        "Cards N' Blocks",
        "Use packs of cards to destroy all of the enemies and collect all of the keys in each puzzle.",
        "/games/cards-n-blocks"
    );
    const gamblingCard = StandardGameCard(
        "/gambling-at-work.png",
        "Gambling At Work",
        "Lets make work fun, with a bit of gambling and... WAIT DID YOU HEAR THAT?",
        "/games/gambling-at-work"
    );
    const doorCard = StandardGameCard(
        "/to-go-through.png",
        "To Go Through",
        "Use the door, and the flashlight to defend yourself from various monsters hunting you down.",
        "/games/to-go-through"
    );
    const tilePuzzleCard = StandardGameCard(
        "/tile-puzzle.png",
        "Tile Puzzle",
        "Push down all of the tiles to complete all of these levels as fast as you can.",
        "/games/tile-puzzle"
    );

    return (
        <section className='flex justify-center mt-10'>
            <br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:ml-20 md:mr-20 lg:ml-30 lg:mr-30 max-w-7xl'>
                <div className=''>
                    {gamblingCard}
                </div>
                <div className=''>
                    {cratesCard}
                </div>
                <div className=''>
                    {cardsNBlocksCard}
                </div>
                <div className=''>
                    {dbmCard}
                </div>
                <div className=''>
                    {arcadeZombiesCard}
                </div>
                <div className=''>
                    {doorCard}
                </div>
                <div className=''>
                    {tilePuzzleCard}
                </div>
            </div>
        </section>
    );
};