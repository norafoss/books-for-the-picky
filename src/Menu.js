/**
 * This manages the HTML for the site menu.
 * @returns menu html component
 */

const makeRec = () => {
  console.log("this will be a pop up");
}

const Menu = () => {
  return(
    <ul id="menu">
      <li className="home"><a href="/home">Home</a></li>
      <li className="genre"><a href="/by_genre">By Genre</a></li>
      <li className="best"><a href="/best_of">Best of</a></li>
      <li className="worst"><a href="/worst_of">...Worst of</a></li>
      <li className="soon"><a href="/coming_soon">Coming Soon</a></li>
      <li onClick={makeRec}><p>Make a rec!</p></li>
    </ul>
  );
}

export default Menu;