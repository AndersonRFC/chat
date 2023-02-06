const SpaceEntrie = (props) => {

    function pressedKey(e){
        if(e.key == "Enter"){
            props.submit();
        }
    }

    return(
        <div className='spaceEntrie'>
            <input id="entrie" type="text" onKeyDown={(e) => {pressedKey(e)}}/>
        </div>
    )
}

export default SpaceEntrie