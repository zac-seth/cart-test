import { styled } from "styletron-react"
import styles from "./styles"

export default styled("div", {
    width: "100%",
    height: "100%",
    
    [styles.layout.breakpoints.largeScreens]: {
        display: "block",
        width: "1024px",
        margin: "0 auto"
    }
})