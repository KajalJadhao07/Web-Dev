function Price({oldPrices, newPrices}){
    let Oldstyles = {
        textDecorationLine: "line-through",
    }
    let newStyles = {
        fontWeight: "bold",
    }

    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "auto",
        padding: "5px"

    }
    return(
        <div style = {styles}>
            <span style={Oldstyles}>{oldPrices}</span>
            &nbsp; &nbsp; &nbsp;
            <span style = {newStyles}>{newPrices}</span>
        </div>
    );
}

export default Price;