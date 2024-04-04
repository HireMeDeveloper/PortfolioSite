import { StandardGameTitle } from '../../utils/games';
import { StandardGamePlayer } from '../../utils/games';

export default function Games({ params }: {
    params: { gameId: string }
}) {
    const heading = StandardGameTitle(params.gameId);
    const game = StandardGamePlayer(params.gameId);

    return (
        <section>
            {heading}
            <section className='flex items-center justify-center mt-1'>
                {game}
            </section>
        </section>
    );
};