import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import {DISHES} from '../dishes'
function Home () {
    var random,ranDish = null
    random = Math.floor((Math.random()*3) + 0)
    DISHES.map(dish => random==dish.id ? ranDish=dish: null) 
   
    return(
        <div>
            
            <div className="home-image">
                <img src="https://images.squarespace-cdn.com/content/v1/5835d948414fb5a615f7641e/1481519058032-2V7L61ZFLEDNYTL2CYU7/ke17ZwdGBToddI8pDm48kHTHJlACqy9PR67J39ATHOp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfZ1qQlCBU8D8HwMSx19XWWhZWoAraqJt_ybhixA0kzVDVfRxgAIsQ7eQiOnQS3C_Q/Food+Photo+Background.jpg?format=2500w"></img>
            </div>
            <div className="home-labels">
                <div>
                    <Link to='/menu' exact>
                        <img src="../assets/images/Menu.jpg"></img>
                        <p>Menu</p>
                    </Link>
                </div>
            
                <div>
                    <Link to={"/menu/"+ ranDish.name}>
                        <img src="../assets/images/Special.jpg"></img>
                        <p>Specials</p>
                    </Link>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.3751447513187!2d79.
                    01614047891421!3d10.728870326887593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                    1!3m3!1m2!1s0x3baabe2803211597%3A0x6371e96c202331c!2sSASTRA%20Deemed%20to%20be%20University!5e0!3m2!1sen!2sin!4v1600428403540!5m2!1sen!2sin"
                    width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <p>Location</p>
                </div>
            </div>
        </div>
    )
}
export default Home