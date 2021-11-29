import nineDollars from '../images/nine-dollars.gif'
import bbq from '../images/barbeque.jpg'
import menu from '../images/food-menu.jpg'
import beer from '../images/beer.jpg'
import waiter from '../images/waiter.jpg'
import food from '../images/food.jpg'

function Home() {
    return (
      <div id="body">
        <div className="slider">
          <ul>
            <li className="first">
              <h2>FUSCE SIT AMET EGET UTRU</h2>
              <img src={nineDollars} alt="" width="213" height="64" />
              <p> Curabitur omare dolor arcu. Sed gravida eu risus dapibus eu posuere quam pulvinar </p>
              <a href="reservation.html">BOOK A TABLE</a> </li>
            <li> <a href="#"> <img src={bbq} width="640" height="331" alt="" /></a> </li>
          </ul>
        </div>
        <ul id="featured">
          <li className="first"><a href="food.html"><img src={menu} width="470" height="237" alt="" /></a> </li>
          <li><a href="beer.html"><img src={beer} width="460" height="237" alt="" /></a> </li>
        </ul>
        <div className="section">
          <h3>$7 LUNCH &amp; DINNER BUFFET </h3>
          <p> Nulla a tellus in erat ullamcorper trisque. Suspendisse at mauris. Sed ut eros. <a href="#" className="more">&nbsp;</a> </p>
        </div>
        <div id="content">
          <div className="article">
            <ul>
              <li>
                <h2><a href="#">Duis a quam sem Vivamus elit felis</a></h2>
                <p> <a href="#"><img src={waiter} width="162" height="101" alt="" /></a> This website template has been designed by Free website templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. </p>
              </li>
              <li>
                <h2><a href="#">Vestibulum at neque nibh condimentum</a></h2>
                <p> <a href="#"><img src={food} width="162" height="122" alt="" /></a> If you're having problems editing this website template, then don't hesitate to ask for help on the forum. </p>
                <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec tellus quis enim pharetra molestie. </p>
              </li>
            </ul>
          </div>
          <div className="aside">
            <h3>Duis a quam sem Vivamus elit felis</h3>
            <ul>
              <li>
                <h2>Cum sociis natoque penatibusmagnis</h2>
                <p> parturient montes, nascetur ridiculus mus. Aliquam odio neque, elementum nec laoreet </p>
              </li>
              <li>
                <h2>Looking for more templates?</h2>
                <p> Just browse through all our Free Website Templates and find what you're looking for. </p>
              </li>
              <li className="last">
                <h2>Nulla vitae quam in sapien lobortis </h2>
                <p> sed vitae magna. Nulla risus felis, dapibus vitae porta eu, pulvinar vitae tellus.Pellen tesque habitant morbi tristique sapien </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Home
