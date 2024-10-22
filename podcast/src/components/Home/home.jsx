import "./home.css"
import Podcard from "../reuseable/reuseable"



const Home = () => {
    return ( 
        <div className="Card-Container">
             <top>
                    <Podcard
                    Title="Stay Motivated"
                    Author="Mark Twain"
                    Content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod beatae ea repellat nobis esse explicabo nostrum ut earum exercitationem deleniti corrupti debitis ."
                    Date="2/06/2024"
                    Styles=""
                    />

                    <Podcard
                    Title="Think like a Developer"
                    Author="Nelson Mandela"
                    Content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod beatae ea repellat nobis esse explicabo nostrum ut earum exercitationem deleniti corrupti debitis ."
                    Date="14/08/2024"
                    Styles=""
                    />
                </top>
                <buttom>
                    <Podcard
                    Title="Good Influence"
                    Author="Ben George"
                    Content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod beatae ea repellat nobis esse explicabo nostrum ut earum exercitationem deleniti corrupti debitis ."
                    Date="8/12/2024"
                    Styles=""
                    />
                
                    <Podcard
                    Title="Think Big"
                    Author="Bill Gate"
                    Content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod beatae ea repellat nobis esse explicabo nostrum ut earum exercitationem deleniti corrupti debitis ."
                    Date="21/7/2024"
                    Styles=""
                    />
                </buttom>
            
        </div>
     );
}
 
export default Home;