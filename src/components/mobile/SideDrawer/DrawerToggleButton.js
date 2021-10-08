import classes from "./DrawerToggleButton.module.css"

function DrawerToggleButton (props) {
    return(
        <button className={classes.toggle_button} onClick={props.click}>
            <div className={classes.toggle_button_line} />
            <div className={classes.toggle_button_line} />
            <div className={classes.toggle_button_line} />
        </button>
    );
}

export default DrawerToggleButton;