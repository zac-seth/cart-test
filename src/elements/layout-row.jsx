import React from "react"
import { styled } from "styletron-react"
import styles from "./styles"

export default styled("div", {
    

    [styles.layout.breakpoints.largeScreens]: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-between",
        alignItems: "stretch"
    }
})