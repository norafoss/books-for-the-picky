/**
 * This manages HTML code for the site's header.
 * @returns html component
 */

const Header = () => {

  /**
   * This allows a user to search the website
   */
  const search = () => {
    console.log("this will be a search function");
  }

  return(
    <div className="header">
      <header>
        <h1>Books for the Picky</h1>
        <h2>Reviewed by the Pickiest of Bookworms</h2>
      </header>
      <section id="search">
        <input></input>
        <button onClick={search}>Search</button>
      </section>
    </div>
  );
}

export default Header;