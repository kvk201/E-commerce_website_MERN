    //
    const nameComponent = (
    <div id ="name_out">
            <h2 id = "name_component">Vivek Kumar</h2>
    </div>
    );

    const photoComponent = (
        <div id = "photo_out">
            <img id = "photo_component" src = "./vivek.jpg"/>
        </div>
    );

    const introComponent = (
        <div id= "intro_out">
            <p id = "intro_component">
            On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite.
            </p>
        </div>
                
    );

    const buttonComponent = (
        <div id= "button_out">
            <a href="https://github.com/messi618/CS648C1"><button id= "button_component">view my github repository!</button></a>
        </div>
    );

    ReactDOM.render(nameComponent, document.getElementById('name'));

    ReactDOM.render(photoComponent, document.getElementById('photo'));

    ReactDOM.render(introComponent, document.getElementById('introduction'));

    ReactDOM.render(buttonComponent, document.getElementById('button'));
    