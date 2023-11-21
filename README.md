# tabletennis_ui
tabletennis scoring ui




# images and icons:

> 1. Bat and ball icon

filename: reshot-icon-table-tennis-Z4NQGYCJSB.svg
link: https://www.reshot.com/free-svg-icons/item/table-tennis-Z4NQGYCJSB/
SVG code: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path d="M64.847 102H48.153V81.869C36.229 78.229 28 67.164 28 54.564 28 38.814 40.785 26 56.5 26S85 38.814 85 54.564c0 12.6-8.229 23.664-20.153 27.305V102zm-13.694-3h10.693V79.577l1.121-.293a25.368 25.368 0 0 0 12.656-7.808l-38.243.004a25.375 25.375 0 0 0 12.653 7.804l1.121.293V99zM91 84c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z"/></svg>


> 2. bat and ball image

filename: ping-pong-307629_1280.png
link: https://pixabay.com/vectors/ping-pong-tabletennis-racket-ball-307629/
Credit: Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=307629">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=307629">Pixabay</a>


> 3. bat and ball image

filename: table-tennis-157932_1280.png
link: https://pixabay.com/vectors/table-tennis-ping-pong-sports-ball-157932/
credit: Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=157932">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=157932">Pixabay</a>


> 4. blue table

filename: ping-pong-150169_1920.png
link: https://pixabay.com/vectors/ping-pong-table-tennis-playing-field-150169/
credit: Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=150169">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=150169">Pixabay</a>


> 5. bats and ball

filename: table-tennis-7216579_1280.png
link: https://pixabay.com/vectors/table-tennis-ping-pong-sports-7216579/
credit: Image by <a href="https://pixabay.com/users/winterflower-17292963/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7216579">Ilona S</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7216579">Pixabay</a>




# Required actions:
1. set initial values
    > game scores
    > max game score per set
    > set scores
    > total sets
    > serving position
    > singles / doubles
    > Change servers every 2 or 5 points
2. Switch for single or doubles

3. Get player names

4. keep track of scoring history

5. undo last score entry. remove from score history

6. service start picker

7. scoring increment on click

8. service change after 2 or 5 points

9. game winner? increment set score
    > highlight game winner
    > wait for click to start new set
    > click for new set should not add a point
10. options menu
    > singles / doubles
    > swap sides?
    > games to?
    > sets best of?
11. swap sides functionality

12. sets winner

13. doubles => switch players on service change




# Tabletennis Rules and how to play
1. Scoring
    > Winner is the first to 11 points
    > If the score is 10-10, them game continues until one of the players has gained a lead of 2 points
    > Points are won irrespective of who has served
    > Matches can the best of 3, 5 or 7 games – or any odd number you like!
2. Serving
    > The ball must first bounce on your side and then on your opponent’s side of the table
    > If the ball touches the net and goes over, it’s a ‘let’ – retake the serve
    > If the ball hits the net and doesn’t go over, or flies off the table without bouncing on your opponents side, you lose the point
    > There are no second serves
    > The ball should rest freely on the open palm of the server, above the level of the table
    > The ball should be projected vertically (at least 16cm)
    > In singles you can serve from anywhere and to anywhere on the table
    > Change servers every 2 points
    > If the score reaches 10-10 change server every point
3. Serving: doubles
    > Service must be diagonal, from the right half court (marked by a white line) to the opponent’s right half court.
    > Service changeover in doubles is as follows:
    > At the start of a game, the serving team will decide which player will serve first. The first player to serve is A1 and;
        > A1 serves to B1 (2 services)
        > B1 then serves to A2 (2 services)
        > A2 then serves to B2 (2 services)
        > B2 serves to A1 (2 services)
        > Repeat
    > At the end of game 1 and the start of game 2, team B will take the first serve; they can choose which of them will serve first.
        > Eg: B1 will serve to A1.  A1 then serves to B2 and so on.
        > OR
        > B2 will serve to A2. A2 then serves to B1 and so on.
4. Rotation rules for doubles