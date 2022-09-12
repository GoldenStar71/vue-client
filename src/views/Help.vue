<template>
    <div class="flex-col flex gap-2 w-full h-full  p-2 pt-4">
        <h3 class="help-title uppercase">OVERVIEW OF THE GAME</h3>
        <p class="help-content mb-2">The game of roulette is played by throwing a small ball onto a rotating wheel with
            thirty seven numbered sectors (from 0 to 36). The ball stops on one of these sectors. The aim of roulette is
            to predict the right sector where the ball will stop. If you predict the right number, the bet earns you a
            win. The total of the win depends on the type of bet</p>
        <h3 class="help-title uppercase">INSTRUCTIONS</h3>
        <p class="help-content mb-2">Choose the quantity you want to wager for a spin by tapping/clicking with the left
            mouse button on a token, then select the betting fields on the gaming table.<br />
            Tap/Click “Clear Last” to cancel the last token placed.<br />
            Tap/Click “Clear All” to cancel all your bets on the table.<br />
            The total wager appears in the “Bet” window.<br />
            The “Amount” window indicates current availability.<br />
            The “Win” window indicates the sum won in that game.<br />
            With the “Rebet” button, you can repeat the bets made during the previous game.<br />
            The "Racetracks" button opens the racetrack table.<br />
            The "Other players' bets" button shows the bets of the other players at the table.<br />
            The "Tables limits" display shows the limits of the table.<br />
            The "History" button shows the list of previous bets. All times are in Malta timezone.<br />
            The "Preferences" button opens the settings for audio.<br />
            The "?" button opens the game rules.<br />
            The "Full screen" button shows the game in full screen.<br />
            The "Statistics" button shows the statistics of the game.<br />
            If you want to chat with the dealer/players click/tap the "Chat" button and write your message.<br />
            If you place a bet below the limit of the minimum wager for the table, a popup message is displayed and the
            bet is refused.<br />
            If you place a bet above the limit of the maximum wager, a suggestion appears reminding you of the maximum
            betting limit and you will not be able to place the bet. </p>
        <h3 class="help-title uppercase">EXPLANATION OF TYPES OF BETS</h3>
        <p class="help-content mb-2">You can place various types of bet on the roulette table. Each type of bet covers a
            certain interval of numbers, each of which determines a certain win. The short lines of three numbers are
            known as lines, while the longer lines of twelve numbers are known as columns.<br />
            The first five types of wager are all on the numbered space or the lines within it and are known as inside
            bets, while the last three types involve special areas outside of the table and are known as outside
            bets.<br />
            When you move the mouse on the game table, the numbers corresponding to a specific bet become opaque.
        </p>
        <h3 class="help-sub-title uppercase">INSIDE BETS</h3>
        <p class="help-content mb-3">
            <b>Straight up:</b> place the tokens directly on a single number (including zero).<br />
            <b>Split bet:</b> place the tokens on the line between any two numbers.<br />
            <b>Street bet:</b> place the tokens at the end of any line of numbers. A street bet includes three numbers.
            The player also can make a street bet on 0, 1, 2 or 0, 2, 3 by placing a chip on the intersecting corner of
            the 3 numbers.<br />
            <b>Corner:</b> place the tokens on the corner formed by four numbers. All four numbers are covered. <br />
            <b>Line bet:</b> place the tokens at the end of two lines where they intersect. A line bet includes all the
            numbers on both lines for a total of six numbers.<br />
        </p>
        <h3 class="help-sub-title uppercase">OUTSID BETS</h3>
        <p class="help-content mb-3">
            <b>Column:</b> placing a token on one of the boxes marked with “2 to 1” at the end of the column includes
            all the numbers in that column for a total of 12 numbers. The zero is not included in any of the columns. In
            these sectors, it is possible to make bets at least 5 times the minimum bet and up to table limit. <br />
            <b>Dozen:</b> placing a token on one of the three boxes indicating "1st 12", "2nd 12", "3rd 12" covers those
            12 numbers in the sequence of numbers from 1 to 36. In these sectors, it is possible to make bets at least 5
            times the minimum bet and up to table limit. <br />
            <b>Red/Black, Even/Odd, 1 - 18/19 - 36:</b> a token placed in one of these six boxes covers 18 numbers on
            the table as described by the box itself. The zero is not included in any of these boxes. Each box covers 18
            numbers. In these sectors, it is possible to make bets at least 5 times the minimum bet and up to table
            limit. <br />

        </p>
        <h3 class="help-sub-title uppercase">SPECIAL BETS</h3>
        <p class="help-content mb-3">
            Each bet covers a different group of numbers. The bets are available by means of an oval placed above the
            table (Racetrack). The wins vary according to the bets.
        </p>
        <p class="help-content mb-3">
            <b>Serie 5/8:</b> 1 chip on these splits 5/8, 10/11, 13/16, 23/24, 27/30, 33/36.<br />
            Orphelins: 1 chip on 1 straight up and 1 on each of the following splits: 6/9, 14/17, 17/20 and 31/34.<br />
            <b>Serie 0/2/3:</b> 2 chips are placed on the 0,2,3 trio, 1 on the 4/7 split, 1 on 12/15, 1 on 18/21, 1 on
            19/22, 2
            on 25/26/28/29 corner, and 1 on 32/35.<br />
            <b>Zero:</b> 1 chip on 0/3 split, 1 on 12/15 split, 1 on 26 straight up and 1 on 32/35 split.
            Tapping/Clicking on number you will place bet also to the 2 numbers on left and right on the wheel of the
            choosed number.

        </p>
        <h3 class="help-title uppercase">WINS</h3>
        <p class="help-content mb-3">
            Straight up: 36x<br />
            Split bet: 18x<br />
            Street bet: 12x<br />
            Corner: 9x<br />
            Line bet: 6x<br />
            Column: 3x<br />
            Dozen: 3x<br />
            Red/Black, Even/Odd, 1 - 18/19 - 36: 2x<br />
        </p>
        <h3 class="help-title uppercase">GAME ERROR</h3>
        <p class="help-content mb-3">
            In case of game error the bet will be automatically refunded at the start of the next game.
            <br />
            In case of game disconnection (lost internet connection, device crash) the game will continue normally if
            the problem happend after "no more bets", the bets will be refoundend if happen during "bets time"
        </p>
        <h3 class="help-title uppercase">DISCLAIMER</h3>
        <p class="help-content mb-3">
            There may be graphics differences in the game between different devices/browsers.<br />
            This is a live game, so you may not have the latest information available when betting on live events. Live
            games may be delayed so others may have more up-to-date information.
            <br />
            <br />
            The RTP is :<br/>
            97.3% (without Progressive Jackpots)
        </p>
    </div>
</template>
<style scoped>
.help-title {
    color: #d2ab1e;
    font-weight: 600;
    font-size: large;

}

.help-sub-title {
    color: #d2ab1e;
    font-weight: 600;
    font-size: normal;
    margin-left: 2px;
}

.help-content {
    margin-left: 6px;
    font-size: normal;
}
</style>