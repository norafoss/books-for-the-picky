/**
 * This manages HTML code for the site's header.
 * @returns html component
 */

const Header = () => {

  /**
   * This creates a pop up for making a book rec.
   */
  const makeRec = () => {
    console.log("this will be a pop up");
  }

  return(
    <div className="header">
      <header>
        <h1>Books for Picky Bitches</h1>
        <h2>Reviewed by the Pickiest of Bookworms</h2>
      </header>
      <section>
        <input></input>
        <button onClick={makeRec}>Send a rec</button>
      </section>
    </div>
  );
}

export default Header;