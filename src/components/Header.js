
function Header() {
  const logOut=()=>{
    window.location.href='/'
  }
  return (
    <header>
      
      <div className="row">
        <div className="column">
      <h1>About Us</h1>
       <p >Lorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration. It serves as a place holder indicating where the text will be in the final iteration.

Originally from Latin, Lorem ipsum has no intelligible meaning. It is simply a display of letters to be viewed as a sample with given graphical elements in a file.

"Lipsum" (a portmanteau of lorem and ipsum) generators are commonly used to form generic text in a file. The words are adequately like normal text to demonstrate a font, without distracting the reader with its content.

It has been used by printers as placeholder text since the 16th century.

Richard McClintock discovered the origins of the words Lorem Ipsum back in 1982, who published his findings in 1994 in a letter to the editor of Before & After magazine who wrongly claimed that the passage had no meaning.</p>
</div>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
