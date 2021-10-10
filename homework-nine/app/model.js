var MODEL = (function() {

    var _homeContent = `<div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa!</p>
        
    </div>
    <div class="photo">
        <img src="images/radar-home.jpeg" alt="Squall line radar image">
    </div>


</div>

<div class="home-container">
    <div class="photo">
        <img src="images/music-home.JPG" alt="Matthew Masko conducting a choir">
    </div>
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam illo nulla sed quas error praesentium rerum laboriosam reprehenderit velit cumque. Magni assumenda commodi reprehenderit debitis natus, eaque aliquam magnam aspernatur.</p>
        
    </div>
</div>

<div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, nemo quo. Laudantium sint iste vel repudiandae praesentium tempora, modi nemo tempore labore repellendus sunt in distinctio accusamus dolores culpa facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque aspernatur velit delectus laborum ipsum ducimus consequatur, deleniti explicabo vel dolore repellendus molestias voluptatem vitae soluta nihil praesentium! Repudiandae, saepe.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta rem laudantium eum facere voluptatum enim esse consequuntur dolores fuga, nam fugiat autem sit suscipit minima minus repellat dignissimos quisquam laboriosam id explicabo repellendus totam? Corporis iure hic iusto asperiores, aliquid quo aspernatur iste, odio libero sint numquam veniam? Tenetur est magnam, cumque id culpa debitis. Animi nostrum facere natus deleniti id expedita molestiae porro ipsum dicta rerum nobis adipisci, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta hic libero eius inventore quo dolorem.</p>
    </div>
    <div class="photo">
        <img src="images/pastor-home.JPG" alt="The Rev. Matthew Masko at the altar">
    </div>


</div>`;
    var _weatherContent = ` <div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa!</p>
        
    </div>
    <div class="photo">
        <img src="images/weather/cb.jpeg" alt="distant cumulonimbus cloud">
    </div>


</div>

<div class="home-container">
    <div class="photo">
        <img src="images/weather/lightning.jpeg" alt="lightning">
    </div>
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam illo nulla sed quas error praesentium rerum laboriosam reprehenderit velit cumque. Magni assumenda commodi reprehenderit debitis natus, eaque aliquam magnam aspernatur.</p>
        
    </div>
</div>

<div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, nemo quo. Laudantium sint iste vel repudiandae praesentium tempora, modi nemo tempore labore repellendus sunt in distinctio accusamus dolores culpa facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque aspernatur velit delectus laborum ipsum ducimus consequatur, deleniti explicabo vel dolore repellendus molestias voluptatem vitae soluta nihil praesentium! Repudiandae, saepe.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta rem laudantium eum facere voluptatum enim esse consequuntur dolores fuga, nam fugiat autem sit suscipit minima minus repellat dignissimos quisquam laboriosam id explicabo repellendus totam? Corporis iure hic iusto asperiores, aliquid quo aspernatur iste, odio libero sint numquam veniam? Tenetur est magnam, cumque id culpa debitis. Animi nostrum facere natus deleniti id expedita molestiae porro ipsum dicta rerum nobis adipisci, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta hic libero eius inventore quo dolorem, tempore ab veniam eos amet rem sint earum odio! Ducimus voluptas esse et doloremque aliquam omnis vel necessitatibus in nesciunt, hic, pariatur ratione ea facilis harum quam beatae sapiente magnam consectetur.</p>
    </div>
    <div class="photo">
        <img src="images/weather/rainbow.jpeg" alt="rainbow">
    </div>


</div>`;
    var _musicContent = `<div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa!</p>
        
    </div>
    <div class="photo">
        <img src="images/music/masko-musicwall.JPG" alt="Matthew Masko at a music wall, downtown Minneapolis, MN.">
    </div>


</div>

<div class="home-container">
    <div class="photo">
        <img src="images/music/masko-pit.JPG" alt="Matthew Masko in the orchestra pit.">
    </div>
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam illo nulla sed quas error praesentium rerum laboriosam reprehenderit velit cumque. Magni assumenda commodi reprehenderit debitis natus, eaque aliquam magnam aspernatur.</p>
        
    </div>
</div>

<div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, nemo quo. Laudantium sint iste vel repudiandae praesentium tempora, modi nemo tempore labore repellendus sunt in distinctio accusamus dolores culpa facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque aspernatur velit delectus laborum ipsum ducimus consequatur, deleniti explicabo vel dolore repellendus molestias voluptatem vitae soluta nihil praesentium! Repudiandae, saepe.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta rem laudantium eum facere voluptatum enim esse consequuntur dolores fuga, nam fugiat autem sit suscipit minima minus repellat dignissimos quisquam laboriosam id explicabo repellendus totam? Corporis iure hic iusto asperiores, aliquid quo aspernatur iste, odio libero sint numquam veniam? Tenetur est magnam, cumque id culpa debitis. Animi nostrum facere natus deleniti id expedita molestiae porro ipsum dicta rerum nobis adipisci, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta hic libero eius inventore quo dolorem, tempore ab veniam eos amet rem sint earum odio! Ducimus voluptas esse et doloremque aliquam omnis vel necessitatibus in nesciunt, hic, pariatur ratione ea facilis harum quam beatae sapiente magnam consectetur.</p>
    </div>
    <div class="photo">
        <img src="images/music/masko-piano.JPG" alt="Matthew Masko at the piano">
    </div>


</div>`;
    var _theologyContent = ` <div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa!</p>
        
    </div>
    <div class="photo">
        <img src="images/theology/masko-confirmation.jpeg" alt="The Rev. Matthew Masko and Erin Kitchell, confirmation 2021.">
    </div>

</div>

<div class="home-container">
    <div class="photo">
        <img src="images/theology/masko-office.jpeg" alt="The Rev. Matthew Masko in his study.">
    </div>
    <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus distinctio aut quidem assumenda, voluptatem quisquam voluptatibus itaque ut dolore rem doloribus cupiditate alias repudiandae eos vitae tempora accusamus incidunt aperiam non nisi labore at animi. Temporibus, impedit? Nesciunt ipsa vero nulla architecto corrupti tempora neque suscipit ipsum aliquid odio eum quam non illum reprehenderit odit soluta optio, nihil molestiae quos. Odit, laboriosam aliquam! Fugit dolore recusandae optio maxime necessitatibus atque illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magnam minima nihil illo, vero quam iusto atque possimus perspiciatis debitis ea aperiam necessitatibus dolorum cupiditate. Fugit ipsa nemo velit. Culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam illo nulla sed quas error praesentium rerum laboriosam reprehenderit velit cumque. Magni assumenda commodi reprehenderit debitis natus, eaque aliquam magnam aspernatur.</p>
        
    </div>
</div>

<div class="home-container">
    <div class="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, nemo quo. Laudantium sint iste vel repudiandae praesentium tempora, modi nemo tempore labore repellendus sunt in distinctio accusamus dolores culpa facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque aspernatur velit delectus laborum ipsum ducimus consequatur, deleniti explicabo vel dolore repellendus molestias voluptatem vitae soluta nihil praesentium! Repudiandae, saepe.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta rem laudantium eum facere voluptatum enim esse consequuntur dolores fuga, nam fugiat autem sit suscipit minima minus repellat dignissimos quisquam laboriosam id explicabo repellendus totam? Corporis iure hic iusto asperiores, aliquid quo aspernatur iste, odio libero sint numquam veniam? Tenetur est magnam, cumque id culpa debitis. Animi nostrum facere natus deleniti id expedita molestiae porro ipsum dicta rerum nobis adipisci, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta hic libero eius inventore quo dolorem, tempore ab veniam eos amet rem sint earum odio! Ducimus voluptas esse et doloremque aliquam omnis vel necessitatibus in nesciunt, hic, pariatur ratione ea facilis harum quam beatae sapiente magnam consectetur.</p>
    </div>
    <div class="photo">
        <img src="images/theology/htlc.jpeg" alt="The courtyard at Holy Trinity Lutheran Church, New Castle, IN.">
    </div>


</div>`;

    var _updateView = function(pageName) {
        console.log("Model " + pageName);
        var pageName = "_" + pageName;
        $("#app").html(eval(pageName));
    }

return {
    updateView: _updateView,
};

})();
