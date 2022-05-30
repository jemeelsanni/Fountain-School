import React from "react";
import Footer from "./Footer";
const About = () => {
    return (
        <div className=" px-20">
            <section>
                <div>
                    <img className=" w-full h-96" src= "./creche.jpg"/>
                </div>
            </section>

            <section className=" mt-10">
                <div>
                    <h2 className="text-3xl font-semibold">OUR HISTORY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nunc enim nisl 
                        sit egestas. A vel volutpat amet lectus eget sem mauris fringilla. Aliquam sit in 
                        fermentum nunc sapien in. Tellus pharetra diam quam vestibulum eleifend aliquam dolor 
                        suspendisse. Mauris, quam quisque sed vel pellentesque aliquet. Tortor orci commodo 
                        justo, nibh. Urna sit consectetur morbi ac duis integer facilisis habitasse faucibus. 
                        Placerat accumsan, purus imperdiet lobortis sapien turpis eleifend. Augue sollicitudin 
                        ut ultricies justo, condimentum sit ac. Ipsum leo rutrum etiam ullamcorper pulvinar non 
                        integer. Neque egestas faucibus in pellentesque viverra in magna. Maecenas egestas in ac id. 
                        Volutpat egestas at dolor egestas dui dui neque at. Lorem auctor odio nibh amet. Placerat 
                        amet id pellentesque pellentesque egestas est. Pellentesque quis egestas ac ac odio.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nunc enim nisl 
                        sit egestas. A vel volutpat amet lectus eget sem mauris fringilla. Aliquam sit in 
                        fermentum nunc sapien in. Tellus pharetra diam quam vestibulum eleifend aliquam dolor 
                        suspendisse. Mauris, quam quisque sed vel pellentesque aliquet. Tortor orci commodo 
                        justo, nibh. Urna sit consectetur morbi ac duis integer facilisis habitasse faucibus. 
                        Placerat accumsan, purus imperdiet lobortis sapien turpis eleifend. Augue sollicitudin 
                        ut ultricies justo, condimentum sit ac. Ipsum leo rutrum etiam ullamcorper pulvinar non 
                        integer. Neque egestas faucibus in pellentesque viverra in magna. Maecenas egestas in ac id. 
                        Volutpat egestas at dolor egestas dui dui neque at. Lorem auctor odio nibh amet. Placerat 
                        amet id pellentesque pellentesque egestas est. Pellentesque quis egestas ac ac odio.</p>
                </div>
            </section>

            <section className=" mt-10">
                <div className=" contents table clear-both">
                    <div className=" float-left w-1/2 p-3 bg-philosophy">
                        <h2 className="text-3xl font-semibold text-center">PHILOSOPHY</h2>
                        <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, est ut a, eleifend tempor 
                            sagittis, consequat. Ante egestas eget ultricies eu tortor. Mollis at euismod eget in 
                            vulputate posuere ipsum magna malesuada.</p>
                    </div>
                    <div className=" float-left w-1/2 p-3 bg-Primary">
                        <h2 className="text-3xl font-semibold text-center">GOALS</h2>
                        <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, est ut a, eleifend tempor 
                            sagittis, consequat. Ante egestas eget ultricies eu tortor. Mollis at euismod eget in 
                            vulputate posuere ipsum magna malesuada.</p>
                    </div>
                </div>
                <br/>
            </section>

            <section className=" mt-10">
                <div>
                    <h2 className=" text-center text-3xl font-semibold">FACILITIES</h2>
                    
                        <li>Spacious and conducive classrooms equipped with interactive white board and television sets.</li>
                        <li>Mini libraries including DVD and Video players.</li>
                        <li>An ultra-modern Computer Room fully equipped with the latest computers.</li>
                        <li>A high profile school library fully stocked with books covering virtually all subjects.</li>
                        <li>The cosy nature of the library makes it truly a reader’s delight.</li>
                        <li>A world class Music Room manned by highly skilled and competent teachers. </li>
                        <li>Art Room and Electronic Smart board as teaching aid.</li>
                        <li>A state of the art Home Economics Room equipped with standard kitchen and sitting room.</li>
                        <li>Well-equipped Science Room for effective teaching.</li>
                        <li>A standard boarding facility.</li>
                        <li>State of the art multi-purpose School Hall with a standard stage for various performances.</li>
                        <li>Well grassed Football field.</li>
                        <li>A well-equipped playground for the nursery.</li>
                        <li>A fully equipped in-house clinic staffed with medical professionals.</li>
                
                </div>
            </section>

            <section className=" mt-10">
                <div className=" contents table clear-both">
                    <div className=" float-left w-1/2 p-3">
                        <img className=" w-full" src="./classroom.jpg"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-center">ACHIEVEMENTS</h2>
                        <li>99% with credit pass and above in 2014 SSCE</li>
                        <li>First Secondary School to Represent Nigeria at The International Geography Olympiad (iGEO) held in Cologne Germany in 2012</li>
                        <li>Bronze Medal at the International Junior Science Olympiad (IJSO) in 2008</li>
                        <li>Second Position in Ogun State COWBELL Mathematics Competition in 2004</li>
                    </div>
                </div>
                
            </section>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
            
        </div>
        
        )
    }
    export default About