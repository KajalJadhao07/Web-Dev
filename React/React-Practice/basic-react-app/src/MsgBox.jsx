function MsgBox({username, textcolor}){
    let style = {color : textcolor};
    return(
        <div style ={style}>
            <h1>Hello {username}!!</h1>
        </div>
    )
}

export default MsgBox;